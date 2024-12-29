import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={`/product/${product._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;