export class Home {
    constructor(template) {
        const htmDocument = new DOMParser().parseFromString(template, "text/xml");
        // this.template = document.getElementById(templateId)! as HTMLTemplateElement
        this.target = document.getElementById("pamblock");
        // const importNode = document.importNode(content, true);
        // this.content = htmDocument.documentElement.firstElementChild! as HTMLDivElement
        this.content = htmDocument.documentElement;
        if (this.target.children.length == 0) {
            this.target.appendChild(this.content);
        }
        else {
            this.target.removeChild(this.target.children.item(0));
            this.target.appendChild(this.content);
        }
    }
}
