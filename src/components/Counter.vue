<script lang="ts" setup>
import { Counter, CounterState } from "../store/counter"
import { controlsIconsSrc } from "../contants"
import Button from "./Button.vue"
import BaseCard from "./BaseCard.vue"

defineProps<{
  counter: Counter
  handleRemove: VoidFunction
}>()
</script>

<template>
  <BaseCard
    class="counter-card"
    :class="{ active: counter.state as unknown as string === 'IN_PROGRESS' }">
    <div class="counter-card__time">{{ counter.time }}</div>
    <div class="counter-card__controls">
      <Button
        :active="counter.state as unknown as string === 'IN_PROGRESS'"
        v-if="counter.state as unknown as string === 'IDLE' || counter.state as unknown as string === 'PAUSED'"
        :onTap="() => counter.start()"
        :iconSrc="controlsIconsSrc.start" />
      <Button
        :active="counter.state as unknown as string === 'IN_PROGRESS'"
        :onTap="() => counter.pause()"
        v-if="counter.state as unknown as string === 'IN_PROGRESS'"
        :iconSrc="controlsIconsSrc.pause" />
      <Button
        :active="counter.state as unknown as string === 'IN_PROGRESS'"
        :onTap="() => counter.reset()"
        v-if="counter.state as unknown as string !== 'IDLE'"
        :iconSrc="controlsIconsSrc.reset" />
    </div>
    <div class="counter-card__close" @click="handleRemove()">
      <img :src="controlsIconsSrc.add" />
    </div>
  </BaseCard>
</template>

<style scoped lang="scss">
.counter-card {
  position: relative;

  display: flex;
  flex-direction: column;

  user-select: none;

  &.active {
    color: var(--color-active);
  }

  &__time,
  &__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 50%;
  }

  &__time {
    border-bottom: 1px solid currentColor;
  }

  &__controls {
    gap: 30px;
  }

  &__close {
    position: absolute;
    top: 5px;
    right: 5px;

    rotate: 45deg;

    width: 20px;
    height: 20px;

    cursor: pointer;
  }
}
</style>
