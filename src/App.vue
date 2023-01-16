<script setup lang="ts">
import { ref } from 'vue'
import Deck from './components/Deck.vue'
import Card from './components/Card.vue'

const cards = ref([
  { id: 0, index: 0, text: "0" },
  { id: 1, index: 1, text: "1" },
  { id: 2, index: 2, text: "2" },
  { id: 3, index: 3, text: "3" },
  { id: 4, index: 4, text: "4" },
])

function onSwipe() {
  const topCard = cards.value.find(x => x.index === 0)
  if (topCard) {
    topCard.index = cards.value.length
    cards.value.forEach(x => x.index--)
  }
}

function onDelete() {
  const topCard = cards.value.findIndex(x => x.index === 0)
  if (topCard != -1) {
    cards.value.splice(topCard, 1)
    cards.value.forEach(x => x.index--)
  }
}
</script>

<template>
  <!-- <div
    style="transform-style: preserve-3d; width: 500px; height: 500px; background-color: burlywood; perspective: 100px;"
  >
    <div style="transform-style: preserve-3d;">
      <div style="width:100px; height: 100px; background-color: yellowgreen; transform: translateZ(1px)">
        123
      </div>
    </div>
  </div> -->

  <button @click="onSwipe">Swipe</button>
  <button @click="onDelete">Delete</button>
  <Deck
    :cards="cards"
    :max-cards-to-show="3"
    v-slot="{ card }"
    class="deck"
  >
    <Card>
      {{ card }}
    </Card>
  </Deck>
</template>

<style scoped>
.deck {
  width: 100%;
  height: 100vh;
  perspective: 200px;
  transform-style: preserve-3d;
}
</style>