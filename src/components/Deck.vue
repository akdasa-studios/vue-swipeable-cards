<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  cards: any[],
  maxCardsToShow: number
}>()

const cardsToShow = computed(
  () => props.cards.filter(x => x.index < props.maxCardsToShow)
)
const topCardRef = ref()

function calculateStyle(index: number) {
  const y = 25+(index*10)
  const z = -(index * 10)
  return `transform: translateX(0) translateY(${y}px) translateZ(${z}px);`
}

function setRefs(idx: number, el: any) {
  if (idx === 0) { topCardRef.value = el }
}
</script>

<template>
  <div>
    <div
      v-for="card in cardsToShow"
      :key="card.id"
      class="card1"
      :style="calculateStyle(card.index)"
      ref="(el) => setRefs(card.index, el)"
    >
      <slot :card="card" />
    </div>
  </div>
</template>

<style scoped>
.card1 {
  position: absolute;
  transform-style: preserve-3d;
  transition: 5s cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 100%;
  height: 200px;
}
</style>
