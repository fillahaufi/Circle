<template>
  <div class="flex flex-col justify-center px-3 py-20">
    <h4 class="text-center text-4xl font-bold">FAQ</h4>
    <div class="mt-10 w-full self-center lg:w-1/3">
      <Accordion value="0">
        <AccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.content">
          <AccordionHeader>{{ tab.title }}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">{{ tab.content }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

const tabs = [
  {
    title: 'What is Circle?',
    content:
      'Circle is a platform for authors and readers to connect and share their love for books.'
  },
  {
    title: 'How can I join Circle?',
    content: 'You can join Circle by registering an account on our website.'
  },
  {
    title: 'How can I publish my book on Circle?',
    content:
      'You can publish your book on Circle by going to the "Publish" page and following the instructions.'
  }
]
</script>

<style scoped></style>
