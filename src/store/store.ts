import { configureStore } from "@reduxjs/toolkit";
import { pokemonApis } from "./components/pokemonList/pokemonApis";
import pokemonReducer from "./components/pokemonList/pokemonSlices"

const rootReducer = {
  [pokemonApis.reducerPath]: pokemonApis.reducer,
  pokemon: pokemonReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([pokemonApis.middleware]),
});

export default store;
