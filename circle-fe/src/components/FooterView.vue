<template>
  <footer class="bg-primary-950">
    <div class="container mx-auto">
      <div class="flex flex-row items-center justify-between py-5">
        <div class="flex w-2/3 flex-col gap-3">
          <h1 class="text-3xl font-bold text-white">Circle</h1>
          <p class="text-white">
            Circle is a bookstore that offers a wide range of books from different genres. We aim to
            provide a platform for book lovers to find their favorite books and share their thoughts
            with other readers.
          </p>
        </div>
        <div class="flex flex-row gap-3">
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
