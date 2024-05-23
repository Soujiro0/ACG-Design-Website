/**
 *  script.js
 * 
 *  Author: Jerry Castrudes
 */

// Entry Point
document.addEventListener('DOMContentLoaded', fetchData);

// Fetching data from JSON file
async function fetchData() {

    try {
        const response = await fetch('../data/data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}

// Create Component
function createProductHTML(item) {

    // Create elements
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.id = 'item' + item.id.toString();

    const img = document.createElement('img');
    img.setAttribute('src', item.thumbnail);
    img.setAttribute('alt', '');

    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('productInfo');

    const h1 = document.createElement('h1');
    h1.textContent = item.name;

    const h2 = document.createElement('h2');
    h2.textContent = '$' + item.price.toFixed(2);

    // const h3 = document.createElement('h3');
    // h3.textContent = item.category;

    // Append elements
    productInfoDiv.appendChild(h1);
    productInfoDiv.appendChild(h2);
    // productInfoDiv.appendChild(h3);

    productDiv.appendChild(img);
    productDiv.appendChild(productInfoDiv);

    productDiv.addEventListener('click', () => {
        itemSelect(item);
    });
    return productDiv;

}

function createAddedToCartProductHTML(item) {

    // Create the main container div
    let cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    // Create the checkbox input
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'item-checkbox';
    checkbox.value = item.name;
    cartItem.appendChild(checkbox);

    // Create the image element
    let img = document.createElement('img');
    img.src = item.image;
    img.alt = '';
    cartItem.appendChild(img);

    // Create the first heading
    let h1 = document.createElement('h1');
    h1.textContent = item.name;
    cartItem.appendChild(h1);

    // Create the second heading
    let h2 = document.createElement('h2');
    h2.textContent = item.color;
    cartItem.appendChild(h2);

    // Create the paragraph
    let p = document.createElement('p');
    p.textContent = item.instruction;
    cartItem.appendChild(p);

    // Create the third heading
    let h3 = document.createElement('h3');
    h3.textContent = `$ ${item.price}`;
    cartItem.appendChild(h3);

    // Create the SVG element
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 20 20');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('clip-rule', 'evenodd');
    path.setAttribute('d', 'M3.11701 5.752C3.31537 5.73883 3.51085 5.80495 3.66048 5.93583C3.81012 6.06672 3.90167 6.25165 3.91501 6.45L4.37501 13.35C4.46501 14.697 4.52901 15.635 4.66901 16.34C4.80601 17.025 4.99601 17.387 5.26901 17.643C5.54301 17.899 5.91701 18.065 6.60901 18.155C7.32301 18.248 8.26301 18.25 9.61301 18.25H10.387C11.737 18.25 12.677 18.248 13.391 18.155C14.083 18.065 14.457 17.899 14.731 17.643C15.004 17.387 15.194 17.025 15.331 16.341C15.471 15.635 15.535 14.697 15.625 13.349L16.085 6.45C16.0916 6.35171 16.1174 6.25567 16.1611 6.16737C16.2048 6.07907 16.2655 6.00024 16.3396 5.93538C16.4137 5.87051 16.4999 5.82089 16.5933 5.78934C16.6866 5.75779 16.7852 5.74494 16.8835 5.7515C16.9818 5.75807 17.0778 5.78393 17.1661 5.82761C17.2544 5.87129 17.3333 5.93194 17.3981 6.00609C17.463 6.08024 17.5126 6.16643 17.5442 6.25976C17.5757 6.35308 17.5886 6.45171 17.582 6.55L17.118 13.502C17.033 14.784 16.964 15.821 16.802 16.634C16.633 17.479 16.347 18.185 15.755 18.738C15.164 19.292 14.44 19.531 13.585 19.642C12.763 19.75 11.725 19.75 10.44 19.75H9.56001C8.27501 19.75 7.23701 19.75 6.41501 19.642C5.56001 19.531 4.83601 19.292 4.24501 18.738C3.65301 18.185 3.36701 17.478 3.19801 16.634C3.03601 15.82 2.96801 14.784 2.88201 13.502L2.41801 6.55C2.41149 6.4517 2.4244 6.35308 2.45601 6.25978C2.48761 6.16647 2.53729 6.0803 2.6022 6.0062C2.66711 5.93209 2.74598 5.8715 2.83432 5.82789C2.92265 5.78427 3.01871 5.75848 3.11701 5.752ZM8.35501 0.250001H8.30901C8.09301 0.250001 7.90401 0.250001 7.72601 0.278001C7.3793 0.333544 7.0504 0.469462 6.76562 0.674882C6.48085 0.880302 6.24811 1.14952 6.08601 1.461C6.00201 1.621 5.94301 1.8 5.87501 2.005L5.86001 2.049L5.76301 2.339C5.68643 2.61116 5.51985 2.84932 5.29046 3.0146C5.06107 3.17988 4.78242 3.26251 4.50001 3.249H1.50001C1.30097 3.249 1.11007 3.32807 0.969328 3.46882C0.828582 3.60956 0.749512 3.80046 0.749512 3.9995C0.749512 4.19855 0.828582 4.38944 0.969328 4.53018C1.11007 4.67093 1.30097 4.75 1.50001 4.75H18.501C18.6999 4.75 18.8907 4.67098 19.0313 4.53033C19.172 4.38968 19.251 4.19891 19.251 4C19.251 3.80109 19.172 3.61032 19.0313 3.46967C18.8907 3.32902 18.6999 3.25 18.501 3.25H15.41C15.1429 3.24359 14.8849 3.15177 14.6738 2.988C14.4627 2.82423 14.3096 2.59713 14.237 2.34L14.14 2.049L14.126 2.005C14.057 1.8 13.998 1.621 13.915 1.461C13.7528 1.1494 13.5199 0.880103 13.235 0.674676C12.95 0.469249 12.6209 0.333398 12.274 0.278001C12.0807 0.253466 11.8858 0.244104 11.691 0.250001H11.645H8.35501ZM7.14501 2.935C7.10501 3.044 7.06001 3.149 7.00801 3.25H12.992C12.9402 3.14824 12.8948 3.04338 12.856 2.936L12.816 2.822L12.717 2.522C12.6804 2.39667 12.636 2.27376 12.584 2.154C12.53 2.05001 12.4524 1.96011 12.3574 1.89152C12.2624 1.82292 12.1527 1.77754 12.037 1.759C11.9067 1.74777 11.7757 1.74476 11.645 1.75H8.35501C8.06701 1.75 8.00701 1.752 7.96301 1.76C7.84741 1.77843 7.73773 1.82366 7.64275 1.89208C7.54777 1.9605 7.47012 2.0502 7.41601 2.154C7.39601 2.194 7.37401 2.249 7.28301 2.523L7.18301 2.823L7.14501 2.935Z');
    path.setAttribute('fill', '#D90000');
    svg.appendChild(path);

    cartItem.appendChild(svg);

    // Append the cart item to the body or a specific container
    return cartItem;
}

// Open the item details window
function itemSelect(item) {

    // Clear session storage
    sessionStorage.removeItem('selectedProduct');
    // Store selected item in session storage
    sessionStorage.setItem('selectedProduct', JSON.stringify(item));    
    // Redirect to the item details page
    window.location.href = '../pages/item-details.html';

}

// Filter Items by Category
async function filterItems() {
    const categoryFilter = document.getElementById('category');
    console.log(categoryFilter.value);
    let filterItems;
    if (categoryFilter.value === 'all') {
        filterItems = await fetchData();
        console.log(`filtered items All:`);
        console.log(filterItems);
    } else {
        const filter = await fetchData();
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

function selectedCategoryNavigation(element) {
    const categoryText = element.textContent;
    console.log(categoryText);
    sessionStorage.setItem('filter', categoryText.toLowerCase());
    navigateToShop();
}

// Navigate Shop Page
function navigateToShop(){  
    window.location.href = 'shop.html';
}





































function extra() {
    localStorage.clear();
    sessionStorage.clear();
    const cartArray = [];
    localStorage.setItem('cartItems', JSON.stringify(cartArray));
}


