<script lang="ts" setup>
import BaseCard from "./BaseCard.vue"
import Button from "./Button.vue"
import { controlsIconsSrc } from "../contants"

defineProps<{ onTap: VoidFunction }>()
</script>

<template>
  <BaseCard class="add-card" @click="onTap">
    <Button :icon-src="controlsIconsSrc.add" :on-tap.stop="onTap" />
  </BaseCard>
</template>

<style lang="scss" scoped>
.add-card {
  position: relative;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover::after {
    content: "";
    position: absolute;
    inset: -2px;
    background-color: rgba(255 255 255 / 10%);
    outline: 1px solid rgba(255 255 255 / 15%);
  }
}

</style>
