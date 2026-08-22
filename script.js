// Informing Visitor to visit the Website later

/* document.addEventListener("DOMContentLoaded", function() {
    const message = "We are currently updating our website. Please visit us later for the best experience.";
    alert(message);
});
 */

/**
 * ! General JavaScriptCode for the Website Starts here
 **/




const hamburger = document.querySelector(".hamburger"); // Navigation bar
const navLinks = document.querySelector(".nav-links"); // Navigation bar
const phoneCasesEl = document.getElementById("phone-cases"); // Accessories Page
const variousAccessoriesEl = document.getElementById("various-accessories"); // Accessories Page
const shoppingBagEl = document.getElementById("shopping-bag");


/**
 * ! General JavaScriptCode for the Website Ends here
 **/
//making sure the nav links are toggled only when the hamburger is clicked and not when clicking outside of it
if (hamburger && navLinks) {
    hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        navLinks.classList.toggle("active");
    });

    window.addEventListener("click", (event) => {
        const clickedInsideMenu = navLinks.contains(event.target) || hamburger.contains(event.target);

        if (window.innerWidth <= 768 && navLinks.classList.contains("active") && !clickedInsideMenu) {
            navLinks.classList.remove("active");
        }
    });
}

// Horizontal product carousel

document.addEventListener("DOMContentLoaded", () => {
    const scrollLists = document.querySelectorAll(".horizontal-list");

    scrollLists.forEach((list) => {
        list.scrollLeft = list.scrollWidth - list.clientWidth;

        const moveCarousel = () => {
            const maxScroll = list.scrollWidth - list.clientWidth;
            if (list.scrollLeft <= 0) {
                list.scrollTo({ left: maxScroll, behavior: "smooth" });
            } else {
                list.scrollBy({ left: -320, behavior: "smooth" });
            }
        };

        window.setInterval(moveCarousel, 4000);
    });

    document.querySelectorAll(".scroll-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const targetId = button.dataset.scrollTarget;
            const targetList = document.getElementById(targetId);
            const container = targetList?.closest(".horizontal-list");

            if (!container) return;

            const direction = button.classList.contains("scroll-right") ? 320 : -320;
            container.scrollBy({ left: direction, behavior: "smooth" });
        });
    });
});

/**
 * ! Displays phone cases and various accessories on the page
 */
function displayPhoneCases() {
    if(!phoneCasesEl) return; // Check if the element exists before proceeding
    phoneCases.forEach((phoneCase)=> {
        phoneCasesEl.innerHTML += `
        <li class="product-item" onclick="openModal('${phoneCase.name}', '${phoneCase.descr}', '${phoneCase.imgSrc}', ${phoneCase.price}, 'https://wa.me/25767186158?text=Hello%20give%20me%20more%20information%20about%20this%20product:%20https://burundionlinemarket.com/accessories.html%23${phoneCase.name}')">
            <img src="${phoneCase.imgSrc}" alt="${phoneCase.name}" width="1000" height="1000">
            <h3>${phoneCase.name}</h3>
            <div>Price: <small>BIF </small>${phoneCase.price}</div>
            <div>Availability: ${phoneCase.inStock > 0 ? "In Stock" : "Out of Stock"}</div>
            <div>${phoneCase.descr}</div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${phoneCase.id});">
              Add to Cart
            </button>
            <a href="https://wa.me/25767186158?text=Hello%20give%20me%20more%20information%20about%20this%20product:%20https://burundionlinemarket.com/accessories.html%23${phoneCase.name}" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </li> 
        `
    })
}

displayPhoneCases() 

function displayVariousAccessories() {
    if(!variousAccessoriesEl) return; // Check if the element exists before proceeding
    variousAccessories.forEach((accessory)=> {
        variousAccessoriesEl.innerHTML += `
        <li class="product-item" onclick="openModal('${accessory.name}', '${accessory.descr}', '${accessory.imgSrc}', ${accessory.price}, 'https://wa.me/25767186158?text=Hello%20give%20me%20more%20information%20about%20this%20product:%20https://burundionlinemarket.com/accessories.html%23${accessory.name}')">
            <img src="${accessory.imgSrc}" alt="${accessory.name}" width="1000" height="1000">
            <h3>${accessory.name}</h3>
            <div>Price: <small>BIF </small>${accessory.price}</div>
            <div>Availability: ${accessory.inStock > 0 ? "In Stock" : "Out of Stock"}</div>
            <div>${accessory.descr}</div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${accessory.id});">
              Add to Cart
            </button>
            <a href="https://wa.me/25767186158?text=Hello%20give%20me%20more%20information%20about%20this%20product:%20https://burundionlinemarket.com/accessories.html%23${accessory.name}" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </li> 
        `
    })

}

 
displayVariousAccessories()

/**
 * ! CART FUNCTIONALITY
 */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

displayCart();
displayTotalItemsInCart();

// check this out: https://stackoverflow.com/questions/70336348/how-to-add-an-item-to-cart-and-store-it-in-local-storage-using-javascript
const checkoutButton = document.getElementById("checkout-btn");
if (checkoutButton) {
    checkoutButton.addEventListener("click", sendOrderViaWhatsApp);
}

