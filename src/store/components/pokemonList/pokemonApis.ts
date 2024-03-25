/* eslint-disable no-restricted-globals */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_LINK } from "../../../utils/constants";
import { IPokemonList } from "../../../utils/types/pokemonType";

export const pokemonApis = createApi({
  reducerPath: "pokemonApis",

  baseQuery: fetchBaseQuery({
    baseUrl: API_LINK,
  }),

  endpoints: (builder) => ({
    getPokemonList: builder.query<IPokemonList, void>({
      query: () => ({
        url: `pokemon?offset=0&limit=100`,
        method: "GET",
      }),
    }),

  }),
});

export const {
  useGetPokemonListQuery
} = pokemonApis;
