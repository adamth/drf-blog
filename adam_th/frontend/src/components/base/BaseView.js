import React, { Component } from 'react';
import shortid from 'shortid';
import { Route, Switch } from 'react-router-dom';

import BlogView from '../blog/BlogView';
import AccountView from '../account/AccountView';
import HomeView from '../home/HomeView';
import NotFound from '../NotFound';

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

const uuid = shortid.generate;

export default class BaseView extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={BlogView} />
				<Route path="/blog" component={BlogView} />
				<Route path="/account" component={AccountView} />
				<Route component={NotFound} />
			</Switch>
		);
	}
}
