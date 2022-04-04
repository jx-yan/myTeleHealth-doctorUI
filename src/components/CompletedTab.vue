<script setup>
	import router from "../router";
	const props = defineProps(["completedAppt"]);
	const showRecord = () => {
		let appt_id = props.completedAppt.appt_id;
		try {
			router.push({
				name: "ViewRecord",
				path: "/viewrecord",
				params: {
					aid: appt_id,
				},
			});
		} catch(err) {
			window.alert(err)
		}
	};
</script>

<template>
	<div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-6">
		<p class="font-extrabold tracking-tight p-4">
			<span> Appointment Date Time : {{ completedAppt.datetime }}</span>
			<span class="text-blue-600 pl-5"></span>
		</p>
		<p class="font-extrabold tracking-tight p-4 flex grow">
			<span class=""> Patient Name : </span>
			<span class="text-indigo-700 pl-3">
				{{ completedAppt.patient_name }}</span
			>
		</p>
		<p class="font-extrabold tracking-tight pl-4 pr-4 pt-3 flex grow">
			<span class="ml-auto">
				<button
					class="text-dark hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-xs px-5 py-2 text-center"
					@click="showRecord"
				>
					View Medical Record
				</button>
			</span>
		</p>
	</div>
</template>
