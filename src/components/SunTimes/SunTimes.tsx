import * as React from 'react';
import { usePosition } from '../../hooks/usePosition';
import { useSun } from '../../hooks/useSun';
import { coords, sunTimes } from '../../types';
import { Loader } from '../';
import classes from './SunTimes.css';

export function SunTimes() {
    const { latitude, longitude }: coords = usePosition();
    const { sunrise, sunset }: sunTimes = useSun({ latitude, longitude });

    console.log(sunrise, sunset)

    const noLocation: boolean = (latitude === null && longitude === null);

    console.log(noLocation, classes.pageWrapper)
    
    return (
        <main className={classes.main}>

            <div className={classes.tile}>
                {/* <Loader /> */}
                { noLocation ? (
                    <Loader />
                ) : (
                    <>
                        <div className={ classes.subHeader }>
                            <h2>Your Coordinates</h2>

                            <p className={ classes.subtext }>
                                { latitude }, { longitude }
                            </p>
                        </div>

                        <div className={ classes.timerContainer }>
                            <div>
                                <h2>Sunrise</h2>
                                
                                <p className={classes.subtext}>{ sunrise }</p>
                            </div>

                            <div>
                                <h2>Sunset</h2>

                                <p className={classes.subtext}>{ sunset }</p>
                            </div>
                        </div>
                    </>
                ) }
            </div>
        </main>
    )
}
