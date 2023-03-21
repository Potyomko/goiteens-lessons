const cart = {
    items: [],
    getItems() {},
    add(product) {
        for (const item of this.items) {
            if (product.name === item.name) {
                return item.quantity += 1;
            } 
        }
        const newProduct = {
            ...product,
            quantity : 1
        }
        this.items.push(newProduct)
    },
    remove(productName) {
        const {items} = this
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (productName === item.name) {
                items.splice(i, 1)
            }
        }
    },
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };
cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70});
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.log(cart.items);
cart.remove('🍎');
console.log(cart.items);
//перевірка лимону квонтіті зменшуємо якщо ні , то повністю видаляємо