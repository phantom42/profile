import React from 'react';
import Resume from '../components/resume';
import resumeData from '../data/resume.json';


const ResumeContainer = (props) => {
	return (<Resume data={resumeData} />);
}

export default ResumeContainer ;