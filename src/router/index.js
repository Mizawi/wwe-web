import Vue from 'vue';
import Router from 'vue-router';
import Site from '../pages/site/Index.vue';
//import Login from '../pages/signin/Index.vue';
//import Signup from '../pages/signup/Index.vue';
import Public from '../pages/layout/Public';
import Private from '../pages/layout/Private';

Vue.use(Router);

new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'public',
			component: Public,
			children: [
				{ path: '', component: Site },
			],
		},
		{
			path: '/',
			name: 'private',
			component: Private,
			children: [
			],
		},
	],
});