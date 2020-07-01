import { CustomerProfile, LOAN_TYPE, STATUS } from "./models/requests";
const loans = [
    { accountNumber: "AC5699", due: 16533, amount: 1800000, dueday: "10", loanType: LOAN_TYPE.HL, monthlyStatus: STATUS.ACTIVE, name: "Home Loan", tenor: 140 },
    { accountNumber: "AC5256", due: 22000, amount: 100000, dueday: "7", loanType: LOAN_TYPE.PL, monthlyStatus: STATUS.ACTIVE, name: "Personal Loan", tenor: 60 },
    { accountNumber: "AC5659", due: 10600, amount: 500000, dueday: "7", loanType: LOAN_TYPE.CAR, monthlyStatus: STATUS.ACTIVE, name: "Car Loan", tenor: 60 }
];
const profile = new CustomerProfile("customer", 60000);
profile.pushLoans(loans);
class Home {
    constructor() {
        this.template = document.getElementById("dashboard-tmplt");
        this.target = document.getElementById("pamblock");
        const importNode = document.importNode(this.template.content, true);
        this.content = importNode.firstElementChild;
    }
}
class Dashboard extends Home {
    constructor() {
        super();
        this.activeBlock = this.content.firstElementChild;
        this.inactiveBlock = this.activeBlock.nextElementSibling;
    }
}
/*
const oncart: HTMLDivElement = document.querySelector(".on-cart")! as HTMLDivElement
oncart.addEventListener("drop", (ev: DragEvent) => {
    const cid = ev.dataTransfer?.getData("text")!
    oncart.appendChild(document.getElementById(cid)!)
    oncart.style.padding = "0px"
})


oncart.addEventListener("dragover", (ev: DragEvent) => {
    ev.preventDefault()
})

function loadCart() {
    let stockPanel: HTMLElement = document.getElementById("stack") as HTMLElement
    items.forEach((item) => {
        const div: HTMLElement = document.createElement("div")
        div.id = item.itemId
        div.className = "cart"
        div.draggable = true
        div.addEventListener("dragstart", (ev: DragEvent) => {
            // alert();
            ev.dataTransfer?.setData("text", div.id)
            // oncart.appendChild(document.getElementById(cid)!)
        })
        div.innerHTML = `<p style="text-align:center">${item.item}- Rs.${item.price}<br>In Stock:${item.quantity} Kg</p></center>`
        stockPanel.appendChild(div)
    })
}

*/
const db = new Dashboard();
