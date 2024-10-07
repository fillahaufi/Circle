<template>
  <div class="min-h-screen py-10">
    <div class="flex flex-col justify-center px-3">
      <!-- <h4 class="text-center text-2xl font-bold">Search</h4> -->
      <div class="mt-3 w-full self-center lg:w-1/3">
        <InputGroup>
          <InputText placeholder="Keyword" />
          <Button icon="pi pi-search" />
        </InputGroup>
      </div>
    </div>
    <!-- <h4 class="text-2xl font-bold">Bestsellers</h4>
    <div class=""></div> -->
    <div class="mx-break-out mt-10 rounded-lg bg-primary-400 p-5">
      <h4 class="text-center text-4xl font-bold text-primary-50">Bestsellers</h4>
      <Carousel
        :value="bestsellers"
        :numVisible="5"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div
            class="m-2 cursor-pointer rounded border border-surface-200 bg-primary-50 p-4 dark:border-surface-700"
            @click="handleSelect(slotProps.data.id)"
          >
            <div class="mb-4">
              <div class="relative mx-auto">
                <img src="https://placehold.co/1000x800" alt="image" class="w-full rounded" />
                <!-- <Tag :value="slotProps.data.inventoryStatus" class="absolute" style="left:5px; top: 5px"/> -->
              </div>
            </div>
            <div class="font-bold">{{ slotProps.data.title }}</div>
            <p class="mb-4">{{ slotProps.data.author }}</p>
            <div class="flex items-center justify-between">
              <div class="mt-0 text-xl font-semibold">${{ slotProps.data.price }}</div>
              <span>{{ slotProps.data.availableStock }} item(s) left</span>
              <!-- <span>
                    <Button icon="pi pi-heart" severity="secondary" outlined />
                    <Button icon="pi pi-shopping-cart" class="ml-2"/>
                </span> -->
            </div>
          </div>
        </template>
      </Carousel>
    </div>
    <div class="mt-10 grid grid-cols-2 gap-3 px-3 md:grid-cols-4 md:gap-8 xl:grid-cols-5">
      <BookItem v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Carousel from 'primevue/carousel'
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'

import BookItem from '@/components/ui/BookItem.vue'

import { getAllBooks } from '@/repository/books'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const books = ref<Book[]>([])

const bestsellers = ref<Book[]>([])
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 5,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
])

const getData = async () => {
  const res = await getAllBooks()
  books.value = res.books
}

const handleSelect = (id: number) => {
  router.push(`/books/${id}`)
}

onMounted(() => {
  // console.log('Books fetched')
  getData()
})

watch(books, () => {
  bestsellers.value = books.value.slice(0, 10)
})
</script>

<style scoped></style>
