import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const archivedcarsSlice = createSlice({
  name: 'archivedcars',
  initialState,
  reducers: {
    addToArchive: (state, {payload}) => {
        state.value.push(payload)
    },
    removeFromArchive: (state, {payload}) => {
        state.value = state.value.filter(({id}) => id !== payload.id)
    }
  },
})

export const { addToArchive, removeFromArchive } = archivedcarsSlice.actions

export default archivedcarsSlice.reducer