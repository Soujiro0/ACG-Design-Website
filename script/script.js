
fetchDataAndRender();

// Fetching data from JSON file
async function fetchDataAndRender() {

    try {
        const response = await fetch('../data.json');
        const data = await response.json();
        console.log(data);

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
        clicked(h1.textContent);
    });
    return productDiv;

}

// Open the item details window
async function clicked(itemName){
    console.log('item clicked');
    console.log(itemName);
    
    // Parse JSON data into JavaScript object
    try {
        const response = await fetch('../data.json');
        const data = await response.json();
        console.log(data);
    
        data.forEach(item => {
            if (item.name === itemName) {
                item.isSelected = true;
            }
        });
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}


