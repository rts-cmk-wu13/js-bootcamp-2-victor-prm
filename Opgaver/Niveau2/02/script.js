populateProductContainer();

function populateProductContainer() {
    products.forEach(product => {
        addProductCard(product);
    });
}

function addProductCard(product) {
    document.querySelector('.selected-deals-container').innerHTML += createCard(product);

}

function createCard(item) {
    return ` <article class="product-card">
                    <img src="${item.imgSrc}" alt="black leather chair" class="product-card-image">
                    <div class="product-card-info">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="product-card-split">
                            <div class="product-card-left">
                                <p class="price">Price: <span class="price-value">${formatPrice(item.price)}</span>DKK</p>
                                <p class="designer">Designer: <span class="designer">${item.designer}</span></p>
                            </div>
                            <div class="product-card-right">
                                <button onclick="decreaseItemCount('${item.id}')" class="product-card-decrease-button">-</button>
                                <button onclick="increaseItemCount('${item.id}')" class="product-card-increase-button">+</button>
                            </div>
                        </div>
                    </div>
            </article>`
}

function decreaseItemCount(itm) {
    let currentItem = products.find(item => item.id === itm);
    currentItem.count--;
    currentItem.count = clampZero(currentItem.count);
    console.log(currentItem.count)
    updateShoppingCart();
}

function increaseItemCount(itm) {
    let currentItem = products.find(item => item.id === itm);
    currentItem.count++;
    console.log(currentItem.count)
    updateShoppingCart();
}

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
    document.querySelector('.total-price').innerHTML = total
}

function formatPrice(price){
    return p = new Intl.NumberFormat("da-dk").format(price)
}

function clampZero(num) {
    return num < 0 ? 0 : num;
}

