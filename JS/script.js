document.getElementById('search').addEventListener('mouseover', function () {
    document.querySelector('.dropdown').style.display = 'block';
});

document.getElementById('search').addEventListener('mouseout', function () {
    document.querySelector('.dropdown').style.display = 'none';
});

let cartItems = [];
let totalPrice = 0;

function addToCart(item, price) {
    cartItems.push({ item, price });
    totalPrice += price;

    document.getElementById('cart-count').innerText = cartItems.length;
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach((cartItem, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${cartItem.item} - R${cartItem.price}`;
        cartItemsContainer.appendChild(itemDiv);
    });

    document.getElementById('cart-total').innerText = totalPrice;
}
