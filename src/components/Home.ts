import { templates } from "../templates"

export class Home {

    // template: HTMLTemplateElement
    target: HTMLDivElement
    content: HTMLDivElement
    constructor(template: string) {
        const htmDocument: Document = new DOMParser().parseFromString(template, "text/xml")
        // this.template = document.getElementById(templateId)! as HTMLTemplateElement
        this.target = document.getElementById("pamblock")! as HTMLDivElement
        // const importNode = document.importNode(content, true);
        // this.content = htmDocument.documentElement.firstElementChild! as HTMLDivElement
        this.content = htmDocument.documentElement as HTMLDivElement
        if (this.target.children.length == 0) {
            this.target.appendChild(this.content);
        } else {
            this.target.removeChild(this.target.children.item(0)!)
            this.target.appendChild(this.content);
        }
    }

}