import { templates } from "../templates.js"
import { Loan, LOAN_TYPE, STATUS, CustomerProfile } from "../models/requests.js";
import { validate } from "../decorators/validator.js";
import { Dashboard } from "./Dashboard.js";


export class LoanForm {

    private customprofile: CustomerProfile
    constructor(customprofile: CustomerProfile, element: HTMLDivElement) {
        const formhtml: string = templates.loanform
        const htmldocument = new DOMParser().parseFromString(formhtml, "text/html")
        // this.setValues(htmldocument, loan)
        element.innerHTML = htmldocument.documentElement.innerHTML
        this.customprofile = customprofile
        this.addCloseEvent(element)
        this.addSaveEvent(element)
    }

    private addSaveEvent(target: HTMLElement) {
        document.getElementById("svelnbtn")?.addEventListener("click", (event: Event) => {
            const loanNumElem = document.getElementById("loanNumber") as HTMLInputElement
            const amountElem = document.getElementById("amount") as HTMLInputElement
            const dueElem = document.getElementById("due") as HTMLInputElement
            const duedayElem = document.getElementById("dueday") as HTMLInputElement
            const tenorElem = document.getElementById("tenor") as HTMLInputElement
            const selectElem = document.getElementById("loanType") as HTMLSelectElement

            const loan = new Loan(loanNumElem.value, selectElem.options[selectElem.selectedIndex].label, dueElem.value, duedayElem.value, tenorElem.value, amountElem.value, selectElem.value)
            const result = validate(loan)
            if (result.size === 0) {
                this.save(loan)
                target.style.width = "0%";
                new Dashboard(this.customprofile)
            } else {
                result.forEach((value) => {
                    if (value.field === "accountNumber") {
                        loanNumElem.value = "";
                        loanNumElem.placeholder = value.message
                    } if (value.field === "due") {
                        dueElem.value = ""
                        dueElem.placeholder = value.message
                    } if (value.field === "dueday") {
                        duedayElem.value = ""
                        duedayElem.placeholder = value.message
                    } if (value.field === "amount") {
                        amountElem.value = ""
                        amountElem.placeholder = value.message
                    } if (value.field === "tenor") {
                        tenorElem.value = ""
                        tenorElem.placeholder = value.message
                    }
                })
            }
        })
    }

    private addCloseEvent(target: HTMLElement) {
        document.getElementById("closebtn")?.addEventListener("click", (event: Event) => {
            target.style.width = "0%";
        })
        document.getElementById("clslnbtn")?.addEventListener("click", (event: Event) => {
            target.style.width = "0%";
        })
    }

    private save(loan: Loan) {
        this.customprofile.addLoan(
            {
                accountNumber: loan.accountNumber,
                amount: parseFloat(loan.amount),
                due: parseInt(loan.due),
                dueday: parseInt(loan.dueday),
                loanType: loan.name as LOAN_TYPE,
                monthlyStatus: STATUS.ACTIVE,
                name: loan.name,
                tenor: parseInt(loan.tenor)
            }
        )

    }


}