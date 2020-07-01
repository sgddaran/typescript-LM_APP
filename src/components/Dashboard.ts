import { CustomerProfile, LoanAccount } from "../models/requests.js"
import { enableDragAndDrop, processDecorators } from "../decorators/dragdrop.js"
import { ROLoanForm } from "./ROLoanForm.js";
import { Home } from "./Home.js"
import { templates } from "../templates.js"
import { LoanForm } from "./LoanForm.js";

export class Dashboard extends Home {

    @enableDragAndDrop
    activeBlock: HTMLDivElement
    @enableDragAndDrop
    inactiveBlock: HTMLDivElement

    addLoanBtn: HTMLDivElement

    constructor(cutomerProfile: CustomerProfile) {
        super(templates.dashboard);
        this.activeBlock = this.content.querySelector("#active")! as HTMLDivElement;
        this.inactiveBlock = this.content.querySelector("#passive")! as HTMLDivElement;
        this.addLoanBtn = this.content.querySelector("#addlnbtn")! as HTMLDivElement;
        this.loadBlocks(cutomerProfile.loadLoans())
        this.addActionEvents(cutomerProfile)
        processDecorators(this)
    }

    private loadBlocks(loans: LoanAccount[]) {
        let isActiveBlockEmpty = true
        let isInActiveBlockEmpty = true
        loans.forEach((loan) => {
            const divElement: HTMLElement = document.createElement("div");
            divElement.id = `${loan.accountNumber}-${loan.loanType}`
            divElement.className = "tile"
            divElement.innerHTML = `<p class="tile-content">${loan.loanType}<br>Rs:${loan.due}</p>`
            divElement.draggable = true

            divElement.addEventListener("dragstart", (event: DragEvent) => {
                event.dataTransfer?.setData("data", divElement.id)
            })

            divElement.addEventListener("click", (event: MouseEvent) => {
                const overlay = document.getElementById("overlay")! as HTMLDivElement
                overlay.style.width = "100%"
                new ROLoanForm(loan, overlay)
            })

            if (loan.dueday <= new Date().getDate()) {
                isInActiveBlockEmpty = false
                this.inactiveBlock.appendChild(divElement);
            } else {
                isActiveBlockEmpty = false
                this.activeBlock.appendChild(divElement);
            }
        })

    }

    private addActionEvents(customprofile: CustomerProfile) {
        this.addLoanBtn.addEventListener("click", (event: Event) => {
            const overlay = document.getElementById("overlay")! as HTMLDivElement
            overlay.style.width = "100%"
            new LoanForm(customprofile, overlay);
        })
    }
}