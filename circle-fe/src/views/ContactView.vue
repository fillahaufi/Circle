<template>
  <div class="py-10">
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold">Contact</h1>
      <p class="text-lg">Contact us for any inquiries or feedback.</p>
      <div class="mt-8 flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-lg">Name</label>
          <input type="text" id="name" class="input" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="text-lg">Email</label>
          <input type="email" id="email" class="input" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="message" class="text-lg">Message</label>
          <textarea id="message" class="input"></textarea>
        </div>
        <Button label="Submit" class="btn btn-primary w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style scoped></style>
