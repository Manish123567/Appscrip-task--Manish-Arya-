import React from "react";

import "./product_card.css";

const products = [
  {
    img: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  {
    img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  {
    img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  {
    img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  {
    img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  {
    img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  {
    img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  {
    img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  {
    img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  {
    img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  {
    img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    name: "PPXOC Milkyway dress in pressed flowers",
    price: "Sign in or Create an account to see pricing",
    like: " ♡",
  },
  // Add more products as needed
];

export default function page() {
  return (
    <div>
      {/* <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Responsive Product Card Grid</h1>
        <h1 className="text-3xl">Pure CSS</h1>
      </div> */}
      <p style={{ marginLeft: "12px" }}>NEW PRODUCT</p>
      <section id="Projects" className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt="Product" className="product-image" />
            <div className="product-info">
              {/* <span className="brand">{product.brand}</span> */}
              <p className="product-name">{product.name}</p>
              <div className="product-details">
                <div className="product-content">
                  <p className="price">{product.price}</p>
                  <span style={{ fontSize: "40px", color: "black" }}>
                    {product.like}
                  </span>
                </div>
                {/* <del>
                    <p className="old-price">{product.oldPrice}</p>
                  </del> */}
                <div className="add-to-cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* <div className="text-center py-10 px-10">
        <h2 className="font-bold text-2xl md:text-4xl mb-4">
          Thanks to <a href="https://unsplash.com/@nixcreative" className="underline font-black">Tyler Nix</a> for those AMAZING product images!
        </h2>
      </div> */}
    </div>
  );
}
