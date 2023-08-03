import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "../reducers/user/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer.reducer),
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);
export { store, persistor };
export default store;
export type RootState = ReturnType<typeof store.getState>;
