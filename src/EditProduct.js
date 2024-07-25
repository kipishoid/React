import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from './productsSlice';

const EditProduct = ({ id, onClose }) => {
  const product = useSelector((state) => state.products.products.find((product) => product.id === id));
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, name, description, price, available }));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <label>
        Available:
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProduct;
