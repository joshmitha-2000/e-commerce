function updateProduct1() {
    const color = document.getElementById("color1").value;
    const size = document.getElementById("size1").value;
  
    let image = "";
    let description = "";
    let price = "";
  
    if (color === "red" && size === "small") {
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFr_-TMJ_Olp9KO3cBrZlutw2m-dmgteCf8A&s";  // Ensure this file exists in your project
      description = "Red Small Cotton T-Shirt";
      price = "$45";
    } else if (color === "red" && size === "medium") {
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFr_-TMJ_Olp9KO3cBrZlutw2m-dmgteCf8A&s";  // Ensure this file exists in your project;  // Ensure this file exists in your project
      description = "Red Medium Cotton T-Shirt";
      price = "$50";
    } else if (color === "blue" && size === "small") {
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpNa9z_lpn_-JS7KMedZZHQ7JZNP-Kk7qpA&s";  // Ensure this file exists in your project
      description = "Blue Small Cotton T-Shirt";
      price = "$48";
    } else if (color === "blue" && size === "medium") {
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpNa9z_lpn_-JS7KMedZZHQ7JZNP-Kk7qpA&s";  // Ensure this file exists in your project
      description = "Blue Large medium T-Shirt";
      price = "$60";
    }
  
    document.getElementById("product-img1").src = image;
    document.getElementById("product-description1").textContent = description;
    document.getElementById("product-price1").textContent = price;
  }
  function updateProduct2() {
    const color = document.getElementById("color2").value;
    const size = document.getElementById("size2").value;
  
    let image = "";
    let description = "";
    let price = "";
  
    if (color === "black" && size === "small") {
      image = "https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/t/3/h/26-j-60-lee-tex-original-imagnycsz3m4uebf.jpeg?q=20&crop=false"
      description = "Black Small Jeans";
      price = "$55";
    } else if (color === "black" && size === "medium") {
      image = "https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/t/3/h/26-j-60-lee-tex-original-imagnycsz3m4uebf.jpeg?q=20&crop=false"
      description = "Black Medium Cotton jeans";
      price = "$60";
    } else if (color === "blue" && size === "small") {
      image = "https://d1it09c4puycyh.cloudfront.net/920x1300/catalog/product/8/9/89WG-10193-BLUE_2.jpg"
      description = "Blue Small Cotton jeans";
      price = "$58";
    } else if (color === "blue" && size === "medium") {
      image = "https://d1it09c4puycyh.cloudfront.net/920x1300/catalog/product/8/9/89WG-10193-BLUE_2.jpg"
      description = "Blue medium jeans";
      price = "$70";
    }

    document.getElementById("product-img2").src = image;
    document.getElementById("product-description2").textContent = description;
    document.getElementById("product-price2").textContent = price;
  }
  function updateProduct3() {
    const color = document.getElementById("color3").value;
    const size = document.getElementById("size3").value;
  
    let image = "";
    let description = "";
    let price = "";
  
    if (color === "pink" && size === "small") {
      image = "https://www.atun.in/wp-content/uploads/2023/02/Fuchsia-2-570x760.jpg"
      description = "pink Small shirt";
      price = "$35";
    } else if (color === "pink" && size === "medium") {
      image = "https://www.atun.in/wp-content/uploads/2023/02/Fuchsia-2-570x760.jpg"
      description = "pink Medium shirt";
      price = "$40";
    } else if (color === "blue" && size === "small") {
      image = "https://www.kalakendra.in/images/media/2023/10/large1697796961FVEkA20510.jpg"
      description = "Blue Small Cotton shirt";
      price = "$38";
    } else if (color === "blue" && size === "medium") {
      image = "https://www.kalakendra.in/images/media/2023/10/large1697796961FVEkA20510.jpg"
      description = "Blue medium shirt";
      price = "$50";
    }
  
    document.getElementById("product-img3").src = image;
    document.getElementById("product-description3").textContent = description;
    document.getElementById("product-price3").textContent = price;
  }
  function updateProduct4() {
    const color = document.getElementById("color4").value;
    const size = document.getElementById("size4").value;
  
    let image = "";
    let description = "";
    let price = "";
  
    if (color === "pink" && size === "small") {
      image = "https://www.vastranand.in/cdn/shop/files/1_871d6045-82d0-4209-b464-46ce51a4c7f3.jpg?v=1716447638"
      description = "pink Small Dress";
      price = "$65";
    } else if (color === "pink" && size === "medium") {
      image = "https://www.vastranand.in/cdn/shop/files/1_871d6045-82d0-4209-b464-46ce51a4c7f3.jpg?v=1716447638"
      description = "pink Medium Dress";
      price = "$70";
    } else if (color === "white" && size === "small") {
      image = "https://m.media-amazon.com/images/I/716A20Ns+aL._AC_UY1100_.jpg"
      description = "white Small Cotton Dress";
      price = "$68";
    } else if (color === "white" && size === "medium") {
      image = "https://m.media-amazon.com/images/I/716A20Ns+aL._AC_UY1100_.jpg"
      description = "white medium Dress";
      price = "$80";
    }
  
    document.getElementById("product-img4").src = image;
    document.getElementById("product-description4").textContent = description;
    document.getElementById("product-price4").textContent = price;
  }
  function updateProduct5() {
    const color = document.getElementById("color5").value;
    const size = document.getElementById("size5").value;
  
    let image = "";
    let description = "";
    let price = "";
  
    if (color === "yellow" && size === "small") {
      image = "https://assets.ajio.com/medias/sys_master/root/20240406/jTor/6610dc8616fd2c6e6aa17c06/-473Wx593H-466855053-yellow-MODEL.jpg"
      description = "yellow Small Dress";
      price = "$55";
    } else if (color === "yellow" && size === "medium") {
      image = "https://assets.ajio.com/medias/sys_master/root/20240406/jTor/6610dc8616fd2c6e6aa17c06/-473Wx593H-466855053-yellow-MODEL.jpg"
      description = "yellow Medium Dress";
      price = "$40";
    } else if (color === "blue" && size === "small") {
      image = "https://m.media-amazon.com/images/I/61oTH8gVArL._AC_UY1100_.jpg"
      description = "Blue Small Cotton Dress";
      price = "$58";
    } else if (color === "blue" && size === "medium") {
      image = "https://m.media-amazon.com/images/I/716A20Ns+aL._AC_UY1100_.jpg"
      description = "Blue medium Dress";
      price = "$50";
    }

    document.getElementById("product-img5").src = image;
    document.getElementById("product-description5").textContent = description;
    document.getElementById("product-price5").textContent = price;
  }
  function updateProduct6() {
    const color = document.getElementById("color6").value;
    const size = document.getElementById("size6").value;
  
    let image = "";
    let description = "";
    let price = "";
  
    if (color === "yellow" && size === "small") {
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakJDKah3SlKBZjdaXQg_QXCiWvg1cU5dz2Q&s"
      description = "yellow Small Dress";
      price = "$65";
    } else if (color === "yellow" && size === "medium") {
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakJDKah3SlKBZjdaXQg_QXCiWvg1cU5dz2Q&s"
      description = "yellow Medium Dress";
      price = "$50";
    } else if (color === "blue" && size === "small") {
      image = "https://images-cdn.ubuy.co.in/6546251f8dbb0634c2117406-linlssanjc-royal-blue-prom-dresses-long.jpg"
      description = "Blue Small Dress";
      price = "$48";
    } else if (color === "blue" && size === "medium") {
      image = "https://images-cdn.ubuy.co.in/6546251f8dbb0634c2117406-linlssanjc-royal-blue-prom-dresses-long.jpg"
      description = "Blue medium Dress";
      price = "$60";
    }
    document.getElementById("product-img6").src = image;
    document.getElementById("product-description6").textContent = description;
    document.getElementById("product-price6").textContent = price;
  }


