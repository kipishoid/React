import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducer';

const store = configureStore({
  reducer: {
    theme: themeReducer
  }
});

export default store;