import React from 'react';
import './App.css';
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import {store} from '../store/store'
import _ from 'lodash'

const App = () => {
	//gets state property names and values
	const { contacts, user, activeUserId } = store.getState();
  return (
  	//pass the state values as props into our two components
  	//use lodash to convert contacts from objects to array
    <div className="App">
	     <Sidebar contacts={_.values(contacts)}/>
	     <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
}

export default App;
