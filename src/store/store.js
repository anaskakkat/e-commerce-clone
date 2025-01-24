import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../store/catogorySlices";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
