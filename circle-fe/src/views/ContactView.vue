<template>
  <div class="px-3 py-28">
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold">Contact</h1>
      <p class="text-lg">Contact us for any inquiries or feedback.</p>
      <div class="mt-5 flex flex-row gap-3">
        <Button icon="pi pi-whatsapp" rounded aria-label="Filter" />
        <Button icon="pi pi-instagram" rounded aria-label="Filter" />
        <Button icon="pi pi-twitter" rounded aria-label="Filter" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <form action="" method="post">
          <div class="mt-8 flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-lg">Name</label>
              <InputText type="text" v-model="form.name" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email" class="text-lg">Email</label>
              <InputText type="text" v-model="form.email" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="message" class="text-lg">Message</label>
              <Textarea v-model="form.message" rows="5" cols="30" />
            </div>
            <Button label="Submit" class="btn btn-primary mt-10 w-full" />
          </div>
        </form>
        <div class="hidden md:block">
          <img :src="contact_us" alt="contact" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import contact_us from '@/assets/images/contact_us.svg'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'

import { ref } from 'vue'

let form = ref({
  name: '',
  email: '',
  message: ''
})
</script>

<style scoped></style>
