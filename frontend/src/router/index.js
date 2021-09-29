import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Sondage from "../views/Sondage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: "Accueil",
		},
	},
	{
		path: "/sondage_jeux",
		name: "Sondage",
		component: Sondage,
		meta: {
			title: "Sondage Soirée Jeux",
		},
	},

	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
