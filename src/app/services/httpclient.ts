// services/api.ts
import axios from 'axios';

export const apiHttpClient = axios.create({
    baseURL: 'https://lsc-webpage', // Base URL for the API
});
export const apiPokemonHttpClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: {
        'Content-Type': 'application/json',
    },
});

