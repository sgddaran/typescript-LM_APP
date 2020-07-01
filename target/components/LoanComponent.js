import { Home } from "./Home.js";
import { templates } from "../templates.js";
export class LoanComponent extends Home {
    constructor() {
        super(templates.loanform);
    }
}
