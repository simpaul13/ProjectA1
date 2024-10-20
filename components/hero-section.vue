<template>
  <section class="relative h-screen overflow-hidden z-0">
    <!-- Background Images -->
    <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out">
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

    <!-- Full-Screen Gradient Overlay -->
    <div class="absolute inset-0 gradient-bg"></div>

    <!-- Content Area -->
    <div class="relative z-20 flex items-center justify-center md:justify-start min-h-screen text-left">
      <div class="p-4 md:p-6 text-white max-w-lg mx-4 md:ml-16">
        <h2 class="text-3xl md:text-5xl font-medium mb-4 md:mb-8">Transform Your Business</h2>
        <p class="text-base md:text-lg mb-6 md:mb-8">
          Welcome to my captivating gallery, where every click tells a unique story. Immerse yourself in a visual journey where every image speaks volumes.
        </p>
        <!-- Adjusted Button Layout -->
        <div class="flex flex-col md:flex-row md:items-center">
          <NuxtLink to="/contact">
            <button class="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 transition duration-300 mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
              Get Started
            </button>
          </NuxtLink>
          <NuxtLink to="/learn-more">
            <button class="px-6 py-3 border-2 border-blue-500 rounded hover:bg-blue-600 hover:text-white transition duration-300 w-full md:w-auto">
              Learn More
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Carousel Navigation Indicators -->
  <div class="absolute bottom-4 md:bottom-8 w-full flex justify-center z-20">
    <button
      v-for="(image, index) in images"
      :key="index"
      @click="setCurrentImage(index)"
      @keyup.enter="setCurrentImage(index)"
      :class="indicatorClasses(index)"
      :aria-label="'Go to slide ' + (index + 1)"
      tabindex="0"
    ></button>
  </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      currentImage: 0,
      images: this.generateRandomImages(5),
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
    indicatorClasses(index) {
      return [
        'w-2 h-2 md:w-3 md:h-3 rounded-full mx-1 cursor-pointer focus:outline-none',
        index === this.currentImage ? 'bg-blue-500' : 'bg-gray-300',
      ];
    },
    generateRandomImages(count) {
      const images = [];
      for (let i = 0; i < count; i++) {
        images.push(
          `https://picsum.photos/1600/900?random=${Math.floor(
            Math.random() * 1000
          )}`
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
      }, 5000);
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
.gradient-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent);
  z-index: 15; /* Ensure it's above the images but below the content */
}

button:focus {
  outline: 2px solid #4299e1; /* Tailwind's blue-500 */
  outline-offset: 2px;
}
</style>
