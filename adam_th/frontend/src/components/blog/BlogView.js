import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment, Grid, Header, Container } from 'semantic-ui-react';

import './BlogView.css';

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

	renderLatest = post => {
		console.log(post);
		return (
			<Grid.Row columns={1} style={{ color: 'white' }}>
				<Grid.Column style={{ background: `url(${post['background_img']})`, height: '50vh', backgroundSize: 'cover' }}>
					<Container text style={{ marginTop: '7em' }}>
						<Header as="h1" content={post.title} style={{ color: 'white' }} />
						<p>Post by Adam Thompson</p>
					</Container>
				</Grid.Column>
			</Grid.Row>
		);
	};

	renderPosts = posts => {
		return (
			<Grid.Row columns={2}>
				{posts.map(post => (
					<Grid.Column style={{ background: `url(${post['background_img']})`, height: '50vh', backgroundSize: 'cover' }}>
						<Container text style={{ marginTop: '7em' }}>
							<Header as="h2" content={post.title} style={{ color: 'white' }} />
							<p>Post by Adam Thompson</p>
						</Container>
					</Grid.Column>
				))}
			</Grid.Row>
		);
	};

	render() {
		const { loading, posts } = this.state;
		return (
			<div>
				<Dimmer active={loading}>
					<Loader />
				</Dimmer>
				{!loading && (
					<Grid>
						{posts.length && this.renderLatest(posts[0])}
						{posts.length > 0 && this.renderPosts(posts.slice(1, posts.length))}
					</Grid>
				)}
			</div>
		);
	}
}
