import { configureStore } from "@reduxjs/toolkit"
import {api} from './api'
import { setupListeners } from "@reduxjs/toolkit/query"
import modeReducer from './mode' 

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        mode: modeReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware),
    devTools: false
})

setupListeners(store.dispatch) 