<script setup>
import { RouterLink } from "vue-router";
import logo from "@/assets/img/logo.png";
import Button from "@/components/Button.vue";
</script>

<template>
	<div class="bg-stone-100">
		<nav
			class="flex items-center justify-between p-8 max-w-screen-2xl m-auto">
			<RouterLink to="/"><img :src="logo" alt="logo" /></RouterLink>
			<ul class="flex gap-16 text-2xl">
				<RouterLink to="/"
					><li><Button text="Home"></Button></li
				></RouterLink>
				<RouterLink to="/about"
					><li><Button text="About"></Button></li
				></RouterLink>
				<RouterLink to="/products"
					><li><Button text="Products"></Button></li
				></RouterLink>
				<RouterLink to="/contactus"
					><li><Button text="Contact Us"></Button></li
				></RouterLink>
			</ul>
		</nav>
	</div>
</template>
