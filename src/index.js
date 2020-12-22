import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let Rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.GetState()}
                 AddPost={store.AddPost.bind(store)}
                 UpdateText={store.UpdateText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

Rerender(store._state);

store.subscribe(Rerender);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
