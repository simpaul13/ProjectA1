<template>
  <section class="bg-[#FAF4E6] min-h-screen flex items-center py-16">
    <div class="max-w-screen-xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold mb-4 text-gray-950">My Workers</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Meet the talented team of professionals who specialize in photography, styling, 
          and creative direction to ensure every detail is captured perfectly.
        </p>
      </div>

      <!-- Worker Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(worker, index) in workers"
          :key="index"
          class="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
        >
          <!-- Image Wrapper -->
          <div class="h-[500px] w-full relative">
            <img
              :src="worker.image"
              :alt="`Image of ${worker.title}`"
              class="w-full h-full object-cover object-center"
              loading="lazy"
            />

            <!-- Dark Overlay -->
            <div
              class="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-70"
            ></div>

            <!-- Text Section (Default at Bottom, Moves to Center on Hover) -->
            <div
              class="absolute inset-x-0 flex flex-col items-center text-white transition-all duration-300 ease-in-out 
              bottom-6 group-hover:bottom-1/3 group-hover:-translate-y-1/2"
            >
              <h3 class="text-2xl font-semibold mb-2">{{ worker.title }}</h3>
              <p class="text-sm tracking-wider">GET TO KNOW ME</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const workers = [
  { title: 'Casual', image: 'https://picsum.photos/500/700?random=1' },
  { title: 'Fashion', image: 'https://picsum.photos/500/700?random=2' },
  { title: 'Editorial', image: 'https://picsum.photos/500/700?random=3' },
  { title: 'Commercial', image: 'https://picsum.photos/500/700?random=4' },
];
</script>

<style scoped>
/* Optional: Scrollbar customization */
.grid::-webkit-scrollbar {
  height: 8px;
}
.grid::-webkit-scrollbar-thumb {
  background-color: #cccccc;
  border-radius: 4px;
}
.grid::-webkit-scrollbar-thumb:hover {
  background-color: #888888;
}
</style>
