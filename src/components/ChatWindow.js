import React from "react";
import Header from './Header'
import Chats from './Chats'
import {store} from '../store/store'
import _ from 'lodash'

const ChatWindow = ({ activeUserId }) => {
	const state = store.getState();
	const activeUser = state.contacts[activeUserId];

	const activeMsgs = state.messages[activeUserId]
	return (
			<div className="ChatWindow">
				<Header user={activeUser}/>
				<Chats messages={_.values(activeMsgs)}/>
			</div>
			);
		};
export default ChatWindow;