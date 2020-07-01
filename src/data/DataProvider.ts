import { CustomerProfile, LoanAccount, LOAN_TYPE, STATUS } from "../models/requests.js" //browser to recognize es module file

/** static data load */
export const loans: LoanAccount[] = [
    { accountNumber: "AC5699", due: 16533, amount: 1800000, dueday: 10, loanType: LOAN_TYPE.HL, monthlyStatus: STATUS.ACTIVE, name: "Home Loan", tenor: 140 },
    { accountNumber: "AC5256", due: 22000, amount: 100000, dueday: 7, loanType: LOAN_TYPE.PL, monthlyStatus: STATUS.ACTIVE, name: "Personal Loan", tenor: 60 },
    { accountNumber: "AC5659", due: 10600, amount: 500000, dueday: 16, loanType: LOAN_TYPE.CAR, monthlyStatus: STATUS.ACTIVE, name: "Car Loan", tenor: 60 }
]

