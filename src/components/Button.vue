<script setup>
defineProps({
	text: {
		type: String,
		default: "",
	},
	icon: {
		type: String,
		default: "",
	},
});
</script>

<template>
	<button
		class="border rounded-md bg-stone-200 p-5 shadow-md hover:shadow-lg hover:bg-custom-red hover:text-white transition-all duration-100">
		{{ text }} <i :class="icon" />
	</button>
</template>
