import * as React from 'react';
import { SunTimes } from './components';
import classes from './App.css';

export function App() {
    return (
        <div className={ classes.pageWrapper }>
            <header className={ classes.header }>
                <h1>What's the sun doing today?</h1>
            </header>

            <SunTimes />
        </div>
    )
}
