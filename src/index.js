import React from 'react';
import ReactDOM from 'react-dom';
import GiftExpertApp from './GiftExpertApp';
import 'animate.css';
import './index.css';

//const divRoot = document.querySelector ('#app');
//ReactDOM.render (<GiftExpertApp />, divRoot);

ReactDOM.render( <GiftExpertApp />, document.getElementById('app') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
