import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
  },
  reducers: {
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem('isAuthenticated', 'false');
    },
  },
});

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isAuthenticated: false,
//   },
//   reducers: {
//     setIsAuthenticated: (state) => {
//       state.isAuthenticated = true;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//     },
//   },
// });

export default authSlice.reducer;
export const { setIsAuthenticated, logout } = authSlice.actions;

// export const authSlice= createSlice({
  //   name: 'user',
  //   initialState:{
  //     currentUser: null
  //   },
  //   reducers:{
  //     setUser: (user, action) => {
  //       user.currentUser = action.payload;
  //     }
  //   }
  // })
  
  // export const { setUser } = authSlice.actions;
  // export const selectUsers = state => state.user;
  // export default authSlice.reducer;