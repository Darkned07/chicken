import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  users: [],
  user: JSON.parse(localStorage.getItem("user")) || null,
  names: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logAuth: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
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

export const { logAuth, usersAuth, logoutUser, searchUserName } =
  authSlice.actions;
export default authSlice.reducer;
