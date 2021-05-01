/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase'

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
    </FirebaseContext.Provider>
    , document.getElementById('root'));

// Client side rendered app: react(Cra)
    // -> database: firebase
    // -> react-loading-skeleton
    // tailwin
// Architecture
    // -> components
    // -> constants
    // -> context
    // -> helpers
    // -> Hooks
    // -> lib (firebase is going to live here)
    // -> pages
    // -> services (firebase functions in here)
    // -> styles (tailwind (app/tailwind))
