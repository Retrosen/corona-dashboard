import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import firebaseConfig from './firebase-config';

import {
    FirebaseAppProvider
} from 'reactfire';

ReactDOM.render((
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
    </FirebaseAppProvider>
), document.getElementById('root'));