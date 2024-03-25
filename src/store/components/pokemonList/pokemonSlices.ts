import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pokemonApis } from "./pokemonApis";

const initialState= {
  pokemonList: []
};

const pokemonList = createSlice({
  name: "pokemon-list",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addMatcher(
        pokemonApis.endpoints.getPokemonList.matchFulfilled,
        (state: any, action: PayloadAction<any>) => {
          state.pokemonList = action.payload;
        }
      )
      .addMatcher(
        pokemonApis.endpoints.getPokemonList.matchRejected,
        (state: any, action: PayloadAction<any>) => {}
      );
  },
});

const { reducer, actions } = pokemonList;
export const {} = actions;
export default reducer;
