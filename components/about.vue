<template>
  <section class="h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center">
      <!-- Image Section -->
      <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="https://picsum.photos/500/600?random=5"
          alt="Portrait of Roberto Morales"
          class="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
          loading="lazy"
        />
      </div>

      <!-- Text Content -->
      <article class="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
        <h1 class="text-4xl mb-4"><p>Hi, I'm</p> <span class="font-bold">Roberto</span> Morales</h1>
        <p class="text-gray-600 mb-4">
          Photography | Styling Design | Creative Direction
        </p>
        <div class="text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
          <p class="mb-4">
            I’ve honed the art of capturing life's fleeting moments, blending vision with skill.
          </p>
          <p>
            My journey began in local studios, and today, I bring my experience to offer creative solutions for brands and individuals.
          </p>
        </div>
        <!-- Call-to-Action Button -->
        <NuxtLink
          to="/portfolio"
          class="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          View Portfolio
        </NuxtLink>
      </article>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