let cart = [];
let totalPrice = 0;

function addToCart(productId, productName, productPrice, productImage) {
  // Check if the item is already in the cart
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    // If not, create a new cart item
    const cartItem = {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1 // Default quantity to 1 when first added
    };
    cart.push(cartItem);
  }

  // Update the cart and total price
  updateCart();
} 

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}


function increment(productId) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity++;
    updateCart();
  }
}
function decrement(productId) {
  const item = cart.find(item => item.id === productId);
  if (item && item.quantity > 1) {
    item.quantity--;
    updateCart();
  } else if (item && item.quantity === 1) {
    removeFromCart(productId);
  }
}

function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  totalPrice = 0;
  cart.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    // Calculate item total price based on quantity
    const itemTotalPrice = (item.price * item.quantity).toFixed(2);

    cartItemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="50" height="50">
      <p>${item.name} - $${itemTotalPrice} </p>
      <span>
        <button style="background-color: black; color:white; font-size:1rem" onclick="decrement('${item.id}')">-</button>
        <input type="number" value="${item.quantity}" >
        <button style="background-color: black; color:white; font-size:0.9rem" onclick="increment('${item.id}')">+</button>
      </span><br>
      <button onclick="removeFromCart('${item.id}')">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItemElement);
    totalPrice += parseFloat(itemTotalPrice);
  });

  // Update total price 
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

document.querySelectorAll('.cart').forEach(button => {
  button.onclick = () => {
    const productElement = button.closest('.product-item');
    const productId = productElement.id; // Get the product ID
    const productName = productElement.querySelector('h2').textContent;
    const productPrice = productElement.querySelector('p').textContent.replace('$', ''); 
    const productImage = productElement.querySelector('img').src; 

    addToCart(productId, productName, productPrice, productImage); // Add the product to the cart
  };
});
