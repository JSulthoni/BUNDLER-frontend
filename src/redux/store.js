import contextReducer from "./contextSlice";
import navigationReducer from "./navigationSlice";
import authenticationReducer from "./authenticationSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contextConfig = {
    key: "context",
    version: 1,
    storage,
};

const navigationConfig = {
    key: "navigation",
    version: 1,
    storage,
};

const authConfig = {
    key: "authentication",
    version: 1,
    storage,
}

const conReducer = persistReducer(contextConfig, contextReducer);
const navReducer = persistReducer(navigationConfig, navigationReducer);
const authReducer = persistReducer(authConfig, authenticationReducer)

// Combining 3 reducers with combineReducers()
const allReducer = combineReducers({
    context : conReducer, 
    navigation : navReducer,
    authentication : authReducer
})

export const store = configureStore({
    reducer: allReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
});

export const persistor = persistStore(store);