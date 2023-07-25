<template>
  <div class="products">
    <h2 class="title">{{ title }}</h2>
    <p class="subtitle">{{ subTitle }}</p>
    <div class="product-list">
      <productCard :product="product" v-for="product in productList" />
    </div>
  </div>
</template>

<script>
import productCard from "../components/productCard.vue";

export default {
  name: "productList",

  components: { productCard },

  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
    },
    productList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding: 0 3%;
  margin-top: 2.5rem;
  .title {
    color: #1e1e1e;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  .subtitle {
    color: #787878;
    margin-bottom: 1.5rem;
  }
  .product-list {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
}
</style>
