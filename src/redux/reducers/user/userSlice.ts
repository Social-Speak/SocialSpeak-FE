import { ReducerPayload } from "@/redux/utils/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  username?: string;
  email?: string;
  image?: string;
}

interface userState {
  currentUser?: User;
}

const userInitialState: userState = {
  currentUser: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser(state, { payload }: ReducerPayload<User>) {
      state.currentUser = { ...payload };
    },
    resetUser(state) {
      state.currentUser = undefined;
    },
  },
});

const userReducer = {
  reducer: userSlice.reducer,
};

export const { setUser, resetUser } = userSlice.actions;

export default userReducer;
