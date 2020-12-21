import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddPost, UpdateText} from "./redux/state";


let Rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} AddPost={AddPost} UpdateText={UpdateText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

Rerender(state);

subscribe(Rerender);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
