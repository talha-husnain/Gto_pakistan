import React, { useState } from "react";
import "./Cart.css";
import Head from './Head.js';
import Footer from './Footer';

const product = {
  id: 1,
  name: "Product Name",
  image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  images: [
    "https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ],
  description:
    "Our Media artile that are published in a new artibles",
};

const ProductCard = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const toggleCarousel = () => setShowCarousel(!showCarousel);

  return (
    <div className="product-card" style={{display:"inline-block"}}>
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        onClick={toggleCarousel}
      />
      {showCarousel && (
        <div className="carousel-container">
          <button className="close-carousel-button" onClick={toggleCarousel}>
            Close
          </button>
          <div className="carousel-images">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${product.id} - ${index}`}
                className="carousel-image"
              />
            ))}
          </div>
        </div>
      )}
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <>
    <Head/>
     <div className="App">
      <span className="dis">
           <span> <ProductCard /></span>
           <span> <ProductCard /></span>
           <span> <ProductCard /></span>

       </span>
       <span className="dis">
           <span> <ProductCard /></span>
           <span> <ProductCard /></span>
           <span> <ProductCard /></span>

       </span>
       <Footer/>
     </div>
     </>
   );
 }
