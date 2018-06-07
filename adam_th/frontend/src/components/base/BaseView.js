import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BlogView from '../blog/BlogView';
import AccountView from '../account/AccountView';
import HomeView from '../home/HomeView';
import MainMenu from './components/MainMenu';
import NotFound from '../NotFound';

const menuItems = [
	{
		to: '/',
		component: HomeView
	},
	{
		to: '/blog',
		component: BlogView
	},
	{
		to: '/account',
		component: AccountView
	}
];

export default class BaseView extends Component {
	render() {
		return (
			<React.Fragment>
				<MainMenu />
				<Switch>
					{menuItems.map(item => <Route exact path={item.to} component={item.component} />)}
					<Route component={NotFound} />
				</Switch>
			</React.Fragment>
		);
	}
}
