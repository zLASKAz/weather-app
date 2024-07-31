// store/farmerThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiHttpClient } from '../services/httpclient';
import { setFarmers, setLoading, setError } from './farmerSlice';

export const getFarmers = createAsyncThunk(
    'farmer/getFarmers',
    async (_, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        try {
            const response = await apiHttpClient.get('/get-farmer');
            thunkAPI.dispatch(setFarmers(response.data));
            thunkAPI.dispatch(setLoading(false));
        } catch (error) {
            thunkAPI.dispatch(setError('Error fetching farmers'));
            thunkAPI.dispatch(setLoading(false));
            console.error('Error fetching farmers:', error);
        }
    }
);
