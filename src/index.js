import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './app';
import SimpleHabit from './components/simpleHabit';
import '@fortawesome/fontawesome-free/js/all.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <StrictMode>
        <SimpleHabit />
    </StrictMode>
);

