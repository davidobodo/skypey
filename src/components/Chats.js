import React, {Component} from 'react'
import './Chats.css'
import {store} from '../store/store'
// import {deleteMessage} from '../actions/action'
import {editMessage, details} from '../actions/action'
import DelEdit from './DelEdit'
import _ from 'lodash'

class Chats extends Component {
	constructor(props){
		super(props);
		this.chatsRef =React.createRef();
	}

	componentDidMount () {
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}
	
	scrollToBottom = () => {
		this.chatsRef.current.scrollTop =
		this.chatsRef.current.scrollHeight;
	};


	render(){


		// console.log(this.props)
		return(
			<div className="Chats" ref={this.chatsRef}>
				<DelEdit/>
				{this.props.messages.map(message => (
					<Chat message={message} key={message.number} />))}
			</div>
		)
	}

	
}

	const Chat = ({message}) => {
			// console.log(message)
			const { text, is_user_msg, number} = message;
			return(
				<span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`} 

			  onClick= {myFunction.bind(null,number,text,is_user_msg)}
			
				>{text}</span>
			)
		};


const myFunction = (number,text,is_user_msg) => {
	if (is_user_msg == true) {
		document.getElementById("DelEdit").style.display="flex";
		const activeUserId = store.getState().activeUserId;
		console.log(number, activeUserId,text,is_user_msg)
		store.dispatch(details(number,text,is_user_msg,activeUserId))
	}
	else{
		return null
	}
}






// onClick={dispatchBtnAction.bind(null, number, text)}
// console.log(activeUserId, number, text)
	// store.dispatch(deleteMessage(number, activeUserId))

export default Chats