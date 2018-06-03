import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import shortid from 'shortid';

import PostsView from './posts/PostsView';

import '../css/App.css';
import HomeView from './home/HomeView';
import NotFound from './NotFound';

const { Header, Content, Footer } = Layout;
const uuid = shortid.generate;

const menuItems = [
	{
		to: '/',
		name: 'Home'
	},
	{
		to: '/blog',
		name: 'Blog'
	},
	{
		to: '/account',
		name: 'Account'
	}
];

class App extends Component {
	render() {
		return (
			<Router>
				<Layout>
					<Header>
						<Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
							{menuItems.map(item => (
								<Menu.Item key={uuid()}>
									<Link to={item.to}>{item.name}</Link>
								</Menu.Item>
							))}
						</Menu>
					</Header>
					<Content style={{ padding: '16px 50px' }}>
						<Switch>
							<Route exact path="/" component={HomeView} />
							<Route path="/posts" component={PostsView} />
							<Route component={NotFound} />
						</Switch>
					</Content>
					<Footer>Adam Thompson ©</Footer>
					<Router />
				</Layout>
			</Router>
		);
	}
}

export default App;
