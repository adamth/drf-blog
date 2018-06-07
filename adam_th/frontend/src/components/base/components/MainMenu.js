import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Button, Segment } from 'semantic-ui-react';

export default class MainMenu extends Component {
	render() {
		return (
			<Segment inverted basic>
				<Menu secondary pointing inverted>
					<Container>
						<Menu.Item>
							<Link to="/">Home</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/blog">Blog</Link>
						</Menu.Item>
						<Menu.Item position="right">
							<Button as="a" inverted>
								<Link to="/account">Account</Link>
							</Button>
						</Menu.Item>
					</Container>
				</Menu>
			</Segment>
		);
	}
}
