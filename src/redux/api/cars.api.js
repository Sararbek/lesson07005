import { mainApi } from "./index"

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query({
        query: (params) => ({
            url: "/cars",
            method: "GET",
            params
        }),
        providesTags: ["CARS"]
    }),
    createCar: build.mutation({
        query: (body) => ({
            url: "/cars",
            method: "POST",
            body
        }),
        invalidatesTags: ["CARS"]
    }),
    deleteCar: build.mutation({
        query: (id) => ({
            url: `/cars/${id}`,
            method: "DELETE"
        }),
        invalidatesTags: ["CARS"]
    }),
    updateCar: build.mutation({
        query: ({id, body}) => ({
            url: `/cars/${id}`,
            method: "PUT",
            body
        }),
        invalidatesTags: ["CARS"]
    })
  }),
  overrideExisting: false,
})

export const { useCreateCarMutation, useUpdateCarMutation, useGetCarsQuery, useDeleteCarMutation } = extendedApi