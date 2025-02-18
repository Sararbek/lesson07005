import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './api'
import archive from "./features/archivedcars.slice"

export const store = configureStore({
  reducer: {
    archive,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
})