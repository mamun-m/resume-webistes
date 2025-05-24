import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Features/createSlice";

export const Store = configureStore({
  reducer: {
    myProject: reducer
  }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
