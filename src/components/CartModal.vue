<template>
  <Teleport to="body">
    <div class="modal" :class="{ open: open }">
      <template v-if="cartTotal.length">
        <h5 class="modal-title">Mon Panier</h5>
        <div class="cart-list" v-for="product in cartTotal">
          <div class="product-infos">
            <img
              :src="`src/assets/photos/${product.type}/${product.imgUrl}`"
              alt="imgUrl"
            />
            <div class="infos">
              <p class="title">{{ product.title }}</p>
              <p class="price">Prix : {{ product.price }} €</p>
              <p class="remove" @click="removeProduct(product)">Supprimer</p>
            </div>
          </div>
          <div class="product-count">
            <select v-model="product.count" @change="updateCartItem(product)">
              <option v-for="count in 10" :key="count" :value="count">
                {{ count }}
              </option>
            </select>
          </div>
          <div class="total-price">
            <p>{{ (product.price * product.count).toFixed(2) }} €</p>
          </div>
        </div>
        <div class="footer">
          <p class="total-price">
            Prix total : <span> {{ totalPrice }} € </span>
          </p>
          <div class="footer-actions">
            <button @click="clearCart" class="reset-cart">
              Vider le panier
            </button>
            <button class="dark-button">Commander</button>
          </div>
        </div>
      </template>
      <p v-else>Le panier est vide</p>
    </div>
  </Teleport>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartModal",

  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    clearCart() {
      this.$store.dispatch("clearCart");
    },
    removeProduct(product) {
      this.$store.dispatch("removeFromCart", product);
    },

    updateCartItem(product) {
      this.$store.dispatch("updateItemCount", {
        product,
        newCount: product.count,
      });
    },
  },

  computed: {
    ...mapGetters(["cartTotal"]),

    totalPrice() {
      const total = this.cartTotal.reduce((total, produit) => {
        return total + produit.price * produit.count;
      }, 0);

      return total.toFixed(2);
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  position: absolute;
  font-family: Cairo, Helvetica, Arial, sans-serif;
  top: 5rem;
  right: 3%;
  overflow: scroll;
  background: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  max-height: 20rem;
  transform: scale(0);
  transform-origin: top right;
  transition: transform 0.3s ease-in-out;
  padding: 1.5rem;

  &.open {
    transform: scale(1);
  }

  .modal-title {
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .cart-list {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    .product-infos {
      display: flex;
      gap: 1rem;

      img {
        width: 4rem;
        height: 4rem;
        border-radius: 5px;
      }

      .title {
        font-weight: 700;
      }

      .price {
        font-size: 0.85rem;
        padding: 0.4rem 0;
      }
      .remove {
        color: red;
        font-size: 0.75rem;
        cursor: pointer;
      }
    }
    .product-count {
      select {
        padding: 0.1rem;
        font-weight: 600;
        border-radius: 7px;
        background: #f0f2f2;
        box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
      }
    }
  }
  .footer {
    border-top: 1px solid #e7e7e7;
    margin-top: 0.5rem;
    padding-top: 1rem;
    .total-price {
      text-align: end;
      span {
        font-weight: bold;
      }
    }
    .footer-actions {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      .reset-cart {
        color: red;
        font-size: 0.85rem;
        cursor: pointer;
      }
    }
  }
}
</style>
