<script setup>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
</script>

<template>
	<div class="bg-stone-50 py-16 flex items-center">
		<main class="text-center max-w-screen-2xl m-auto">
			<h1 class="text-5xl">
				Your home deserves a
				<span class="text-custom-red">heavenly scent</span>.
			</h1>
			<div
				id="card-grid"
				class="grid grid-cols-3 gap-32 place-items-center py-20">
				<Card />
				<Card />
				<Card />
			</div>
			<Button text="See all products" icon="fas fa-arrow-right text-sm" />
		</main>
	</div>
</template>
