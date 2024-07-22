<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
	<div class="bg-stone-50">
		<main class="text-center max-w-screen-2xl m-auto py-16">
			<h1 class="text-5xl">PRODUCTS</h1>
			<div
				id="card-grid"
				class="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</main>
	</div>
</template>
