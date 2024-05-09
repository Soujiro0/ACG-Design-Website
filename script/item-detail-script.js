/**
 *  item-detail.js 
 * 
 *  Author: Jerry Castrudes
 */

// Entry Point
document.addEventListener('DOMContentLoaded', loadSelectedItem);

// Load the selected item form local
function loadSelectedItem() {

    const prodImage = document.querySelector('.productImage img');
    const prodName = document.querySelector('.productDetails > h1');
    const prodDescript = document.querySelector('.productDetails > p');
    const prodPrice = document.querySelector('.productDetails > h2');

    const selectedProduct = sessionStorage.getItem('selectedProduct');
    // Get data from session storage
    const { id, image, name, description, price } = JSON.parse(selectedProduct);

    if (!selectedProduct) {
        console.error('No selected product found.');
        return;
    }

    // Set data to the DOM
    prodImage.src = image;
    prodName.textContent = name;
    prodDescript.textContent = description;
    prodPrice.textContent = price;

    // Navigate back to the product list position
    const backButton = document.getElementById('back');
    backButton.addEventListener('click', () => {
        // Redirect to the product list page with the hash of the selected item ID
        window.location.href = '/shop.html#item' + id;
    });

    // Clear session storage
    sessionStorage.removeItem('selectedProduct');

}