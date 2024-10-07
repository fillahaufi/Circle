<template>
  <footer class="bg-primary-950 px-3">
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-between py-5 md:flex-row">
        <div class="flex w-full flex-col gap-3 md:w-2/3">
          <h1 class="text-3xl font-bold text-white">Circle</h1>
          <p class="text-white">
            Circle is a bookstore that offers a wide range of books from different genres. We aim to
            provide a platform for book lovers to find their favorite books and share their thoughts
            with other readers.
          </p>
        </div>
        <div class="mt-5 flex flex-row gap-3 md:mt-0">
          <Button
            label="FAQ"
            outlined=""
            class="!bg-primary-100"
            icon="pi pi-question"
            icon-pos="right"
          ></Button>
          <Button label="Contact Us" icon="pi pi-envelope" icon-pos="right"></Button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style scoped></style>
