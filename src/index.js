import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import './style.css';

ReactDOM.render(<App />, document.getElementById('root'));


/*
This code is adapted from the following tutorial https://medium.com/hackernoon/building-github-profile-analytics-using-react-part-1-37e03b0c3366

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
*/
serviceWorker.unregister();
