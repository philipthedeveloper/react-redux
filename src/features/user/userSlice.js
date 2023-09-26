import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialUserState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUser", async () => {
  let response = await axios.get("https://jsonplaceholder.typicode.com/users");
  let users = response.data;
  return users;
});

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
