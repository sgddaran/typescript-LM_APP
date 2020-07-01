import { Validatable } from "../decorators/validator.js"

export type LoanAccount = {
    accountNumber: string
    name: string
    dueday: number
    due: number
    tenor: number
    amount: number
    loanType: LOAN_TYPE
    monthlyStatus: STATUS
}

export enum STATUS { ACTIVE = "Active", INACTIVE = "Inactive" }
export enum LOAN_TYPE { CAR = "Car Loan", PL = "Personal Loan", HL = "Home Loan", CC = "Credit Card" }

export class CustomerProfile {
    private customerId: string
    private customer: string
    private loans: LoanAccount[] = []
    private loadedAmount: number = 0
    private balanceAmount: number = 0

    constructor(customer: string, incash: number) {
        this.customerId = "CUST_" + Math.random()
        this.customer = customer
        this.loadedAmount = incash
    }

    addLoan(loan: LoanAccount) {
        this.loans.push(loan)
    }

    pushLoans(_loadLoans: LoanAccount[]) {
        this.loans.push(..._loadLoans)
    }

    loadLoans() {
        return this.loans
    }
}

export class Loan {

    @Validatable({ required: true, type: "string", maxLength: 5 })
    accountNumber: string
    name: string
    @Validatable({ required: true, type: "number", upper: 25, lower: 1 })
    dueday: string
    @Validatable({ required: true, type: "number" })
    due: string
    @Validatable({ required: true, type: "number", upper: 999, lower: 1 })
    tenor: string
    @Validatable({ required: true, type: "number" })
    amount: string
    loanType: string

    constructor(accountNumber: string, name: string, due: string, dueday: string, tenor: string, amount: string, loanType: string) {
        this.accountNumber = accountNumber
        this.name = name
        this.due = due
        this.dueday = dueday
        this.loanType = loanType
        this.tenor = tenor
        this.amount = amount

    }
}