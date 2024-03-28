import { configureStore } from "@reduxjs/toolkit";
import fetchData from "./Features/data/fetchData";
import modalReducer from "./Features/helper/modalReducer";
import fetchDetails from "./Features/data/fetchDetails";
import dataDisplay from "./Features/data/dataDisplay";

const store = configureStore({
  reducer: {
    fetching: fetchData,
    modalReducer:modalReducer,
    fetchDetails:fetchDetails,
    fetchJson:dataDisplay
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
