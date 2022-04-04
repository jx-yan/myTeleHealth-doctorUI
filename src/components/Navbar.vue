<script setup>
	import { useStore } from 'vuex';
	import { computed } from 'vue';
	import { useRoute } from 'vue-router';
	import router from "../router/index"

	const store = useStore();

	const pLogOut = () => {
		store.dispatch('logout')
		window.alert('Log Out Successful')
		router.push('/')
	}
	
</script>

<template>
	<nav
		class="bg-white border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-800"
	>
		<div class="container flex flex-wrap justify-between items-center mx-auto">
			<router-link to="/docview">
				<span
					class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
					>MyTeleHealth</span
				>
			</router-link>
			<div class="flex md:order-2">
				<button
					type="button"
					class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ml-5"
					@click="pLogOut"
				>
					Log Out
				</button>
			</div>
		</div>
	</nav>
</template>