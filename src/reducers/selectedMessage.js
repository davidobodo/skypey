import {EDIT_MESSAGE, EDITED_MESSAGE} from '../constants/action-types'

const selectedMessage = (state=null, action)=> {
	switch(action.type){
		case EDIT_MESSAGE:
			return action.payload.number;
		case EDITED_MESSAGE:
			return null
		default:
			return state;
	}
}

export default selectedMessage