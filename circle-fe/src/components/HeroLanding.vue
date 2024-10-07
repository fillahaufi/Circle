<template>
  <div class="relative flex h-[calc(100vh_-_64px)] flex-row items-center justify-between px-3">
    <div class="flex flex-col gap-3">
      <h1 class="text-5xl font-bold">Welcome to Circle</h1>
      <p>
        <!-- create a quote about bookstore -->
        "A room without books is like a body without a soul."
      </p>
      <div class="mt-5 flex flex-row gap-3">
        <Button label="Get Started" icon="pi pi-book" icon-pos="right"></Button>
        <Button label="FAQ" outlined="" icon="pi pi-question" icon-pos="right"></Button>
      </div>
    </div>
    <img :src="hero_books" alt="book" class="hidden lg:block" />
    <div class="custom-shape-divider-bottom-1728195527 mx-break-out">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import hero_books from '@/assets/images/hero_books.svg'
</script>

<style scoped>
.custom-shape-divider-bottom-1728195527 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: -webkit-fill-available;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1728195527 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 42px;
}

.custom-shape-divider-bottom-1728195527 .shape-fill {
  fill: #f5e6d3;
}
</style>
