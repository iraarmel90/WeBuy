// Informing Visitor to visit the Website later

body.document.addEventListener("DOMContentLoaded", function() {
    const message = "We are currently updating our website. Please visit us later for the best experience.";
    alert(message);
});


// Cart functionality

const cart = [];
function addToCart(name, price) {
    const product = 
    { 
        name: name,
        price: price };
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    const totalElement = document.getElementById("total");
    let total = 0;
    for (const item of cart) {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    }
    totalElement.textContent = total.toFixed(2);
}

// Go deeper with ".createElement" and ".appendChild" to dynamically add products to the cart list and update the total price.
//

/* ---------------
Modal functionality is implemented to provide a better user experience when viewing product details. When a user clicks on a product, a modal window opens displaying the product's title and description. The modal can be closed by clicking the close button or by clicking outside the modal area. This allows users to easily access more information about products without navigating away from the current page.
-------------------*/

// Modal functionality

function openModal(title, description, imageSrc, price, whatsappLink) {
    const modal = document.getElementById("product-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const modalPrice = document.getElementById("modal-price");
    const modalWhatsappLink = document.getElementById("modal-whatsapp-link");

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageSrc;
    modalPrice.textContent = `Price: BIF ${price}`;
    modalWhatsappLink.href = whatsappLink;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("product-modal");
    modal.style.display = "none";
}

/* Close when clicking outside of the modal */
window.onclick = function(event) {
    const modal = document.getElementById("product-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
