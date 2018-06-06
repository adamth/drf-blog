import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseView from './base/BaseView';
import '../css/App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<BaseView />
			</Router>
		);
	}
}

export default App;
