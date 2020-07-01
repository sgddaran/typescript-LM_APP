var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Validatable } from "../decorators/validator.js";
export var STATUS;
(function (STATUS) {
    STATUS["ACTIVE"] = "Active";
    STATUS["INACTIVE"] = "Inactive";
})(STATUS || (STATUS = {}));
export var LOAN_TYPE;
(function (LOAN_TYPE) {
    LOAN_TYPE["CAR"] = "Car Loan";
    LOAN_TYPE["PL"] = "Personal Loan";
    LOAN_TYPE["HL"] = "Home Loan";
    LOAN_TYPE["CC"] = "Credit Card";
})(LOAN_TYPE || (LOAN_TYPE = {}));
export class CustomerProfile {
    constructor(customer, incash) {
        this.loans = [];
        this.loadedAmount = 0;
        this.balanceAmount = 0;
        this.customerId = "CUST_" + Math.random();
        this.customer = customer;
        this.loadedAmount = incash;
    }
    addLoan(loan) {
        this.loans.push(loan);
    }
    pushLoans(_loadLoans) {
        this.loans.push(..._loadLoans);
    }
    loadLoans() {
        return this.loans;
    }
}
export class Loan {
    constructor(accountNumber, name, due, dueday, tenor, amount, loanType) {
        this.accountNumber = accountNumber;
        this.name = name;
        this.due = due;
        this.dueday = dueday;
        this.loanType = loanType;
        this.tenor = tenor;
        this.amount = amount;
    }
}
__decorate([
    Validatable({ required: true, type: "string", maxLength: 5 })
], Loan.prototype, "accountNumber", void 0);
__decorate([
    Validatable({ required: true, type: "number", upper: 25, lower: 1 })
], Loan.prototype, "dueday", void 0);
__decorate([
    Validatable({ required: true, type: "number" })
], Loan.prototype, "due", void 0);
__decorate([
    Validatable({ required: true, type: "number", upper: 999, lower: 1 })
], Loan.prototype, "tenor", void 0);
__decorate([
    Validatable({ required: true, type: "number" })
], Loan.prototype, "amount", void 0);
