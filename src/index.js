import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
//
// setInterval(() => {
//     store.dispatch({type: "FAKE"})}, 1000
// );
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App state={store.getState()} store={store}/>
            </Provider>
        </BrowserRouter>
    // </React.StrictMode>
);
