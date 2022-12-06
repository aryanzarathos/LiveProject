import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouting from './AppRouting/AppRouting';
import { Provider } from "react-redux";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouting />
    </Provider>
  </React.StrictMode>
);
