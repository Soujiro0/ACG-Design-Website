fetchData();

// Fetching data from JSON file
async function loadAllItems(){
    // Fetching data from JSON file
    let response = await fetch('../data.json');
    let data = await response.json();
    console.log(data);
    return data;
}

async function fetchData() {
    let jsonData = await loadAllItems();
    console.log(jsonData);
    const productListDiv = document.querySelector('.productList');

    jsonData.forEach(jsonData => {
        const productHTML = createProductHTML(jsonData);
        productListDiv.appendChild(productHTML);
    });
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
        clicked(h1, h2, h3);
    })

    return productDiv;
}

// document.querySelectorAll('.producList > .product').forEach(product => {
//     product.onclick = function () {
//         // Update product details with clicked product's information
//         const productName = product.querySelector('h1').textContent;
//         const productPrice = product.querySelector('h2').textContent;
//         const productDescription = product.querySelector('p').textContent;

//         navigateToPage('item-details.html')
//         productDetails.querySelector('.productDetails > h1').textContent = productName;
//         productDetails.querySelector('.productDetails > h2').textContent = productPrice;
//         productDetails.querySelector('.productDetails > p').textContent = productDescription;
//     }
// });

function clicked(h1, h2, h3){
    console.log(h1.textContent);
    console.log('item clicked');

    navigateToPage('item-details.html', h1, h2);
    setTimeout(() => {
        console.log('clicked method is finished');
    }, 3000);
    // const productCategory = product.querySelector('h3').textContent;
}

// function navigateToPage(url, h1, h2) {
//     setTimeout(() => {
//         const productName = document.querySelector('.productDetails > h1');
//         const productPrice = document.querySelector('productDetails > h2');
//         if (productName && productPrice) {
//             productName.textContent = h1.textContent;
//             productPrice.textContent = h2.textContent;
//         } else {
//             console.error("Product name or product price element not found in the DOM.");
//         }
//     }, 2000);
//     window.location.href = url;
// }

// function seeDetail(item){
//     const image = document.querySelector('.product > .productImage > img');
//     image.src = item.image;
// }
// seeDetail();

