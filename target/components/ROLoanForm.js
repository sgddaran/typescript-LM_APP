import { templates } from "../templates.js";
export class ROLoanForm {
    constructor(loan, element) {
        const formhtml = templates.readonlyloanform;
        const htmldocument = new DOMParser().parseFromString(formhtml, "text/html");
        this.setValues(htmldocument, loan);
        element.innerHTML = htmldocument.documentElement.innerHTML;
        this.addCloseEvent(element);
    }
    setValues(htmldocument, loan) {
        htmldocument.getElementById("loanNumber").value = loan.accountNumber;
        htmldocument.getElementById("amount").value += loan.amount;
        htmldocument.getElementById("due").value += loan.due;
        htmldocument.getElementById("dueday").value += loan.dueday;
        htmldocument.getElementById("loanType").value = loan.loanType;
        htmldocument.getElementById("monthlyStatus").value = loan.monthlyStatus;
        htmldocument.getElementById("tenor").value += loan.tenor;
    }
    addCloseEvent(target) {
        var _a;
        (_a = document.getElementById("closebtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
            target.style.width = "0%";
        });
    }
}
