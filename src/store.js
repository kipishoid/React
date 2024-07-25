import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducer';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer
  }
});

export default store;