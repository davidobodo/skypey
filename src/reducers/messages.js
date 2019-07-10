import { getMessages } from "../static-data"
import { SEND_MESSAGE } from "../constants/action-types";
import { DELETE_MESSAGE } from "../constants/action-types";
import { EDITED_MESSAGE } from "../constants/action-types";
import _ from 'lodash'


const messages =(state=getMessages(10), action)=>{
	switch(action.type){
		case SEND_MESSAGE:
		const{message, userId} = action.payload;
		const allUserMsgs = state[userId];
		const number = +_.keys(allUserMsgs).pop()+1;
			return {
				...state,
				[userId]:{
					...allUserMsgs,
					[number]:{
						number,
						text:message,
						is_user_msg:true
					}
				}
			};
		case DELETE_MESSAGE:
			const messageId = action.payload.number;
			const activeUserId =action.payload.activeUserId;
			return{
				...state,
				[activeUserId]: _.omit(state[activeUserId],messageId)
			};
		case EDITED_MESSAGE:
			const text =action.payload.typing;
			const id=action.payload.activeUserId;
			const msg=action.payload.selectedMessage
			return {
				...state,
				[id]:{
					...state[id],
					[msg]:{
						msg,
						text: text,
						is_user_msg:true
					}
				}

			}

		
		default:
			return state;
	}
}

export default messages

