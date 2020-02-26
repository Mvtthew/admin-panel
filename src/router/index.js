import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	// Auth
	{
		path: '/auth',
		name: 'Auth',
		component: () => import('../views/auth/Auth.vue'),
		meta: {
			title: 'Auth'
		}
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('../views/Dashboard.vue'),
		meta: {
			title: 'Dashboard'
		}
	},
	{
		path: '/servers',
		name: 'Servers',
		component: () => import('../views/Servers.vue'),
		meta: {
			title: 'Servers'
		}
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/About.vue'),
		meta: {
			title: 'About'
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
