import {
  combineReducers,
  configureStore,
  // createImmutableStateInvariantMiddleware,
} from "@reduxjs/toolkit";
import { taskReducer } from "./features/task.slice";

const combineReducer = combineReducers({
  task: taskReducer,
});

// const persistedReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer: combineReducer,

  // reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
// export const persistor = persistStore(store);
