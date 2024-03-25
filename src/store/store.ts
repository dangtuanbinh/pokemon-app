import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([]),
});

export default store;
