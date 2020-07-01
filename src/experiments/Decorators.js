// Class level decorator
export function clzDecorator(constructor) {
    console.log("decorator");
}
// Class level decorator factory
export function clzDecoratorFact() {
    console.log("decorator:factory");
    return function (constructor) {
        console.log(`factory:${constructor}`);
    };
}
// Class level decorator factory to overwrtie constructor
export function clzDecoratorConstructor(constructor) {
    console.log("decorator:constructor");
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.cartId = 5;
        }
    };
}
// Method Decorator
export function method() {
    return function (target, key, desc) {
        console.log(`method:${key}`);
        return desc;
    };
}
// Param Decorator
export function Param() {
    return function (target, key, index) {
        console.log(`param:${key} on index ${index}`);
    };
}
// Param Decorator
export function Property() {
    return function (target, key) {
        console.log(`Property:${key} `);
    };
}
