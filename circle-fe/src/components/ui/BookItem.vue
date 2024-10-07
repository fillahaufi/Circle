<template>
  <Card
    :pt="{
      root: () => ({
        style: {
          cursor: 'pointer'
        },
        onClick: handleSelect
      }),
      body: () => ({
        style: {
          height: '-webkit-fill-available'
        }
      }),
      footer: () => ({
        style: {
          'margin-top': 'auto'
        }
      })
    }"
  >
    <template #header>
      <div class="relative">
        <img alt="header" src="https://placehold.co/1000x1200" />
        <!-- <Button
          icon="pi pi-bookmark"
          severity="secondary"
          text
          raised
          rounded
          aria-label="Bookmark"
          class="!absolute right-2 top-2 !bg-primary-950"
        /> -->
      </div>
    </template>
    <template #title>{{ props.book.title }}</template>
    <template #subtitle>{{ props.book.author }}</template>
    <template #content>
      <div class="mt-5 flex flex-row items-center justify-between">
        <!-- <Badge :value="`$ ${props.book.price}`" size="large" severity="success"></Badge> -->
        <p class="font-bold">$ {{ props.book.price }}</p>
        <p class="text-xs">{{ props.book.availableStock }} item(s) left</p>
      </div>
    </template>
    <template #footer>
      <!-- <div class="mt-auto flex gap-4">
        <Button label="+ Add To Cart" class="mt-auto w-full" />
      </div> -->
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import { useRouter } from 'vue-router'
// define props here
const props = defineProps<{
  book: Book
}>()

const router = useRouter()

const handleSelect = () => {
  // go to /books/:id
  router.push(`/books/${props.book.id}`)
}
</script>

<style></style>
