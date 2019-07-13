import React from 'react'
import './DelEdit.css'
import {store} from '../store/store'
import {editMessage} from '../actions/action'
import {deleteMessage} from '../actions/action'

const DelEdit= () =>{
	// Receives all the info that was passed intp this State
	//the activeuserId in other to get its credentials
	//from her target that activeuserId's message number, text , blah blah blah 
	const details = store.getState().details;
	const { number,text} = details
	return(

		//send the number and text of the clicked message into a function
		<div className="DelEdit" id="DelEdit">
			 <button className="edit" onClick={handleEdit.bind(null,number,text)}>EDIT</button>
	 		 <button className="delete" onClick={handleDelete.bind(null,number)}>DELETE</button>

		 </div>
	)
}

//These are the functions receiving the number and text
const handleEdit = (number, text) => {
	//we need the owner of this particular chat so we dont use the number and text in just any conversation
	const {activeUserId} = store.getState().details;
	store.dispatch(editMessage(number,text, activeUserId))
}

const handleDelete = (number)=>{
	const {activeUserId} = store.getState().details;
	store.dispatch(deleteMessage(number, activeUserId))

}

 


export default DelEdit