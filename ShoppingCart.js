
class ShoppingCart {
    constructor(name){
        this.name = name;
        this.item = [];
    }
    getItems(){
        return this.item
    }
    addItem(itemName, quantity, price){
        return this.item.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
          })
    }
    clear(){
        return this.item = []
    }
    total() {
        return this.item.reduce((acc, priceItem) => {
            return acc + (priceItem.pricePerUnit * priceItem.quantity)
        },0)
    }
}



const cart = new ShoppingCart("Healthy_Cart")


cart.addItem("milk", 2, 2.50)
cart.addItem("cookies", 3, 3.00)
cart.addItem("coffee", 1, 4.00)
cart.addItem("chocolat", 2, 5.00)


console.log(cart.total())

module.exports = ShoppingCart