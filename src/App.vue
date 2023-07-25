<template>
  <div id="app">
    <HeaderApp/>
    <router-view class="content-wrapper" />
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";

export default {
  name: "App",
  components: { HeaderApp },
};
</script>

<style scoped>
* {
  font-family: Cairo, Helvetica, Arial, sans-serif;
}
</style>
