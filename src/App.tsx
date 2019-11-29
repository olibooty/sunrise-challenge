import * as React from 'react';
import { usePosition } from './hooks/usePosition';
import { useSun } from './hooks/useSun';
import { coords, sunTimes } from './types';
import classes from './App.css';

export function App() {
    const { latitude, longitude }: coords = usePosition();
    const { sunrise, sunset }: sunTimes = useSun({ latitude, longitude });

    console.log(sunrise, sunset)

    const noLocation: boolean = (latitude === null && longitude === null);

    console.log(noLocation, classes.main)

    // if (!hasLocation) {
    //     return (

    //     )
    // }

    return (
        <div className={classes.pageWrapper}>
            <main className={classes.main}>
                <h1>What's the sun doing??</h1>

                { noLocation ? (
                    <p>loading...</p>
                ) : (
                    <>
                        <p>Based on your location [{latitude}, {longitude}]</p>
                        <p>Sunrise is at : {sunrise}</p>
                        <p>sunset is at : {sunset}</p>
                    </>
                ) }
            </main>
        </div>
    )
}
