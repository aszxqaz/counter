<script setup lang="ts">
import Counter from "./components/Counter.vue"
import { Counter as CounterClass } from "./store/counter";
import AddCard from "./components/AddCard.vue"
import { useCounterStore } from "./store"

const store = useCounterStore()
</script>

<template>
  <div class="cards-grid">
    <Counter
      v-for="counter in store.counters"
      :counter="counter as unknown as CounterClass"
      :key="counter.id"
      :handle-remove="() => store.remove(counter.id)" />
    <AddCard :on-tap="store.add" />
  </div>
</template>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 225px);
  justify-content: center;

  padding-inline: 50px;
  max-width: 880px;

  row-gap: 45px;
  column-gap: 50px;

  margin: auto;
}
</style>
