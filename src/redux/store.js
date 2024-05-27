import { configureStore } from '@reduxjs/toolkit';
import offerReducer from './offerSlice';

const store = configureStore({
  reducer: {
    offers: offerReducer,
  },
});

export default store;
