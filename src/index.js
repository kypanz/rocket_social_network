import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React router
import { BrowserRouter } from "react-router-dom";

// Moralis
import { MoralisProvider } from "react-moralis";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <MoralisProvider appId="sZS5GHgk7PJCw0StA4xzXd3KWZiVnotJDt4mjNdb" serverUrl="https://rphqzdjbajph.usemoralis.com:2053/server">
      <App />
    </MoralisProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
