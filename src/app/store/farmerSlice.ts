// store/farmerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Farmer {
    id: number;
    name: string;
    sername: string;
    tel: string;
    address: string;
}

interface FarmerState {
    farmers: Farmer[];
    loading: boolean;
    error: string | null;
}

const initialState: FarmerState = {
    farmers: [],
    loading: false,
    error: null,
};

const farmerSlice = createSlice({
    name: 'farmer',
    initialState,
    reducers: {
        setFarmers: (state, action: PayloadAction<Farmer[]>) => {
            state.farmers = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setFarmers, setLoading, setError } = farmerSlice.actions;
export default farmerSlice.reducer;
