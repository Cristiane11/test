import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the type for our state
interface CounterState {
  value: number
}

// Define the initial state
const initialState: CounterState = {
  value: 0,
}

// Create the slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

// Export actions to use in components
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

// Export the reducer to add to the store
export default counterSlice.reducer