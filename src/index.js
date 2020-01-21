import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {store} from './store/store'


//so that render can be passed into subscribe method
const render = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

//this makes sure our app actually renders.its a function call
render();

//makes sure every update and action we perform is actually carried out
store.subscribe(render);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
