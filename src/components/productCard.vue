<template>
  <div class="product-card">
    <img
      :src="`src/assets/photos/${product.type}/${product.imgUrl}`"
      alt="imgUrl"
    />
    <div class="product-content">
      <p class="product-title">{{ product.title }}</p>
      <p class="product-description">{{ product.description }}</p>
      <div class="buy-container">
        <p class="product-price">{{ product.price }} €</p>
        <button @click="addCart(product)" class="dark-button">Ajouter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productCard",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    addCart(item) {
      this.$store.dispatch("addToCart", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  img {
    width: 100%;
    height: 230px;
  }

  .product-content {
    padding: 1rem;

    .product-title {
      font-weight: 600;
    }

    .product-description {
      font-size: 0.875rem;
      line-height: 1.3rem;
      padding: 0.5rem 0;
    }

    .buy-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .product-price {
        font-size: 0.875rem;
        font-weight: 700;
      }
    }
  }
}
</style>
