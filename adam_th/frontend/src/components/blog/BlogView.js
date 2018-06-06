import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment, Grid } from 'semantic-ui-react';

export default class PostsView extends Component {
	state = {
		loading: true,
		posts: [],
		message: '',
		endpoint: 'api/posts/'
	};

	componentWillMount = () => {
		fetch(this.state.endpoint, {
			method: 'get'
		})
			.then(response => {
				return response.json();
			})
			.then(posts => {
				this.setState({
					loading: false,
					posts,
					message: ''
				});
			})
			.catch(err => {
				this.setState({
					loading: false,
					message: 'There was an error loading the posts. Please try again.'
				});
			});
	};

	render() {
		return (
			<Segment>
				<Dimmer active>
					<Loader />
				</Dimmer>

				<Image src="/assets/images/wireframe/short-paragraph.png" />
			</Segment>
		);
	}
}
