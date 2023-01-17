<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import Deck from './components/Deck.vue'
import Card from './components/Card.vue'
import { CardState, CardVM } from './components/CardState';
import { Vector3d } from './components/Vector3d';

const cards = reactive([
  new CardVM("0", 0),
  new CardVM("1", 1),
  new CardVM("2", 2),
  new CardVM("3", 3),
])

function onSwipe() {
  const topCard = cards.find(x => x.index === 0)
  if (topCard) {
    topCard.index = cards.length
    cards.forEach(x => x.index--)
  }
}

function onDelete() {
  const topCard = cards.findIndex(x => x.index === 0)
  if (topCard != -1) {
    cards.splice(topCard, 1)
    cards.forEach(x => x.index--)
  }
}

function initialState(cardState: CardState) {
  cardState.position.x = 0 // = new Vector3d(0, cardState.index*5, -(cardState.index * 80))
  cardState.position.y = cardState.index*5
  cardState.position.z = -(cardState.index * 80)
  cardState.angle.x = 0
  cardState.angle.y = 0
  cardState.angle.z = 0
}
function onMoving(cardState: CardState, deltaPos: Vector3d) {
  cardState.position.x += deltaPos.x
  cardState.position.y += deltaPos.y
  cardState.angle.z = 15 * (cardState.position.x / 300)
  if (cardState.angle.z >  15)  { cardState.angle.z = 15 }
  if (cardState.angle.z < -15)  { cardState.angle.z = -15 }
}

function onMoved(cardState: CardState): boolean {
  onSwipe()
  return true
}

const cardsToShow = computed(
  () => cards.filter(x => x.index < 3)
)
</script>

<template>
  <button @click="onSwipe">Swipe</button>
  <button @click="onDelete">Delete</button>
  <Deck
    v-slot="{ card }"
    class="deck"
    :cards="cardsToShow"
    @place="initialState"
    @moving="onMoving"
    @moved="onMoved"
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
  perspective: 1800px;
  transform-style: preserve-3d;
}
</style>