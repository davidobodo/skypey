import React, {Component} from 'react'
import './Chats.css'

class Chats extends Component {
	render(){
		return(
			<div className="Chats">
				{this.props.messages.map(message => (
					<Chat message={message} key={message.number}/>))}
			</div>
		)
	}
}

const Chat = ({message}) => {
	const { text, is_user_msg} = message;
	return(
		<span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
	)
};

export default Chats