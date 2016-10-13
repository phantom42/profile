import React from 'react';
import Info from '../components/info';
import contactData from '../data/contactInfo.json';
import profilePhoto from '../assets/jamaica.jpg';

const InfoContainer = (props) => {
	return (<Info data={contactData} photo={profilePhoto}/>);
}

export default InfoContainer ;