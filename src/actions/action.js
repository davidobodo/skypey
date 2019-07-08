import {
	SET_ACTIVE_USER_ID,
	SET_TYPING_VALUE,
	SEND_MESSAGE

} from '../constants/action-types'

export const setActiveUserId = (id)=>{
	return {
		type: SET_ACTIVE_USER_ID,
		payload:id
	}
}

export const setTypingValue = (value) => {
	return{
		type: SET_TYPING_VALUE,
		payload: value
	}
}

export const sendMessage = (message, userId) => {
	return {
		type: SEND_MESSAGE,
		payload: {
			message,
			userId
		}
	}
}