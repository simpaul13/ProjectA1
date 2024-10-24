<template>
  <nav :class="navClasses">
    <!-- Gradient Overlay -->
    <div
      v-if="!isScrolled"
      class="absolute inset-0 h-16 bg-gradient-to-b from-gray-800 to-transparent pointer-events-none"
    ></div>

    <div class="container mx-auto px-4 py-4 relative z-10">
      <div class="flex items-center justify-between">
        <!-- Brand Logo -->
        <div :class="['font-bold', textClasses, brandTextSize]">
          Brand
        </div>

        <!-- Hamburger Menu (Mobile) -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            :class="[textClasses, 'focus:outline-none']"
            aria-label="Toggle navigation menu"
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden md:flex flex-1 justify-center space-x-8">
          <a
            href="#home"
            :class="[textClasses, linkHoverClasses, navLinkTextSize]"
            exact
          >
            Home
          </a>
          <a
            href="#about"
            :class="[textClasses, linkHoverClasses, navLinkTextSize]"
            @click="closeMenu"
          >
            About
          </a>
          <a
            href="#work"
            :class="[textClasses, linkHoverClasses, navLinkTextSize]"
            @click="closeMenu"
          >
            Work
          </a>
          <a
            href="#contact"
            :class="[textClasses, linkHoverClasses, navLinkTextSize]"
          >
            Contact
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden fixed inset-0 bg-white bg-opacity-95 z-40"
      >
        <div class="container mx-auto px-4 py-4">
          <a

            href="#home"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
            @click="toggleMenu"
            :class="mobileNavLinkTextSize"
          >
            Home
        </a>
          <a
            href="#about"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
            @click="toggleMenu"
            :class="mobileNavLinkTextSize"
          >
            About
          </a>
          <a
            href="#work"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
            @click="toggleMenu"
            :class="mobileNavLinkTextSize"
          >
            Work
          </a>
          <a
            href="#contact"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
            @click="toggleMenu"
            :class="mobileNavLinkTextSize"
          >
            Contact
          </a>
        </div>
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
    navClasses() {
      const baseClasses =
        'fixed w-full z-50 transition-all duration-300 ease-in-out';
      const scrolledBackground = 'bg-white shadow-md';
      return [
        baseClasses,
        this.isScrolled ? scrolledBackground : 'bg-transparent',
      ];
    },
    textClasses() {
      return this.isScrolled ? 'text-gray-800' : 'text-white';
    },
    linkHoverClasses() {
      return 'hover:text-blue-300 transition duration-200';
    },
    iconStrokeColor() {
      return this.isScrolled ? 'currentColor' : '#ffffff';
    },
    brandTextSize() {
      return 'text-2xl md:text-xl';
    },
    navLinkTextSize() {
      return 'text-lg';
    },
    mobileNavLinkTextSize() {
      return 'text-xl';
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
};
</script>

<style scoped>
/* Gradient Overlay Fix */
nav .gradient-overlay {
  height: 4rem;
}

/* Mobile Menu Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
