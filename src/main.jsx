import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // HashRouter теперь в App.jsx
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Router уже внутри App */}
  </React.StrictMode>
);