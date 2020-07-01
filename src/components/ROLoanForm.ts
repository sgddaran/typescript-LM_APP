import { LoanAccount } from "../models/requests.js"
import { templates } from "../templates.js"

export class ROLoanForm {

    constructor(loan: LoanAccount, element: HTMLDivElement) {
        const formhtml: string = templates.readonlyloanform
        const htmldocument = new DOMParser().parseFromString(formhtml, "text/html")
        this.setValues(htmldocument, loan)
        element.innerHTML = htmldocument.documentElement.innerHTML
        this.addCloseEvent(element)
    }

    private setValues(htmldocument: Document, loan: LoanAccount) {
        (htmldocument.getElementById("loanNumber")! as HTMLOutputElement).value = loan.accountNumber;
        (htmldocument.getElementById("amount")! as HTMLOutputElement).value += loan.amount;
        (htmldocument.getElementById("due")! as HTMLOutputElement).value += loan.due;
        (htmldocument.getElementById("dueday")! as HTMLOutputElement).value += loan.dueday;
        (htmldocument.getElementById("loanType")! as HTMLOutputElement).value = loan.loanType;
        (htmldocument.getElementById("monthlyStatus")! as HTMLOutputElement).value = loan.monthlyStatus;
        (htmldocument.getElementById("tenor")! as HTMLOutputElement).value += loan.tenor;
    }

    private addCloseEvent(target: HTMLElement) {
        document.getElementById("closebtn")?.addEventListener("click", (event: Event) => {
            target.style.width = "0%";
        })
    }

}