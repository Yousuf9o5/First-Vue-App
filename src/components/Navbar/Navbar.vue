<template>
  <nav class="navbar-container">
    <div class="container navbar">
      <div class="logo">
        <h1>Logo</h1>
      </div>
      <div class="links">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/content">Content</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
        <router-link class="link" to="/about">About</router-link>
      </div>
      <div class="buttons">
        <button @click="">Login</button>
        <button @click="$store.dispatch('changeTheme')">
          {{ $store.state.theme }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="css">
.navbar-container {
  background: transparent;
  border-bottom: 2px solid;
  color: inherit;

  .links {
    display: flex;
    gap: 1rem;
  }

  .link {
    text-decoration: none;
    transition: color 0.3s ease-in;
    color: inherit;

    &:hover {
      color: rgb(103, 149, 248);
    }
  }
}
</style>
