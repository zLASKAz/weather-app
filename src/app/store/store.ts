import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./couterSlice";
import farmerReducer from "./farmerSlice"
import pokemonReducer from "./pokemonSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        farmer: farmerReducer,
        pokemon: pokemonReducer,

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
