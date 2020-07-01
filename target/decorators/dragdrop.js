/* Drag and Drop */
const dragDropMap = new Map();
export function enableDragAndDrop(target, field) {
    const key = target.constructor.name;
    const sets = dragDropMap.has(key) ? dragDropMap.get(key) : new Set();
    sets === null || sets === void 0 ? void 0 : sets.add(field);
    dragDropMap.set(key, sets);
}
export function processDecorators(target) {
    const key = target.constructor.name;
    if (dragDropMap.has(key)) {
        const elements = dragDropMap.get(key);
        elements.forEach((item) => {
            const property = target[item];
            property.addEventListener("drop", (event) => {
                var _a;
                const elementId = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("data");
                const targetElement = event.target;
                targetElement.appendChild(document.getElementById(elementId));
                if (targetElement.style.paddingTop)
                    targetElement.style.paddingTop = "";
                console.log("drop:" + event.target);
            });
            property.addEventListener("dragover", (event) => {
                event.preventDefault();
                console.log("dragover:" + event.target);
            });
            property.addEventListener("dragleave", (event) => {
                event.preventDefault();
                if (property.childElementCount === 1) {
                    property.style.paddingTop = "10%";
                }
            });
        });
    }
}
