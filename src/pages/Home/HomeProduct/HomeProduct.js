import React, { useEffect, useState } from 'react';
import SingleProduct from '../../SingleProduct/SingleProduct';

const HomeProduct = () => {const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
      return (
          <div className="container">
              <div className='row ' >
              <h1 className="text-primary text-center my-4">Popular Bikes</h1>
  
              {products.map((product) => (
          <SingleProduct 
          key={product._id}
          product={product}
          >
  
          </SingleProduct>
        ))}
          </div>
          </div>
      );
  };

export default HomeProduct;