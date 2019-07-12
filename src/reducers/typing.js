import { 
	SET_TYPING_VALUE,
	SEND_MESSAGE,
	EDIT_MESSAGE,
	EDITED_MESSAGE

 } from "../constants/action-types";


const typing =(state = "", action) =>{
	switch (action.type) {
		case SET_TYPING_VALUE:
			return action.payload;
		case SEND_MESSAGE:
			return "";
		case EDIT_MESSAGE:
			const text = action.payload.text;
			const text2 = text.replace("(edited)","")
			if(text.slice(-8)==="(edited)"){
				return text2;
			}else{
				return text;
			}
		case EDITED_MESSAGE:
			return ""
		default:
			return state;
		}
	}

export default typing

