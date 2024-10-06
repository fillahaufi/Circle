<template>
  <nav class="sticky top-0 z-50 py-3 transition-colors duration-500 ease-in-out">
    <div class="container mx-auto flex w-full flex-row items-center justify-between">
      <router-link to="/" class="text-2xl font-bold">Circle</router-link>
      <div class="hidden md:flex md:flex-row">
        <router-link to="/" class="mx-3">Home</router-link>
        <router-link to="/books" class="mx-3">Books</router-link>
        <router-link to="/contact" class="mx-3">Contact</router-link>
      </div>
      <div class="hidden gap-2 md:flex md:flex-row">
        <router-link to="/login">
          <Button label="Login"></Button>
        </router-link>
        <router-link to="/register">
          <Button label="Register" class="bg-primary-100" outlined=""></Button>
        </router-link>
      </div>
      <div class="flex md:hidden">
        <Button
          icon="pi pi-bars"
          severity="secondary"
          aria-label="Bookmark"
          @click="visibleRight = true"
        />
      </div>
    </div>
    <Drawer v-model:visible="visibleRight" header="Circle" position="right">
      <div class="flex h-full flex-col items-center justify-center gap-3">
        <router-link to="/" class="mx-3">Home</router-link>
        <router-link to="/books" class="mx-3">Books</router-link>
        <router-link to="/contact" class="mx-3">Contact</router-link>
        <div class="mt-auto flex flex-row gap-3">
          <router-link to="/login" class="w-1/2">
            <Button label="Login" class="w-full"></Button>
          </router-link>
          <router-link to="/register" class="w-1/2">
            <Button label="Register" class="w-full bg-primary-100" outlined=""></Button>
          </router-link>
        </div>
      </div>
    </Drawer>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'

let visibleRight = ref(false)

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
