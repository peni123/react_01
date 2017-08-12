import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/app';
import {loadState, saveState} from './localStorage';


const persistedState = loadState();

const store = createStore(allReducers, persistedState);

store.subscribe(()=>{
	saveState({comments:store.getState().comments})
})


const render = () => {

	ReactDOM.render(
    <Provider store = {store}>
    	<App/>
    </Provider>,
    document.getElementById('root')
	);
};

store.subscribe(render)
render();
