import { configureStore } from '@reduxjs/toolkit';
import retailReducer from '../RetailRedux/retailSlice';

export default configureStore({
  reducer: {
    retail: retailReducer,
  },
});
