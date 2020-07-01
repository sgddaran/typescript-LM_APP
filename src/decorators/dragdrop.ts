/* Drag and Drop */
const dragDropMap: Map<any, Set<string>> = new Map()

export function enableDragAndDrop(target: Object, field: string) {
    const key = target.constructor.name
    const sets: Set<string> = dragDropMap.has(key) ? dragDropMap.get(key)! : new Set()
    sets?.add(field)
    dragDropMap.set(key, sets);
}

export function processDecorators(target: any) {
    const key = target.constructor.name
    if (dragDropMap.has(key)) {
        const elements: Set<string> = dragDropMap.get(key)!
        elements.forEach((item: string) => {
            const property = target[item]
            property.addEventListener("drop", (event: DragEvent) => {
                const elementId: string = event.dataTransfer?.getData("data")!
                const targetElement: HTMLElement = (event.target as HTMLElement)
                targetElement.appendChild(document.getElementById(elementId)!);
                if (targetElement.style.paddingTop) targetElement.style.paddingTop = ""
                console.log("drop:" + event.target)
            })

            property.addEventListener("dragover", (event: DragEvent) => {
                event.preventDefault();
                console.log("dragover:" + event.target)
            })

            property.addEventListener("dragleave", (event: DragEvent) => {
                event.preventDefault();
                if (property.childElementCount === 1) {
                    property.style.paddingTop = "10%"
                }
            })
        })
    }
}
