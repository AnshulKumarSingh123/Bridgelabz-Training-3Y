let products = [
    {
        id:1,
        category:"SPORTS SHOES",
        productName:"Running Shoes",
        review:120,
        oldPrice:2499,
        newPrice:1999,
        image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff&quot;
       
    },
    {
        id:2,
        category:"Watch",
        productName:"silver-and-white-round-analog-watch",
        review:110,
        oldPrice:5499,
        newPrice:4999,
        image:"https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D&quot;
       
    },
    {
        id:2,
        category:"Watch",
        productName:"silver-and-white-round-analog-watch",
        review:110,
        oldPrice:5499,
        newPrice:4999,
        image:"https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D&quot;
       
    },
]


let productCard  = document.querySelector(".product-cards");

products.forEach((product)=>{

    productCard.innerHTML +=
    ` <div class="card">

            <div class="sale-badge">20% OFF</div>

            <div class="heart">❤️</div>

            <div class="image-container">
                <img src=${product.image}
                    alt="Running Shoes">
            </div>

            <div class="product-info">

                <p class="category"> ${product.category }</p>

                <h2> ${product.productName} </h2>

                <div class="rating">
                    <span>(${product.review})</span>
                </div>
                <div class="price">
                    <span class="current-price"> ₹${product.newPrice} </span>
                    <span class="old-price">₹${product.oldPrice}</span>
                </div>

                <button class="cart-btn">Add to Cart</button>

            </div>

        </div>`

})