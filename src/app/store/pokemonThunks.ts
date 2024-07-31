// store/pokemonThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiPokemonHttpClient } from '../services/httpclient';
import { setPokemonData, setLoading, setError } from './pokemonSlice';

export const fetchPokemonData = createAsyncThunk(
    'pokemon/fetchPokemonData',
    async (_, { dispatch, rejectWithValue }) => {
        dispatch(setLoading(true));
        try {
            const response = await apiPokemonHttpClient.get('/pokemon');
            await dispatch(setPokemonData(response.data.results));
        } catch (error) {
            dispatch(setError('Error fetching Pokémon data'));
            return rejectWithValue('Error fetching Pokémon data');
        } finally {
            dispatch(setLoading(false));
        }
    }
);
