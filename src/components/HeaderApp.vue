<template>
  <nav class="header-app">
    <div class="nav-container">
      <router-link to="/">
        <img
          src="../assets/logo.png"
          alt="logo"
        />
      </router-link>
      <router-link to="/">Accueil</router-link>
      <router-link to="/bar">Bar</router-link>
      <router-link to="/cuisine">Cuisine</router-link>
    </div>
    <div class="basket-container" @click="cartClick">
      <span class="count">{{ cartTotal.length }}</span>
      <img src="../assets/icons/basket.svg" alt="basketIcon" />
    </div>
  </nav>

  <CartModal :open="open" />
</template>

<script>
import CartModal from "./CartModal.vue";
import { mapGetters } from "vuex";

export default {
  name: "HeaderApp",

  components: { CartModal },

  data() {
    return {
      open: false,
    };
  },

  methods: {
    cartClick() {
      this.open = !this.open;
    },
  },

  computed: {
    ...mapGetters(["cartTotal"]),
  },
};
</script>

<style lang="scss" scoped>
.header-app {
  height: 5rem;
  background-color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    img {
      width: 3.5rem;
    }

    a {
      color: #ffffff;
      &.router-link-exact-active,
      &:hover {
        font-weight: bold;
        text-decoration: underline;
        text-underline-offset: 0.3rem;
      }
    }
  }
  .basket-container {
    color: white;
    align-items: center;
    display: flex;
    gap: 0.4rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #fff;
    cursor: pointer;

    .count {
      font-weight: 900;
    }
  }
}
</style>
