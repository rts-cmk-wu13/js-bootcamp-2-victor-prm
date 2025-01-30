let shoppingCart = [];
let total = 0;
function updateShoppingCart() {
    total = 0;
    products.forEach(product => {
        if (product.count > 0) {
            if(shoppingCart.includes(product) === false){
                shoppingCart.push(product);
            }
        } else {
            shoppingCart.pop(product);
        }
        total += product.count*product.price;
    });
    
    if(total > 0){
        total = formatPrice(total);
    }
    document.querySelector('.header__total-price').innerHTML = total
}