<script setup>
	import NavbarVue from "../components/Navbar.vue";
	import FooterVue from "../components/Footer.vue";
	import UpcomingTabVue from "../components/UpcomingTab.vue";
	import CompletedTabVue from "../components/CompletedTab.vue";

	import { useStore } from "vuex";
	import { ref, computed } from "vue";
	import axios from "axios";

	const store = useStore();
	const authIsReady = computed(() => store.state.authIsReady);

	const docName = computed(() => store.state.user.displayName);
	const id = computed(() => store.state.id);

	let upcoming_app = ref(null);
	let completed_app = ref(null);

	axios
		.get(
			"http://localhost:5004/appointment/doctorStatus/" + id.value + "/Upcoming"
		)
		.then((response) => {
			upcoming_app.value = response.data.data.appointments.reverse();
		});

	axios
		.get(
			"http://localhost:5004/appointment/doctorStatus/" +
				id.value +
				"/Completed"
		)
		.then((response) => {
			completed_app.value = response.data.data.appointments.reverse();
		});
</script>

<template>
	<NavbarVue />
	<h1
		class="text-xl sm:text-4xl text-center font-extrabold tracking-tight p-12"
	>
		Welcome, {{ docName }}
	</h1>
	<div class="container max-w-3xl mb-12 mx-auto" id="#appt">
		<h3 class="text-xl sm:text-2xl font-extrabold tracking-tight p-4 mt-5">
			Upcoming Appointments
		</h3>
		<div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-6 space-y-4">
			<p class="font-extrabold tracking-tight text-center" v-if="upcoming_app == null">No Upcoming Appointments</p>
			<UpcomingTabVue
				v-for="upcomingAppt in upcoming_app"
				:upcomingAppt="upcomingAppt"
			/>
		</div>
	</div>
	<div class="container max-w-3xl mb-12 mx-auto" id="#appt">
		<h3 class="text-xl sm:text-2xl font-extrabold tracking-tight p-4 mt-5">
			Completed Appointments
		</h3>
		<div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-6 space-y-4">
			<p class="font-extrabold tracking-tight text-center" v-if="completed_app == null">No Completed Appointments</p>
			<CompletedTabVue
				v-for="completedAppt in completed_app"
				:completed-appt="completedAppt"
			/>
		</div>
	</div>
	<FooterVue />
</template>
