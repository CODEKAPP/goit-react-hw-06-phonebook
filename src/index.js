// index.js
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom en lugar de ReactDOM
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from 'components/App';
import './index.css';

const root = document.getElementById('root'); // Obtén el elemento root
const reactRoot = createRoot(root); // Crea un root React usando createRoot

reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );

