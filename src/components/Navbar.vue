<script setup>
import logo from "@/assets/img/logo.png";
</script>

<template>
	<div class="bg-stone-100">
		<nav
			class="flex items-center justify-between p-8 max-w-screen-xl mx-auto">
			<img :src="logo" alt="logo" />
			<ul class="flex gap-16 text-2xl">
				<li>Home</li>
				<li>About</li>
				<li>Contact Us</li>
			</ul>
		</nav>
	</div>
</template>
