import { configureStore } from "@reduxjs/toolkit";
import fetchData from "./Features/data/fetchData";
import modalReducer from "./Features/helper/modalReducer";
import fetchDetails from "./Features/data/fetchDetails";

const store = configureStore({
  reducer: {
    fetching: fetchData,
    modalReducer:modalReducer,
    fetchDetails:fetchDetails
    // rowUpdate:rowSlice
    // You can add more reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
