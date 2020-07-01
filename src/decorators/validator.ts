
export type ValidatableField = {
    required: boolean
    type: "string" | "number"
    minLength?: number
    maxLength?: number
    lower?: number
    upper?: number
    in?: [string | number]
}

const ValidationMessage = {
    REQUIRED: `<<field>> is required`,
    MIN_LENGTH: `<<field>> should have min <<min>> chars`,
    MAX_LENGTH: `<<field>> should have min <<max>> chars`,
    TYPE: `<<field>> should be <<type>>`,
    IN_VALUES: `<<field>> should be any one from <<values>>`,
    LOWER_VALUE: `<<field>> should be greater or equal to <<lower>>`,
    UPPER_VALUE: `<<field>> should be less or equal to <<upper>>`,
}

export type ValidateResult = {
    field: string
    message: string
}

const typeExp: Map<string, string> = new Map();
typeExp.set("number", "^[0-9]{1,}$")
typeExp.set("string", "^[a-zA-Z0-9]{2,}$")

const validatorMap: Map<any, Map<string, ValidatableField>> = new Map()

export function Validatable(validatable: ValidatableField) {
    return function (target: Object, field: string) {
        const key = target.constructor.name
        const map: Map<string, ValidatableField> = validatorMap.has(key) ? validatorMap.get(key)! : new Map()
        if (!map.has(field)) {
            map.set(field, validatable)
        } validatorMap.set(key, map)
    }
}

export function validate(target: any): Set<ValidateResult> {
    const key = target.constructor.name
    const validations: Set<ValidateResult> = new Set()
    if (validatorMap.has(key)) {
        const map = validatorMap.get(key)
        for (let [key, value] of map!.entries()) {
            const propertyValue: string = target[key]
            if (value.required && (!propertyValue || propertyValue === "")) {
                const result: ValidateResult = {
                    field: key,
                    message: ValidationMessage.REQUIRED.replace("<<field>>", key)
                }
                validations.add(result)
            } else if (!propertyValue.match(typeExp.get(value.type)!)) {
                const result: ValidateResult = {
                    field: key,
                    message: ValidationMessage.TYPE.replace("<<field>>", key).replace("<<type>>", value.type)
                }
                validations.add(result)
            } else if (value.in && !value.in.includes(propertyValue)) {
                const result: ValidateResult = {
                    field: key,
                    message: ValidationMessage.IN_VALUES.replace("<<field>>", key).replace("<<values>>", value.type)
                }
                validations.add(result)
            } else if (value.minLength && value.minLength < propertyValue.length) {
                const result: ValidateResult = {
                    field: key,
                    message: ValidationMessage.MIN_LENGTH.replace("<<field>>", key).replace("<<min>>", value.minLength + "")
                }
                validations.add(result)
            } else if (value.maxLength && value.maxLength > propertyValue.length) {
                const result: ValidateResult = {
                    field: key,
                    message: ValidationMessage.MAX_LENGTH.replace("<<field>>", key).replace("<<max>>", value.maxLength + "")
                }
                validations.add(result)
            } else if (value.lower && value.lower > parseInt(propertyValue)) {
                const result: ValidateResult = {
                    field: key,
                    message: ValidationMessage.LOWER_VALUE.replace("<<field>>", key).replace("<<lower>>", value.lower + "")
                }
                validations.add(result)
            } else if (value.upper && value.upper < parseInt(propertyValue)) {
                const result: ValidateResult = {
                    field: key,
                    message: ValidationMessage.UPPER_VALUE.replace("<<field>>", key).replace("<<upper>>", value.upper + "")
                }
                validations.add(result)
            }
        }
    }
    return validations
}

