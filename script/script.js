/**
 *  script.js
 * 
 *  Author: Jerry Castrudes
 */

// Entry Point
document.addEventListener('DOMContentLoaded', fetchDataAndRender);

// Fetching data from JSON file
async function fetchDataAndRender() {

    try {
        const response = await fetch('/data/data.json');
        const data = await response.json();

        const productListDiv = document.querySelector('.productList');
        
        data.forEach(item => {
            // Create component and append to container
            const productHTML = createProductHTML(item);
            productListDiv.appendChild(productHTML);
        });
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}

// Create Component
function createProductHTML(product) {

    // Create elements
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.id = 'item' + product.id.toString();

    const img = document.createElement('img');
    img.setAttribute('src', product.thumbnail);
    img.setAttribute('alt', '');

    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('productInfo');

    const h1 = document.createElement('h1');
    h1.textContent = product.name;

    const h2 = document.createElement('h2');
    h2.textContent = '$' + product.price.toFixed(2);

    const h3 = document.createElement('h3');
    h3.textContent = product.category;

    // Append elements
    productInfoDiv.appendChild(h1);
    productInfoDiv.appendChild(h2);
    productInfoDiv.appendChild(h3);

    productDiv.appendChild(img);
    productDiv.appendChild(productInfoDiv);

    productDiv.addEventListener('click', () => {
        itemSelect(product);
    });
    return productDiv;

}

// Open the item details window
function itemSelect(item) {

    // Store selected item in session storage
    sessionStorage.setItem('selectedProduct', JSON.stringify(item));    
    // Redirect to the item details page
    window.location.href = '/pages/item-details.html';

}

// Filter Items by Category
async function filterItems() {
    const categoryFilter = document.getElementById('category');
    console.log(categoryFilter.value);
    let filterItems;
    if (categoryFilter.value === 'all') {
        filterItems = await fetchDataAndRender();
        console.log(`filtered items All:`);
        console.log(filterItems);
    } else {
        const filter = await fetchDataAndRender();
        filterItems = filter.filter(item => item.category === categoryFilter.value);
        console.log(`filtered items`);
        console.log(filterItems);
    }

    // Remove all items in screen
    const productListDiv = document.querySelector('.productList');
    productListDiv.innerHTML = '';

    filterItems.forEach(item => {
        // Create component and append to container
        const productHTML = createProductHTML(item);
        productListDiv.appendChild(productHTML);
    });
}


