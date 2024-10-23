<template>
  <div class="light">
    <Nav />
    <HeroSection id="home" />
    <Gallery id="work" />
    <About id="about" />
    <Contact id="contact" />
    <Footer />
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

const setLightMode = () => {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
};

const setDarkMode = () => {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
};

onMounted(() => {
  // Check if user previously selected a theme
  const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light mode
  document.documentElement.setAttribute('data-theme', savedTheme);
});
</script>