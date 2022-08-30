import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
// import Code1 from './components/code1';
// import Code2 from './components/code2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  <StrictMode>
    <App />
    {/* <Code1 />
    <Code2 /> */}
  </StrictMode>,
);
