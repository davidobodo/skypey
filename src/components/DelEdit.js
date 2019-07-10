import React from 'react'
import './DelEdit.css'
import {store} from '../store/store'
import {editMessage} from '../actions/action'
import {deleteMessage} from '../actions/action'

const DelEdit= () =>{
	const details = store.getState().details;
	const { number,text, msg, activeUserId} = details
	return(
		<div className="DelEdit" id="DelEdit">
			 <button className="edit" onClick={handleEdit.bind(null,number,text)}>EDIT</button>
	 		 <button className="delete" onClick={handleDelete.bind(null,number)}>DELETE</button>

		 </div>
	)
}

const handleEdit = (number, text) => {
	const {activeUserId} = store.getState().details;
	console.log(number,text,activeUserId)
	store.dispatch(editMessage(number,text, activeUserId))
}

const handleDelete = (number)=>{
	const {activeUserId} = store.getState().details;
	store.dispatch(deleteMessage(number, activeUserId))

}

 


export default DelEdit