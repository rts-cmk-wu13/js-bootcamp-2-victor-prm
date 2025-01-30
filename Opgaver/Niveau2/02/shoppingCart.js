//Variables to keep track of items in shopping cart and total price
let shoppingCart = [];
let total = 0;

function updateShoppingCart(itm) {
    //Only add proudct to cart if count is over 0 and product is not already in cart
    if (itm.count > 0) {
        if (shoppingCart.includes(itm) === false) {
            addRemoveFromCart(itm, 'add')
        }
    //Remove product if count is 0
    } else {
        addRemoveFromCart(itm, 'remove')
    }

    //Calculate total based on recent changes to the shopping cart array
    calculateTotal();
}

//Loop through shopping cart array and tally multiply each item's count with its price
function calculateTotal() {
    //Reset total before new calculation
    total = 0;
    shoppingCart.forEach(product => {
        total += product.count * product.price;
    });

    //Display updated cart info in the DOM/header
    document.querySelector('.header__total-items').innerHTML = shoppingCart.length;
    document.querySelector('.header__total-price').innerHTML = formatPrice(total);
}

//Push or pop item from shopping cart array
function addRemoveFromCart(itm, val) {
    if (val == "add") {
        shoppingCart.push(itm);
    } else if (val == 'remove') {
        shoppingCart.pop(itm);
    }
}

//Decrease count and update product object and its count in the DOM
function decreaseItemCount(itmID) {
    let currentItem = products.find(item => item.id === itmID);
    currentItem.count--;
    //Ensure count doesn't go below 0
    currentItem.count = clampZero(currentItem.count);
    //Display current count in DOM
    document.querySelector(`#count-${itmID}`).innerHTML = currentItem.count;
    updateShoppingCart(currentItem);
}

//Increase count and update product object and its count in the DOM
function increaseItemCount(itmID) {
    let currentItem = products.find(item => item.id === itmID);
    currentItem.count++;
    //Display current count in DOM
    document.querySelector(`#count-${itmID}`).innerHTML = currentItem.count;
    updateShoppingCart(currentItem);
}

//Make sure count can't go lower than 0
function clampZero(num) {
    return num < 0 ? 0 : num;
}