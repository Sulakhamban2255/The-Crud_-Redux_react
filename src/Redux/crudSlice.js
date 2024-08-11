import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "addSlice",
  initialState: {
    usersList: [],
    nextUser: 1,
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = { ...action.payload, id: state.nextUser };
      state.usersList.push(newUser);
      state.nextUser += 1;
    },
    deleteUser: (state, action) => {
      state.usersList = state.usersList.filter(
        (user) => user.id !== action.payload
      );
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      state.usersList = state.usersList.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
    },
  },
});

export const { addUser, deleteUser,updateUser } = addSlice.actions;
export default addSlice.reducer;
