import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  employs: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      if (action.payload.orders === null) {
        state.orders = [];
      } else {
        state.orders = action.payload.orders;
      }
    },
    setEmploys: (state, action) => {
      if (action.payload.employs === null) {
        state.employs = [];
      } else {
        state.employs = action.payload.employs;
      }
    },
  },
});

export const { setOrders, setEmploys } = projectSlice.actions;

export default projectSlice.reducer;
