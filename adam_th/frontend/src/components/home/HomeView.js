import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

export default class HomeView extends Component {
	render() {
		return (
			<Container text style={{ marginTop: '7em' }}>
				<Header>Header for the website!</Header>
				<p>Here is a while bunch of text for the website!</p>
			</Container>
		);
	}
}
