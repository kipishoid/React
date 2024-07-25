import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from './productsSlice';

const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleAvailability(id));
  };

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.available ? 'Available' : 'Unavailable'}</p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <button onClick={() => handleToggle(product.id)}>Toggle Availability</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
