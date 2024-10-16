// Sample data for products
const products = [
    {
        name: 'Laptop',
        description: 'A high-performance laptop for professionals.',
        price: '$999',
    },
    {
        name: 'Smartphone',
        description: 'The latest model smartphone with cutting-edge features.',
        price: '$699',
    },
    {
        name: 'Headphones',
        description: 'Noise-cancelling headphones for immersive sound.',
        price: '$199',
    },
    {
        name: 'Smartwatch',
        description: 'A smart wearable device with health tracking.',
        price: '$249',
    }
];

// Selecting the container element
const productContainer = document.getElementById('product-container');

// Function to create and add a product to the DOM
function renderProduct(product) {
    // Create the product div
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Create and append the product name
    const productName = document.createElement('h2');
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    // Create and append the product description
    const productDesc = document.createElement('p');
    productDesc.textContent = product.description;
    productDesc.className = 'product-description';
    productDiv.appendChild(productDesc);

    // Create and append the product price
    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: ${product.price}`;
    productPrice.className = 'product-price';
    productDiv.appendChild(productPrice);

    // Append the product div to the container
    productContainer.appendChild(productDiv);
}

// Adding all products to the page
function renderAllProducts() {
    // First, clear all previous products.
    clearContainer(productContainer)
    products.forEach(product => {
        renderProduct(product);
    });
}

// Kills all children in a container.
function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

// Add event listener to the add product button.
const addNewProductBtn = document.getElementById("add-product")
addNewProductBtn.addEventListener("click", () => {
    // Add the new product. This can be improved to incorporate a form for example.
    products.push({
        name: 'Air Purifier',
        description: 'A smart device which keeps the air in your home fresh.',
        price: '$2499',
    })
    renderAllProducts()
})

// Initial render
renderAllProducts()