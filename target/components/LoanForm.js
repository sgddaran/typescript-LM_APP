import { templates } from "../templates.js";
import { Loan, STATUS } from "../models/requests.js";
import { validate } from "../decorators/validator.js";
import { Dashboard } from "./Dashboard.js";
export class LoanForm {
    constructor(customprofile, element) {
        const formhtml = templates.loanform;
        const htmldocument = new DOMParser().parseFromString(formhtml, "text/html");
        // this.setValues(htmldocument, loan)
        element.innerHTML = htmldocument.documentElement.innerHTML;
        this.customprofile = customprofile;
        this.addCloseEvent(element);
        this.addSaveEvent(element);
    }
    addSaveEvent(target) {
        var _a;
        (_a = document.getElementById("svelnbtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
            const loanNumElem = document.getElementById("loanNumber");
            const amountElem = document.getElementById("amount");
            const dueElem = document.getElementById("due");
            const duedayElem = document.getElementById("dueday");
            const tenorElem = document.getElementById("tenor");
            const selectElem = document.getElementById("loanType");
            const loan = new Loan(loanNumElem.value, selectElem.options[selectElem.selectedIndex].label, dueElem.value, duedayElem.value, tenorElem.value, amountElem.value, selectElem.value);
            const result = validate(loan);
            if (result.size === 0) {
                this.save(loan);
                target.style.width = "0%";
                new Dashboard(this.customprofile);
            }
            else {
                result.forEach((value) => {
                    if (value.field === "accountNumber") {
                        loanNumElem.value = "";
                        loanNumElem.placeholder = value.message;
                    }
                    if (value.field === "due") {
                        dueElem.value = "";
                        dueElem.placeholder = value.message;
                    }
                    if (value.field === "dueday") {
                        duedayElem.value = "";
                        duedayElem.placeholder = value.message;
                    }
                    if (value.field === "amount") {
                        amountElem.value = "";
                        amountElem.placeholder = value.message;
                    }
                    if (value.field === "tenor") {
                        tenorElem.value = "";
                        tenorElem.placeholder = value.message;
                    }
                });
            }
        });
    }
    addCloseEvent(target) {
        var _a, _b;
        (_a = document.getElementById("closebtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
            target.style.width = "0%";
        });
        (_b = document.getElementById("clslnbtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (event) => {
            target.style.width = "0%";
        });
    }
    save(loan) {
        this.customprofile.addLoan({
            accountNumber: loan.accountNumber,
            amount: parseFloat(loan.amount),
            due: parseInt(loan.due),
            dueday: parseInt(loan.dueday),
            loanType: loan.name,
            monthlyStatus: STATUS.ACTIVE,
            name: loan.name,
            tenor: parseInt(loan.tenor)
        });
    }
}
