<template>
  <router-link :to="{ name: 'Home' }">home</router-link>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
