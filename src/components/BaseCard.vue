<template>
  <Transition appear>
    <div class="card">
      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.card {
  width: 14rem;
  height: 7.5rem;
  background: var(--base-card-background);
  box-shadow: 2px 2px 2px rgb(0 0 0 / 25%);
  
  transition: opacity 0.3s ease-in-out;
}


</style>
