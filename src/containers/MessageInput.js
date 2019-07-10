import React from "react";
import {store} from "../store/store";
import { setTypingValue, sendMessage,editedMessage } from "../actions/action";

import "./MessageInput.css";

const MessageInput = ({value}) => {
	const state = store.getState();

	const handleChange = (e) => {
		store.dispatch(setTypingValue(e.target.value))
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { typing, activeUserId, selectedMessage}= state;
		console.log(selectedMessage);
		if(selectedMessage!==null){
			store.dispatch(editedMessage(typing, activeUserId,selectedMessage))
		}else(
		store.dispatch(sendMessage(typing, activeUserId))
		)
		
	};
	return(
		<form className="Message" onSubmit={handleSubmit}>
			<input
			className="Message__input"
			onChange={handleChange}
			value={value}
			placeholder="write a message"
			/>
		</form>
	)
}


export default MessageInput