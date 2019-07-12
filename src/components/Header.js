import React from 'react'
import './Header.css'
import {store} from '../store/store'
import {unsetActiveUser} from '../actions/action'

const Header = ({user, activeUserId}) => {
	const { name, status } = user;
	return(
		<header className="Header">
			<button onClick={handleClick.bind(null, activeUserId)}>
				Back
			</button>
			<h1 className="Header__name">{name}</h1>
			<p className="Header__status">{status}</p>
		</header>
	)
}

const handleClick = (activeUserId)=> {
	store.dispatch(unsetActiveUser(activeUserId))
}

export default Header