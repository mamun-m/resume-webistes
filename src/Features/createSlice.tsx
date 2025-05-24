import { createSlice } from "@reduxjs/toolkit";

interface ExampleState {
  value: number;
}

const initialState: ExampleState = {
  value: 0
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    }
  }
});

export const { increment } = exampleSlice.actions;

export default exampleSlice.reducer;
