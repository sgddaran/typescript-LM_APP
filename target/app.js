import { CustomerProfile } from "./models/requests.js"; // add .js ext :- browser to recognize es module file
import { loans } from "./data/DataProvider.js";
import { Dashboard } from "./components/Dashboard.js";
const profile = new CustomerProfile("customer", 60000);
profile.pushLoans(loans);
const db = new Dashboard(profile);
// new LoanComponent()
