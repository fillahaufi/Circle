<template>
  <nav class="sticky top-0 z-50 py-3 transition-colors duration-500 ease-in-out">
    <div class="container mx-auto flex w-full flex-row items-center justify-between">
      <router-link to="/" class="text-2xl font-bold">Circle</router-link>
      <div class="flex flex-row">
        <router-link to="/" class="mx-3">Home</router-link>
        <router-link to="/books" class="mx-3">Books</router-link>
        <router-link to="/contact" class="mx-3">Contact</router-link>
      </div>
      <div class="flex flex-row gap-2">
        <router-link to="/login">
          <Button label="Login"></Button>
        </router-link>
        <router-link to="/register">
          <Button label="Register" class="bg-primary-100" outlined=""></Button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Button from 'primevue/button'

// make the background color of the navbar transparent and change it to bg-primary-200 when the user scrolls down
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav')
  if (window.scrollY > 0) {
    navbar?.classList.add('bg-primary-200')
  } else {
    navbar?.classList.remove('bg-primary-200')
  }
})
</script>

<style scoped></style>
