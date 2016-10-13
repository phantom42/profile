import React from 'react';
import './App.css';
import InfoContainer from './containers/infoContainer';
import ResumeContainer from './containers/resumeContainer';

const App = (props) => {
		return (
			<div className="App">
				<InfoContainer />
				<ResumeContainer />
	  		</div>
		);
}

export default App;