function findProductId(id) {
    return [...phoneCases, ...variousAccessories].find(product => product.id === id); // ADD ALL ARRAY CONTAINING PRODUCTS HERE, meaning all the products you want to sell on your website, you can add more products by following the same structure as the existing ones. Each product should have a unique id, name, customer, description, price, inStock quantity, and an image source.
    
}

function addToCart(productId) {
    const product = findProductId(productId);

    if (!product) return;

    if (product.inStock <= 0) {
        alert("Sorry, this product is out of stock.");
        return;
    }

    if(cart.some(item => item.id === productId)) {
        alert("This product is already in the cart. Select other items you would like to buy.");
        return;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            imgSrc: product.imgSrc,
            inStock: product.inStock,
            quantity: 1
        });
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    displayCart();
    displayTotalItemsInCart();
}

function displayCart() {
    const cartListEl = document.getElementById("cart-list");
    if (!cartListEl) return;

    cartListEl.innerHTML = "";

    const totalEl = document.getElementById("total");
    let total = 0;


    for (const item of cart) {
        const itemSubtotal = item.price * item.quantity;
        const li = document.createElement("li");
        li.className = "cart-item"; // Add a class for styling li.classList.add("cart-item"); Search whether the two methods are the same or not
        li.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}" width="100" height="100">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Price: BIF ${item.price.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button onclick="decrementQuantity('${item.id}')">−</button>
                    <span class="quantity">${item.quantity}</span>
                    <button onclick="incrementQuantity('${item.id}')">+</button>
                </div>
            </div>
            <div class="item-total">
                <p>Subtotal: BIF <span class="item-subtotal">${itemSubtotal.toFixed(2)}</span></p>
                <button onclick="removeFromCart('${item.id}')" class="remove-btn">Remove</button>
            </div>
        `;
        cartListEl.appendChild(li);
        total += itemSubtotal;
    }
    if (totalEl) totalEl.textContent = total.toFixed(2);
    displayTotalItemsInCart();
}


function incrementQuantity(productId) {
    const item = cart.find(item => String(item.id) === String(productId));
    if (item) {

        const product = findProductId(item.id);
        if (product && item.quantity >= product.inStock) {
            return;
        } else {
            item.quantity ++;
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        displayCart();
    }
}

function decrementQuantity(productId) {
    const item = cart.find(item => String(item.id) === String(productId));
    if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem("cart", JSON.stringify(cart));

        displayCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => String(item.id) !== String(productId));
    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

/**
 * ! Total items in cart functionality
 */
function displayTotalItemsInCart() {
    const shoppingBagEl = document.getElementById("shopping-bag");
    const totalItemsEls = getTotalItemsEls();

    if (!totalItemsEls.length && shoppingBagEl) {
        const link = document.createElement("a");
        link.href = "cart.html";
        link.innerHTML = `
            <img src="images/Shopping-Cart/shopping-cart.png" alt="cart">
            <div id="total-items-in-cart" class="total-items-in-cart">0</div>
        `;
        shoppingBagEl.appendChild(link);
    }

    updateCartIcon();
}


function updateCartIcon() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalItemsEls = getTotalItemsEls();

    totalItemsEls.forEach((totalItemsEl) => {
        totalItemsEl.textContent = totalItems;
    });
}

function getTotalItemsEls() {
    return document.querySelectorAll("#total-items-in-cart, .total-items-in-cart");
}

// Check this out: https://stackoverflow.com/questions/70336348/how-to-add-an-item-to-cart-and-store-it-in-local-storage-using-javascript

function sendOrderViaWhatsApp() {
    if (!cart.length) {
        alert("Your cart is empty.");
        return;
    }

    const orderLines = cart.map((item) => {
        const subtotal = item.price * item.quantity;
        return `- ${item.name} x${item.quantity}: BIF ${subtotal.toFixed(2)}`;
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const message = [
        "Hello, I would like to place this order:",
        "",
        ...orderLines,
        "",
        `Total: BIF ${total.toFixed(2)}`,
        "Please confirm availability and delivery details."
    ].join("\\n");
    const whatsappNumber = "25767186158";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
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
window.addEventListener("click", (event) =>{
    const modal = document.getElementById("product-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
    //  no need of the below code
    /* const nav = document.querySelector(".navbar");
    if (event.target === nav) {
        nav.style.display = "none";
    } */
});

function loadPage(page) {
    fetch(page)
    .then(response => response.text())
    .then(data => {
        document.getElementById("content").innerHTML = data;
    })
}




// next step: 1. Find out how to order items via WhatsApp and integrate it into the website, allowing users to place orders directly through WhatsApp. 2. Implement a feature that allows users to add products to their cart from different sections of the website, such as the laptop and smartphone pages, and have those items reflected in the cart.
//3. Extent the principle to other pages of the website, such as the laptop and Smartphone pages, to allow users to add products to the cart from different sections of the site.

