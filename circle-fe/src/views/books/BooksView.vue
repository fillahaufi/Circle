<template>
  <div class="min-h-screen py-10">
    <div class="flex flex-col justify-center">
      <h4 class="text-center text-2xl font-bold">Search</h4>
      <div class="mt-3 w-full self-center lg:w-1/3">
        <InputGroup>
          <InputText placeholder="Keyword" />
          <Button icon="pi pi-search" />
        </InputGroup>
      </div>
    </div>
    <!-- <h4 class="text-2xl font-bold">Bestsellers</h4>
    <div class=""></div> -->
    <div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-8 xl:grid-cols-5">
      <BookItem v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import BookItem from '@/components/ui/BookItem.vue'

import { onMounted, ref } from 'vue'
import { getAllBooks } from '@/repository/books'

const books = ref<Book[]>([])

onMounted(() => {
  console.log('Books fetched')
  getData()
})

const getData = async () => {
  const res = await getAllBooks()
  books.value = res.books
}
</script>

<style scoped></style>
