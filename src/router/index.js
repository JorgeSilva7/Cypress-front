import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/404.vue";
import { getToken } from "@/services/helpers";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
		meta: { requiresAuth: true },
	},
	{
		path: "/login",
		name: "login",
		component: () =>
			import(/* webpackChunkName: "login" */ "../views/Login.vue"),
		meta: { requiresAuth: false },
	},
	{
		path: "/register",
		name: "register",
		component: () =>
			import(/* webpackChunkName: "login" */ "../views/Register.vue"),
		meta: { requiresAuth: false },
	},
	{
		path: "/verify",
		name: "verify",
		component: () =>
			import(/* webpackChunkName: "verify" */ "../views/Verify.vue"),
		meta: { requiresAuth: true },
	},
	{ path: "/:pathMatch(.*)*", component: NotFoundView },
];

const router = createRouter({
	history: createWebHistory(""),
	routes,
});

router.beforeEach((to, from) => {
	if (to.meta.requiresAuth && !getToken()) {
		return {
			name: "login",
			query: { login_error: "1" },
		};
	}

	if (to.name === "login" && getToken()) {
		return {
			name: "home",
		};
	}

	if (to.name === "verify" && localStorage.getItem("verified")) {
		return {
			name: "home",
		};
	}
});

export default router;
