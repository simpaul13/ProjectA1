<template>
  <section class="bg-[#FAF4E6] min-h-screen flex items-center py-16">
    <div class="w-full px-4 md:px-8 lg:px-24">

      <!-- Worker Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
        <div
          v-for="(worker, index) in workers"
          :key="index"
          :class="[
            'relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow',
            (index === 0 || index === workers.length - 1) && 'lg:col-span-2'
          ]"
        >
          <!-- Image Wrapper -->
          <div class="h-[300px] sm:h-[400px] lg:h-[500px] w-full relative">
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
              bottom-4 sm:bottom-6 group-hover:bottom-1/3 group-hover:-translate-y-1/2 px-4 text-center"
            >
              <h3 class="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">{{ worker.title }}</h3>
              <p class="text-xs sm:text-sm tracking-wider">GET TO KNOW ME</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const workers = [
  { title: 'Casual', image: 'https://picsum.photos/700/900?random=1' },
  { title: 'Fashion', image: 'https://picsum.photos/700/900?random=2' },
  { title: 'Editorial', image: 'https://picsum.photos/700/900?random=3' },
  { title: 'Commercial', image: 'https://picsum.photos/700/900?random=4' },
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
