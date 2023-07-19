<template>
  <div>
    <p class="text-center">
      {{ $store.state.counter }}
    </p>
    <div class="d-flex justify-content-center gap-5">
      <button @click="$store.dispatch('increaseAction')" class="btn btn-light">
        +
      </button>
      <button @click="$store.dispatch('decreaseAction')" class="btn btn-light">
        -
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
