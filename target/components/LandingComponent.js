"use strict";
class Home {
    constructor(templateId) {
        this.template = document.getElementById(templateId);
        this.target = document.getElementById("pamblock");
        const importNode = document.importNode(this.template.content, true);
        this.content = importNode.firstElementChild;
        this.target.appendChild(this.content);
    }
}
