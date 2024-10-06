<template>
  <div class="min-h-screen bg-primary-100">
    <NavBar />
    <div class="container mx-auto">
      <RouterView />
    </div>
    <FloatingCart />
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import { setScrollbarWidth } from './utils/container-breaker'
import FooterView from './components/FooterView.vue'
import FloatingCart from './components/FloatingCart.vue'

onMounted(() => {
  setScrollbarWidth()
})
// setScrollbarWidth()
</script>

<style scoped></style>
