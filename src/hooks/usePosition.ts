import { useState, useEffect } from 'react';
import { coords } from '../types';

export function usePosition(): coords {
    const [position, setPosition] = useState({
        latitude: null,
        longitude: null
    });

    const getPosition = ({ coords }): void => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude
        });
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getPosition);
    }, []);

    return { ...position };
}
