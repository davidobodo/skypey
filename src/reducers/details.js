import {DETAILS_INFO} from '../constants/action-types'

const details= (state={}, action) =>{
	switch(action.type){
		case DETAILS_INFO:
			return{
				number :action.payload.number,
				text: action.payload.text,
				msg: action.payload.is_user_msg,
				activeUserId: action.payload.activeUserId
			};	
		default:
			return state;
	}
}

export default details