import React, { Component } from 'react';

class Education extends Component {
	renderEducation(){
		return this.props.education.map((school) => {
			return(
				<div className="col-sm-4 col-xs-12" key={school.key}>
					<h3>{school.school}</h3>
					<h4>{school.date_start} - {school.date_end}</h4>
					<h5>Study: {school.curriculum}</h5>
					<h5>Degree: {school.degree}</h5>
				</div>	
			)
		})
	}
	render() {
		return (
			<div className="education">
				<h2 className="sectionTitle">Education</h2>

				<div className="row">
					{this.renderEducation()}
				</div>
			</div>
		);
	}
}

export default Education ;