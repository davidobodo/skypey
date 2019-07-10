import React from "react";
import Header from './Header'
import Chats from './Chats'
import {store} from '../store/store'
import _ from 'lodash'
import './ChatWindow.css'
import MessageInput from '../containers/MessageInput'


const ChatWindow = ({ activeUserId }) => {
	const state = store.getState();
	console.log(activeUserId)
	const activeUser = state.contacts[activeUserId];
	const activeMsgs = state.messages[activeUserId];
	const {typing} = state
	return (
			<div className="ChatWindow">
				<Header user={activeUser} activeUserId={activeUserId}/>
				<Chats messages={_.values(activeMsgs)}/>
				<MessageInput value={typing}/>
			</div>
			);
		};
export default ChatWindow;