import React, {Component} from 'react'
import './Chats.css'
import {store} from '../store/store'
import {details} from '../actions/action'
import DelEdit from './DelEdit'

class Chats extends Component {
	//this code is to make sure the chat scrolls to the bottom when there is a submission of any message
	//starts here...
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
	//ends here


	render(){
		return(
			//pass in this.chatRef into entire div to enable automatic scrolling of cha component
			//chats has received messages as a prop from its parent component, but we want each to be rendered separately so we map
			//we use the message number property as key(means of react identifying each component individually)
			//we pass each message into a new component called Chat(i.e individual chat) so it can be rendered seperately

			<div className="Chats" ref={this.chatsRef}>
				<DelEdit/>
				{this.props.messages.map(message => (
					<Chat message={message} key={message.number} />))}
			</div>
		)
	}

	
	}

	//Chat receives the prop passed into it
	const Chat = ({message}) => {
		//all the props of message are gotten through destructuring
			const { text, is_user_msg, number} = message;
			//for the sake of different styling...Use ternary operator to check if is_user_msg is true or false...depending on the outcome, either add more string to the current className or leave the className as it is
			//this newly added className sure has some styles of its own which makes sure it displays differently
			//on clicking any of the span tags run the on click event with the usual syntax
			return(
				<span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`} 

			  onClick= {myFunction.bind(null,number,text,is_user_msg)}
			
				>{text}</span>
			)
		};


//this is the function that gets run due to clicking any of the span tags
const myFunction = (number,text,is_user_msg) => {
	//examine is_user_msg
	//if its true diaplay a new component, by changing its display style property from none to flex
	if (is_user_msg === true) {
		document.getElementById("DelEdit").setAttribute("style", "display: flex; align-self:flex-start;");

		//get activeuserId from store i.e the user whose chats are currently displayed
		const activeUserId = store.getState().activeUserId;

		// dispatch this action , passing in the properties of the particular message that was clicked and the activeUserId
		store.dispatch(details(number,text,is_user_msg,activeUserId))
	}
	else{
		return null
	}
}

export default Chats