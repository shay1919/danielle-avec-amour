<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
import Footer from "@/components/Footer.vue";
</script>

<template>
	<div class="min-h-svh flex flex-col">
		<Navbar />
		<RouterView class="flex-grow" />
		<Footer />
	</div>
</template>
