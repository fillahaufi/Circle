<template>
  <Card>
    <template #header>
      <div class="relative">
        <img alt="header" src="https://placehold.co/1200x1200" />
        <Button
          icon="pi pi-bookmark"
          severity="secondary"
          text
          raised
          rounded
          aria-label="Bookmark"
          class="!absolute right-2 top-2 !bg-primary-950"
        />
      </div>
    </template>
    <template #title>{{ props.book.title }}</template>
    <template #subtitle>{{ props.book.author }}</template>
    <template #content>
      <!-- <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
        ratione quam perferendis esse, cupiditate neque quas!
      </p> -->
    </template>
    <template #footer>
      <div class="mt-1 flex gap-4">
        <Button label="+ Add To Cart" class="w-full" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'

// define props here
const props = defineProps<{
  book: Book
}>()
</script>

<style lang="scss" scoped></style>
