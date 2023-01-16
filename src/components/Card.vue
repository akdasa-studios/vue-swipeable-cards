<script setup lang="ts">

</script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
    border-radius: 10px;
    padding: 25px;
    background-color: bisque;
    border: 1px solid black;
    height: 100px;
    /* transition: 5s cubic-bezier(0.075, 0.82, 0.165, 1); */
    /* transform: translateX(v-bind(xpx)) translateY(v-bind(ypx)) translateZ(v-bind(zpx)); */
    /* width: 100%; */
    /* z-index: v-bind(i); */
}
</style>
