<script setup>
defineProps({
	src: {
		type: String,
		default: "",
	},
	alt: {
		type: String,
		default: "Image",
	},
	width: {
		type: [String, Number],
		default: null,
	},
	height: {
		type: [String, Number],
		default: null,
	},
});
</script>

<template>
	<img
		class="shadow-md"
		:src="src"
		:alt="alt"
		:width="width"
		:height="height" />
</template>
