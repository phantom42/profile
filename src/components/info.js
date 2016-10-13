import React from 'react';
import Profiles from './profiles';

const Info = (props) => {
	return(
		<div className="App-header">
			<img src={props.photo} className='profilePhoto img-circle'  alt="logo" />
			<h2>{props.data.name}</h2>
			<h4>{props.data.job} - {props.data.city}, {props.data.state}</h4>
			<Profiles data={props.data.profiles} />
		</div>
	);
}

export default Info ;