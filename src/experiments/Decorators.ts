// Class level decorator
export function clzDecorator(constructor: Function) {
    console.log("decorator")
}

// Class level decorator factory
export function clzDecoratorFact() {
    console.log("decorator:factory")
    return function (constructor: Function) {
        console.log(`factory:${constructor}`)
    }
}

// Class level decorator factory to overwrtie constructor
export function clzDecoratorConstructor<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log("decorator:constructor")
    return class extends constructor { // inherit class on constructor and return
        cartId = 5
    }
}

// Method Decorator
export function method() {
    return function (target: any, key: any, desc: PropertyDescriptor) {
        console.log(`method:${key}`)
        return desc
    }
}

// Param Decorator
export function Param() {
    return function (target: Object, key: any, index: number) {
        console.log(`param:${key} on index ${index}`)
    }
}

// Param Decorator
export function Property() {
    return function (target: Object, key: any) {
        console.log(`Property:${key} `)
    }
}