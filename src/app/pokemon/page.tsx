// pages/pokemon.tsx
"use client"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonData } from '../store/pokemonThunks';
import { RootState, AppDispatch } from '../store/store';

const Pokemon = () => {
    // Ensure useDispatch is typed with AppDispatch
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.pokemon);
    console.log(data)
    useEffect(() => {
        dispatch(fetchPokemonData());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Pokémon List</h1>
            <ul>
                {data.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Pokemon;
