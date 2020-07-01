var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { enableDragAndDrop, processDecorators } from "../decorators/dragdrop.js";
import { ROLoanForm } from "./ROLoanForm.js";
import { Home } from "./Home.js";
import { templates } from "../templates.js";
import { LoanForm } from "./LoanForm.js";
export class Dashboard extends Home {
    constructor(cutomerProfile) {
        super(templates.dashboard);
        this.activeBlock = this.content.querySelector("#active");
        this.inactiveBlock = this.content.querySelector("#passive");
        this.addLoanBtn = this.content.querySelector("#addlnbtn");
        this.loadBlocks(cutomerProfile.loadLoans());
        this.addActionEvents(cutomerProfile);
        processDecorators(this);
    }
    loadBlocks(loans) {
        let isActiveBlockEmpty = true;
        let isInActiveBlockEmpty = true;
        loans.forEach((loan) => {
            const divElement = document.createElement("div");
            divElement.id = `${loan.accountNumber}-${loan.loanType}`;
            divElement.className = "tile";
            divElement.innerHTML = `<p class="tile-content">${loan.loanType}<br>Rs:${loan.due}</p>`;
            divElement.draggable = true;
            divElement.addEventListener("dragstart", (event) => {
                var _a;
                (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("data", divElement.id);
            });
            divElement.addEventListener("click", (event) => {
                const overlay = document.getElementById("overlay");
                overlay.style.width = "100%";
                new ROLoanForm(loan, overlay);
            });
            if (loan.dueday <= new Date().getDate()) {
                isInActiveBlockEmpty = false;
                this.inactiveBlock.appendChild(divElement);
            }
            else {
                isActiveBlockEmpty = false;
                this.activeBlock.appendChild(divElement);
            }
        });
    }
    addActionEvents(customprofile) {
        this.addLoanBtn.addEventListener("click", (event) => {
            const overlay = document.getElementById("overlay");
            overlay.style.width = "100%";
            new LoanForm(customprofile, overlay);
        });
    }
}
__decorate([
    enableDragAndDrop
], Dashboard.prototype, "activeBlock", void 0);
__decorate([
    enableDragAndDrop
], Dashboard.prototype, "inactiveBlock", void 0);
