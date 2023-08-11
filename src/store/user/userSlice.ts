import { ReducerPayload } from "@/store/utils/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import userInitialState from "./userInitialState";

export interface UserStorePayload {
  username: string;
  email: string;
  image: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser(state, { payload }: ReducerPayload<UserStorePayload>) {
      const lastSyncTime = Date.now().toFixed();
      state.currentUser = { ...payload, lastSyncTime };
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
