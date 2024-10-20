<template>
  <nav :class="navClasses">
    <!-- Gradient Overlay -->
    <div v-if="!isScrolled" class="absolute inset-0 h-15 bg-gradient-to-b from-gray-800 to-transparent"></div>

    <div class="container mx-auto px-4 py-4 relative z-10">
      <div class="flex items-center justify-between">
        <!-- Brand Logo -->
        <div :class="['text-xl font-bold', textClasses]">
          Brand
        </div>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden md:flex flex-1 justify-center space-x-8">
          <NuxtLink
            to="/"
            :class="[textClasses, linkHoverClasses]"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            :class="[textClasses, linkHoverClasses]"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/services"
            :class="[textClasses, linkHoverClasses]"
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="/contact"
            :class="[textClasses, linkHoverClasses]"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Hamburger Menu (Mobile) -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            :class="[textClasses, 'focus:outline-none']"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              :stroke="iconStrokeColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white bg-opacity-90 shadow-md transition duration-300 ease-in-out"
        @click="toggleMenu"
      >
        <NuxtLink
          to="/"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Contact
        </NuxtLink>
      </div>
    </transition>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
    };
  },
  computed: {
    // Classes applied to the <nav> element
    navClasses() {
      const baseClasses = 'fixed w-full z-50 transition-all duration-300 ease-in-out';
      const scrolledBackground = 'bg-white shadow-md';

      return [
        baseClasses,
        this.isScrolled ? scrolledBackground : 'bg-transparent',
      ];
    },
    // Text color classes based on scroll position
    textClasses() {
      return this.isScrolled ? 'text-gray-800' : 'text-white';
    },
    // Hover effect classes for links
    linkHoverClasses() {
      return 'hover:text-blue-300 transition duration-200';
    },
    // Icon stroke color based on scroll position
    iconStrokeColor() {
      return this.isScrolled ? 'currentColor' : '#ffffff';
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // Toggle the mobile menu open/closed
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    // Update the scroll state
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
};
</script>




<style scoped>
/* You can add additional styles here if needed */
</style>
