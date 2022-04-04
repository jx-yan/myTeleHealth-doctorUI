import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "DocLogin",
		component: () => import("../views/DocLogin.vue"),
	},
	{
		path: "/docview",
		name: "DocView",
		component: () => import("../views/DocView.vue"),
	},
	{
		path: "/viewrecord",
		name: "ViewRecord",
		component: () => import("../views/ViewRecord.vue"),
		props: true
	},
	{
		path: "/createrecord",
		name: "CreateRecord",
		component: () => import("../views/CreateRecord.vue"),
		props: true
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;