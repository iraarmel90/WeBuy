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
        list.scrollLeft = list.scrollWidth;

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

// Cart functionality

let cart = [];
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

    const nav = document.querySelector(".navbar");
    if (e.target === nav) {
        nav.style.display = "none";
    }
}

function loadPage(page) {
    fetch(page)
    .then(response => response.text())
    .then(data => {
        document.getElementById("content").innerHTML = data;
    })
}

// Javascript Code for Accessories Page

function displayPhoneCases() {
    phoneCases.forEach((phoneCase)=> {
        phoneCasesEl.innerHTML += `
        <li class="product-item" onclick="openModal('${phoneCase.name}', '${phoneCase.descr}', '${phoneCase.imgSrc}', ${phoneCase.price}, 'https://wa.me/25767186158?text=Hello%20give%20me%20more%20information%20about%20this%20product:%20https://burundionlinemarket.com/accessories.html%23${phoneCase.name}')">
            <img src="${phoneCase.imgSrc}" alt="${phoneCase.name}" width="3024" height="3024">
            <h3>${phoneCase.name}</h3>
            <div>Price: <small>BIF </small>${phoneCase.price}</div>
            <div>Availability: ${phoneCase.inStock > 0 ? "In Stock" : "Out of Stock"}</div>
            <div>${phoneCase.descr}</div>
            <a href="https://wa.me/25767186158?text=Hello%20give%20me%20more%20information%20about%20this%20product:%20https://burundionlinemarket.com/accessories.html%23${phoneCase.name}" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </li> 
        `
    })
}

function displayVariousAccessories() {
    variousAccessories.forEach((accessory)=> {
        variousAccessoriesEl.innerHTML += `
        <li class="product-item" onclick="openModal('${accessory.name}', '${accessory.descr}', '${accessory.imgSrc}', ${accessory.price}, 'https://wa.me/25767186158?text=Hello%20give%20me%20more%20information%20about%20this%20product:%20https://burundionlinemarket.com/accessories.html%23${accessory.name}')">
            <img src="${accessory.imgSrc}" alt="${accessory.name}" width="3024" height="3024">
            <h3>${accessory.name}</h3>
            <div>Price: <small>BIF </small>${accessory.price}</div>
            <div>Availability: ${accessory.inStock > 0 ? "In Stock" : "Out of Stock"}</div>
            <div>${accessory.descr}</div>
            <a href="https://wa.me/25767186158?text=Hello%20give%20me%20more%20information%20about%20this%20product:%20https://burundionlinemarket.com/accessories.html%23${accessory.name}" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </li> 
        `
    })

}

/* displayPhoneCases() */
displayVariousAccessories()

// next step: 1. Put the increment(+) and decrement (-) buttons to add quantity.
// 2. Add a "Add to Cart" button to add the product to the cart and update the total price.

