<template>
  <div class="min-h-screen bg-primary-100">
    <NavBar />
    <div class="container mx-auto">
      <RouterView />
    </div>
    <Toast />
    <!-- <FloatingCart /> -->
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast'
import { onMounted } from 'vue'
import FooterView from './components/FooterView.vue'
import NavBar from './components/NavBar.vue'
import { setScrollbarWidth } from './utils/container-breaker'

onMounted(() => {
  setScrollbarWidth()
})
// setScrollbarWidth()
</script>

<style scoped></style>
