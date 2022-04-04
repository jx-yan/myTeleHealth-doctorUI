<script setup>
	import NavbarVue from "../components/Navbar.vue";
	import FooterVue from "../components/Footer.vue";

	import axios from "axios";
	import { ref } from "vue";
	import router from "../router";

	const props = defineProps(["aid", "datetime"]);

	let med_condition = ref(null);
	let recommendations = ref(null);

	const createRec = async () => {
		let json_input = {
			"appt_id": props.aid,
			"medical_condition": med_condition.value,
			"recommendations": recommendations.value,
		};

		await axios
			.post("http://localhost:5101/create_record", json_input)
			.then((res) => {
				if (res.data.code == 201) {
					window.alert("Medical Record created successfully");
					router.push("/docview")
				}
			})
			.catch((err) => {
				console.log(err)
				window.alert("Creation Failed. Please try again!");
			});
	};
</script>

<template>
	<NavbarVue />
	<div
		class="max-w-3xl mx-auto w-full bg-white shadow-md rounded px-8 pt-10 pb-6 mb-10 mt-10"
	>
		<p class="font-extrabold tracking-tight">
			For Appointment on:
			<span class="text-cyan-700">{{ datetime }}</span>
		</p>
		<form @submit.prevent="createRec">
			<p class="p-4">
				<label
					for="med_condition"
					class="block mb-2 font-extrabold tracking-tight text-sm font-medium text-gray-900 dark:text-gray-400"
					>Medical Conditions :</label
				>
				<textarea
					id="med_condition"
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Fill in your patient's medical condition"
					v-model="med_condition"
				></textarea>
			</p>
			<p class="p-4">
				<label
					for="recommendations"
					class="block mb-2 font-extrabold tracking-tight text-sm font-medium text-gray-900 dark:text-gray-400"
					>Recommendations :</label
				>
				<textarea
					id="recommendations"
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Fill in the recommended follow up actions"
					v-model="recommendations"
				></textarea>
			</p>
			<div class="flex mb-4 mt-4 place-content-center">
				<button
					type="submit"
					class="text-dark hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				>
					Create Medical Record
				</button>
			</div>
		</form>
	</div>
	
	<FooterVue />
</template>
