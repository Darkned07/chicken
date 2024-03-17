import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  users: [],
  user: JSON.parse(localStorage.getItem("user")) || null,
  names: "",
  ref: JSON.parse(localStorage.getItem("ref")) || [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logAuth: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
      const item = state.users.filter((d) => d.friend === state.user.id);
      if (item) {
        localStorage.setItem("ref", JSON.stringify(item));
        state.ref = item;
      }
    },
    usersAuth: (state, { payload }) => {
      state.users = payload;
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.setItem("user", JSON.stringify(null));
    },
  },
});

export const { logAuth, usersAuth, logoutUser } = authSlice.actions;
export default authSlice.reducer;
