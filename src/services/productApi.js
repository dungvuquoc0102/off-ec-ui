import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api01.f8team.dev/api" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getOneProduct: builder.query({
      query: (slug) => `/products/${slug}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetOneProductQuery } = productApi;
