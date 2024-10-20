<template>
  <section class="relative h-screen overflow-hidden">
    <!-- Background Images -->
    <div class="absolute inset-0">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Background Image"
        class="object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out"
        :class="{
          'opacity-100 z-10': index === currentImage,
          'opacity-0 z-0': index !== currentImage,
        }"
      />
    </div>

    <!-- Content Area -->
    <div class="relative z-20 flex items-center justify-center h-full">
      <!-- Centered Text -->
      <div class="text-center text-white px-4">
        <h1 class="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p class="text-xl mb-6">
          Discover amazing content and explore new horizons with us.
        </p>
        <NuxtLink to="/explore">
          <button class="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 transition duration-300">
            Explore Now
          </button>
        </NuxtLink>
      </div>

      <!-- Indicators at the Bottom -->
      <div class="absolute bottom-8 w-full flex justify-center">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="[
            'w-3 h-3 rounded-full mx-1 cursor-pointer',
            { 'bg-blue-500': index === currentImage, 'bg-gray-300': index !== currentImage },
          ]"
          @click="setCurrentImage(index)"
        ></span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      currentImage: 0,
      images: this.generateRandomImages(5), // Generate 5 random images
      intervalId: null,
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  methods: {
    generateRandomImages(count) {
      const images = [];
      for (let i = 0; i < count; i++) {
        images.push(
          `https://picsum.photos/1600/900?random=${Math.floor(Math.random() * 1000)}`
        );
      }
      return images;
    },
    startCarousel() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(() => {
        this.nextImage();
      }, 10000);
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    setCurrentImage(index) {
      this.currentImage = index;
      this.startCarousel();
    },
  },
};
</script>




<style scoped>
/* Additional styles can be added here if needed */
</style>
