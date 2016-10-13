import React from 'react';
import JobHistory from './jobHistory';
import Education from './education';

const Resume = (props) => {
	const { data } = props;
	return (
		<div className="resume">
			<JobHistory jobHistory={data.job_history}/>
			<Education education={data.education}/>
		</div>
	)
}

export default Resume ;