const products = [
    {
      name: "Espresso",
      price: "$3.00",
      image: "https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe022.jpg"
    },
    {
      name: "Latte",
      price: "$4.00",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/1024px-Caffe_Latte_at_Pulse_Cafe.jpg"
    },
    {
      name: "Cappuccino",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mocha",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Flat White",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Iced Coffee",
      price: "$4.00",
      image: "https://kitchenaid.com.au/cdn/shop/articles/Iced_Latte.png?v=1724735211&width=832"
    }
  ];
  
  const productGrid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  
  function displayProducts(filter = "") {
    productGrid.innerHTML = "";
  
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = filter ? "search-result" : "product-card";
  
      if (filter) {
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="small-img"/>
          <h4>${product.name}</h4>
        `;
      } else {
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.price}</p>
        `;
      }
  
      productGrid.appendChild(card);
    });
  }
  
  searchInput.addEventListener("input", e => {
    displayProducts(e.target.value);
  });
  
  window.onload = () => displayProducts();
  