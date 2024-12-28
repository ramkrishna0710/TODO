import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER } from "redux-persist";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";



const persisConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
    whitelist: ['todo'],
}

const persistedReducer = persistReducer(persisConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REGISTER, PAUSE, PERSIST, PURGE]
            },
        }),
});

export const persistor = persistStore(store)