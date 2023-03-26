<script lang="ts" setup>
defineProps<{
  iconSrc: string
  active?: boolean
  onTap: VoidFunction
}>()
</script>

<template>
  <button @click="onTap" class="button">
    <img class="icon" :class="{ active }" :src="iconSrc" />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;

  /* border-radius: 50%; */
  background-color: rgba(255 255 255 / 0%);

  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;

  transition: background-color 0.2s ease-in;
}

.button:hover,
.button:focus-visible {
  background-color: rgba(255 255 255 / 10%);
  outline: 1px solid rgba(255 255 255 / 15%);
}

.icon {
  display: block;
  filter: invert(54%) sepia(78%) saturate(0%) hue-rotate(158deg) brightness(101%) contrast(84%);
  transition: filter 0.2s ease-in;
}

.icon.active {
  filter: invert(100%) sepia(5%) saturate(15%) hue-rotate(218deg)
    brightness(107%) contrast(100%);
}
</style>
