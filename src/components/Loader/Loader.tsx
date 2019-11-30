import * as React from 'react';
import classes from './Loader.css';

export function Loader() {
    return (
        <>
            <h2 className={ classes.heading }>Finding the sun for you...</h2>
            <div className={ classes.sunLoader } />
        </>
    )
}
