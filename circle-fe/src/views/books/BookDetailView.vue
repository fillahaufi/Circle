<template>
  <div class="relative px-3 py-10">
    <!-- <div class="absolute -left-0 top-10">
      <Button icon="pi pi-arrow-left" severity="secondary" aria-label="Bookmark" />
    </div> -->
    <Button
      icon="pi pi-arrow-left"
      severity="secondary"
      aria-label="Bookmark"
      class="mb-10"
      @click="$router.push({ name: 'books' })"
    />
    <div v-if="book">
      <div class="flex flex-col-reverse justify-between gap-3 md:flex-row">
        <div class="mt-10 w-full md:mt-0 md:w-2/3">
          <h1 class="text-4xl font-bold">{{ book.title }}</h1>
          <p class="text-lg">{{ book.author }}</p>
          <div class="mt-28">
            <table>
              <tbody>
                <tr>
                  <td>Title</td>
                  <td class="font-bold">: {{ book.title }}</td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td class="font-bold">: {{ book.author }}</td>
                </tr>
                <tr>
                  <td>ISBN</td>
                  <td class="font-bold">: {{ book.isbn }}</td>
                </tr>
                <tr>
                  <td>Stock</td>
                  <td class="font-bold">: {{ book.availableStock }} item(s) left</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td class="font-bold">: $ {{ book.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex w-full flex-col items-center gap-5 md:w-1/3">
          <img src="https://placehold.co/1000x1200" alt="" />
          <Button
            label="Purchase"
            icon="pi pi-shopping-cart"
            class="w-full"
            @click="submitPurchase"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col-reverse md:flex-row">
        <div class="w-full md:w-2/3">
          <Skeleton height="3rem" width="25rem" class="mb-2"></Skeleton>
          <Skeleton height="1.5rem" width="10rem" class="mb-2"></Skeleton>
          <div class="mt-28">
            <Skeleton height="1rem" width="15rem" class="mb-2"></Skeleton>
            <Skeleton height="1rem" width="13rem" class="mb-2"></Skeleton>
            <Skeleton height="1rem" width="14rem" class="mb-2"></Skeleton>
            <Skeleton height="1rem" width="12rem" class="mb-2"></Skeleton>
            <Skeleton height="1rem" width="10rem" class="mb-2"></Skeleton>
          </div>
        </div>
        <div class="flex w-full flex-col gap-5 md:w-1/3">
          <Skeleton height="35rem" width="100%"></Skeleton>
          <Skeleton height="3rem" width="100%"></Skeleton>
        </div>
      </div>
    </div>
    <img
      :src="read_book"
      alt=""
      class="relative bottom-0 hidden md:static lg:absolute xl:block xl:w-96"
    />
  </div>
</template>

<script setup lang="ts">
import { getBookById, purchaseBook } from '@/repository/books'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Button from 'primevue/button'
import Skeleton from 'primevue/skeleton'
import read_book from '@/assets/images/read_book.svg'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const route = useRoute()
const id = route.params.id as string

let book = ref<Book>()

const getData = async () => {
  const res = await getBookById(id)
  book.value = res.book
}

const submitPurchase = async () => {
  try {
    const res = await purchaseBook(id)
    console.log(res)
    toast.add({ severity: 'success', summary: 'Success', detail: res.message, life: 3000 })
  } catch (error: any) {
    toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 })
  } finally {
    getData()
  }
}

onMounted(() => {
  getData()
})
</script>

<style scoped></style>
