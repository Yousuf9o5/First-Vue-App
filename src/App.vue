<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
// if () {
//   console.log("not logged in");
// }
</script>

<template>
  <div :class="['App', $store.state.theme]">
    <Navbar />
    <div class="container my-5 py-5">
      <RouterView />
    </div>
  </div>
</template>
