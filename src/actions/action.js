import {SET_ACTIVE_USER_ID} from '../constants/action-types'

export const setActiveUserId = (id)=>{
	return {
		type: SET_ACTIVE_USER_ID,
		payload:id
	}
}