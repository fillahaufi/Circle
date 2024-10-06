<template>
  <div id="about" class="mx-break-out relative bg-primary-200">
    <div class="container mx-auto py-40">
      <div class="mb-40">
        <h2 class="text-center text-4xl font-bold">About Us</h2>
        <p class="mt-5 text-center">
          Circle is a bookstore that provides a wide range of books from various genres. We also
          provide a platform for authors to publish their books and for readers to read them.
        </p>
      </div>
      <div>
        <h4 class="mb-8 text-center text-3xl font-bold">
          Our Community is Growing Fast 🚀 with more than
        </h4>
        <div class="flex flex-row items-center justify-center gap-5">
          <div v-for="(s, i) in stats" :key="i" class="flex flex-row gap-5">
            <div class="flex flex-col items-center gap-2">
              <h2 class="text-4xl font-bold">{{ s.count }} +</h2>
              <p>{{ s.title }}</p>
            </div>
            <div v-if="i !== stats.length - 1" class="h-20 border-r-2 border-primary-100"></div>
          </div>
        </div>
        <p class="mt-5 text-center">
          We are now targeting worldwide and we are looking for more authors and readers to join us.
        </p>
      </div>
      <div>
        <h2 class="mt-40 text-center text-4xl font-bold">What our users think about us</h2>
        <div class="mt-10 flex flex-row items-center justify-center gap-5">
          <div
            v-for="(r, i) in reviews"
            :key="i"
            class="relative flex w-1/2 flex-col gap-5 rounded-lg bg-primary-950 p-5 text-primary-100"
          >
            <p class="absolute -left-4 -top-6 text-8xl font-bold text-primary-500">"</p>
            <p>{{ r.review }}</p>
            <p class="text-right font-bold">- {{ r.name }}</p>
          </div>
        </div>
        <p class="clear-start mt-5 text-center italic">...and many more</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  {
    title: 'Books',
    count: 1000
  },
  {
    title: 'Authors',
    count: 500
  },
  {
    title: 'Genres',
    count: 50
  },
  {
    title: 'Readers',
    count: 2000
  }
]

const reviews = [
  {
    name: 'John Doe',
    review:
      'Circle is the best bookstore I have ever visited. They have a wide range of books from various genres. I would recommend Circle to all book lovers.'
  },
  {
    name: 'Jane Doe',
    review:
      'I am an author and I have published my book on Circle. The process was very smooth and I got a lot of readers. I would recommend Circle to all authors.'
  },
  {
    name: 'Alice Doe',
    review:
      'I am a reader and I have read many books on Circle. The platform is very user-friendly and I can easily find the books I want to read. I would recommend Circle to all readers.'
  }
]
</script>

<style scoped></style>
