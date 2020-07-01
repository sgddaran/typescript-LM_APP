var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { clzDecorator, clzDecoratorFact, clzDecoratorConstructor, method, Param, Property } from "./Decorators";
let Cart = class Cart {
    constructor() {
        this.cartId = 0;
        this.cartName = "";
        this.itemIds = [];
        this.quantity = 2;
    }
    get CartId() {
        return this.cartId;
    }
    payout(amount) {
        console.log("paying out...");
    }
};
__decorate([
    Property()
], Cart.prototype, "cartId", void 0);
__decorate([
    method()
], Cart.prototype, "CartId", null);
__decorate([
    __param(0, Param())
], Cart.prototype, "payout", null);
Cart = __decorate([
    clzDecorator,
    clzDecoratorFact(),
    clzDecoratorConstructor
], Cart);
const cart = new Cart();
console.log(cart);
console.log(cart.CartId);
