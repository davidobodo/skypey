import { createStore } from "redux";
import reducer from '../reducers/reducer'
import {contacts} from "../static-data"


export const store = createStore(reducer, {contacts});


