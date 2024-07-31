// pages/farmers.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { getFarmers } from '../store/farmerThunks';

const Farmers = () => {
    const dispatch: AppDispatch = useDispatch();
    const farmers = useSelector((state: RootState) => state.farmer.farmers);
    const loading = useSelector((state: RootState) => state.farmer.loading);
    const error = useSelector((state: RootState) => state.farmer.error);

    useEffect(() => {
        dispatch(getFarmers());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Farmers</h1>
            <ul>
                {farmers.map((farmer) => (
                    <li key={farmer.id}>
                        {farmer.name} {farmer.sername} - {farmer.tel} - {farmer.address}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Farmers;
