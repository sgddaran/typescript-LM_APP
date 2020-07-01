const ValidationMessage = {
    REQUIRED: `<<field>> is required`,
    MIN_LENGTH: `<<field>> should have min <<min>> chars`,
    MAX_LENGTH: `<<field>> should have min <<max>> chars`,
    TYPE: `<<field>> should have be <<type>>`,
    IN_VALUES: `<<field>> should be any one from <<values>>`,
};
const typeExp = new Map();
typeExp.set("number", "^[0-9]{1,}$");
typeExp.set("string", "^[a-zA-Z0-9]{2,}$");
const dragDropMap = new Map();
const validatorMap = new Map();
export function Validatable(validatable) {
    return function (target, field) {
        const key = target.constructor.name;
        const map = validatorMap.has(key) ? validatorMap.get(key) : new Map();
        if (!map.has(field)) {
            map.set(field, validatable);
        }
        validatorMap.set(key, map);
    };
}
export function enableDragAndDrop(target, field) {
    const key = target.constructor.name;
    const sets = dragDropMap.has(key) ? dragDropMap.get(key) : new Set();
    sets === null || sets === void 0 ? void 0 : sets.add(field);
    dragDropMap.set(key, sets);
}
export function validate(target) {
    const key = target.constructor.name;
    const validations = new Set();
    if (validatorMap.has(key)) {
        const map = validatorMap.get(key);
        for (let [key, value] of map.entries()) {
            const propertyValue = target[key];
            if (value.required && (!propertyValue || propertyValue === "")) {
                const result = {
                    field: key,
                    message: ValidationMessage.REQUIRED.replace("<<field>>", key)
                };
                validations.add(result);
            }
            else if (!propertyValue.match(typeExp.get(value.type))) {
                const result = {
                    field: key,
                    message: ValidationMessage.TYPE.replace("<<field>>", key).replace("<<type>>", value.type)
                };
                validations.add(result);
            }
            else if (value.in && !value.in.includes(propertyValue)) {
                const result = {
                    field: key,
                    message: ValidationMessage.IN_VALUES.replace("<<field>>", key).replace("<<values>>", value.type)
                };
                validations.add(result);
            }
            else if (value.minLength && value.minLength < propertyValue.length) {
                const result = {
                    field: key,
                    message: ValidationMessage.MIN_LENGTH.replace("<<field>>", key).replace("<<min>>", value.minLength + "")
                };
                validations.add(result);
            }
            else if (value.maxLength && value.maxLength > propertyValue.length) {
                const result = {
                    field: key,
                    message: ValidationMessage.MAX_LENGTH.replace("<<field>>", key).replace("<<max>>", value.maxLength + "")
                };
                validations.add(result);
            }
        }
    }
    return validations;
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
