import React, { Component } from 'react';

class Profiles extends Component {
	handleClick(e){
		let url = e.target.parentElement.getAttribute('data-url');
		window.open(url);
	}
	renderProfiles(){
		return this.props.data.map((profile) => {
			return (
				<button className="btn btn-info profileButton" key={profile.key} type="button" onClick={this.handleClick.bind(this)} data-url={profile.url}><i className={"fa fa-2x " + profile.icon}></i></button>
			)
		});
	}
	render() {
		return (
			<div className="profiles">
				{this.renderProfiles()}
			</div>
		);
	}
}

export default Profiles;