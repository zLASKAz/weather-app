// store/pokemonSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    loading: boolean;
    error: string | null;
    data: { name: string; url: string }[];
}

const initialState: PokemonState = {
    loading: false,
    error: null,
    data: [],
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        setPokemonData(state, action: PayloadAction<{ name: string; url: string }[]>) {
            state.data = action.payload;
        },
    },
});

export const { setLoading, setError, setPokemonData } = pokemonSlice.actions;
export default pokemonSlice.reducer;
