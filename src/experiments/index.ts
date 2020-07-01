import { clzDecorator, clzDecoratorFact, clzDecoratorConstructor, method, Param, Property } from "./Decorators"

@clzDecorator
@clzDecoratorFact()
@clzDecoratorConstructor
class Cart {

    @Property()
    cartId: number = 0;
    cartName: string = "";
    itemIds: number[] = []
    quantity: number = 2

    @method()
    get CartId() {
        return this.cartId
    }

    payout(@Param() amount: number) {
        console.log("paying out...")
    }
}
const cart = new Cart()
console.log(cart)
console.log(cart.CartId)