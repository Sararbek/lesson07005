import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67b2b304bc0165def8ce399a.mockapi.io' }),
  endpoints: () => ({}),
  tagTypes: ["CARS"]
})