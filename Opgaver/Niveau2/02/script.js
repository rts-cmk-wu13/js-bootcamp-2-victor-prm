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
                                <p class="price">Price: <span class="price-value">${item.price}</span>DKK</p>
                                <p class="designer">Designer: <span class="designer">${item.designer}</span></p>
                            </div>
                            <div class="product-card-right">
                                <button class="product-card-decrease-button">-</button>
                                <button class="product-card-increase-button">+</button>
                            </div>
                        </div>
                    </div>
            </article>`
}