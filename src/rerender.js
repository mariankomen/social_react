import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddPost, UpdateText} from "./redux/state";


export let Rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} AddPost={AddPost} UpdateText={UpdateText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

