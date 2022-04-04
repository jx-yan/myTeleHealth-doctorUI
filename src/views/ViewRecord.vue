<script setup>
	import axios from "axios";
	import { ref } from "vue";
	import FooterVue from "../components/Footer.vue";

	const props = defineProps(["aid"]);
	let record = ref(null);

	axios
		.get("http://localhost:5003/record/appt_id=" + props.aid)
		.then((response) => {
			record.value = response.data.data[0];
		});
</script>

<template>
	<nav
		class="bg-white border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-800"
	>
		<div class="container flex flex-wrap justify-between items-center mx-auto">
			<router-link to="/docview">
				<span
					class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
					>Back to MyTeleHealth</span
				>
			</router-link>
		</div>
	</nav>

	<div class="max-w-3xl mx-auto w-full bg-white shadow-md rounded px-8 pt-10 pb-6 mb-14 mt-14">
		<p class="font-extrabold tracking-tight">
			For Appointment on:
			<span class="text-cyan-700">{{ record.datetime }}</span>
		</p>
		<p class="p-4">
			<span class="font-extrabold tracking-tight"> Medical Conditions : </span
			><br />
			<span class="font-medium pl-3">{{ record.medical_condition }}</span>
		</p>
		<p class="p-4">
			<span class="font-extrabold tracking-tight"> Recommendations : </span
			><br />
			<span class="font-medium pl-3">{{ record.recommendations }}</span>
		</p>
	</div>
	<FooterVue/>
</template>