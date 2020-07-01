export var STATUS;
(function (STATUS) {
    STATUS[STATUS["ACTIVE"] = 0] = "ACTIVE";
    STATUS[STATUS["INACTIVE"] = 1] = "INACTIVE";
})(STATUS || (STATUS = {}));
export var LOAN_TYPE;
(function (LOAN_TYPE) {
    LOAN_TYPE[LOAN_TYPE["CAR"] = 0] = "CAR";
    LOAN_TYPE[LOAN_TYPE["PL"] = 1] = "PL";
    LOAN_TYPE[LOAN_TYPE["HL"] = 2] = "HL";
    LOAN_TYPE[LOAN_TYPE["CC"] = 3] = "CC";
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
    pushLoans(_loadLoans) {
        this.loans.push(..._loadLoans);
    }
    loadLoans() {
        return this.loans;
    }
}
