populateProductContainer();

function populateProductContainer() {
    products.forEach(product => {
        addProductCard(product);
    });
}

function addProductCard(product) {
    document.querySelector('.selected-deals__container').innerHTML += createCard(product);

}

function createCard(item) {
    return ` <article class="product-card ${checkForDiscounts(item)}">
                    <img class="product-card__image" src="${item.imgSrc}" alt="black leather chair">
                    <div class="product-card__info">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="product-card__split">
                            <div class="product-card__left">
                                <p class="product-card__price">Price: <span class="product-card__price-value">${formatPrice(item.price)}</span>DKK</p>
                                <p class="product-card__designer">Designer: <span class="product-card__designer-value">${item.designer}</span></p>
                            </div>
                            <div class="product-card__right">
                                <button class="product-card__amount-button" onclick="decreaseItemCount('${item.id}')">-</button>
                                <button class="product-card__amount-button" onclick="increaseItemCount('${item.id}')">+</button>
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

function checkForDiscounts(itm) {
    let discount = itm.discount;
    if (discount && discount.length > 0) {
        if (discount.includes("%")) {
            let discountPercentage = discount.substring(0, discount.indexOf("%"));
            discountPercentage = Number(discountPercentage);
            itm.price = itm.price * (100 - discountPercentage) / 100;
        } else {
            itm.price = itm.price - Number(discount);
        }
        return "product-card--discount";
    }
    return "";
}

function formatPrice(price) {
    return p = new Intl.NumberFormat("da-dk").format(price)
}

function clampZero(num) {
    return num < 0 ? 0 : num;
}

