<template>
  <div class="view cook">
    <div class="header">
      <div class="header-title">
        <h1>Délices culinaires</h1>
        <h3>Explorez notre menu savoureux</h3>
      </div>
    </div>

    <productList
      :title="'Entrées'"
      :subTitle="'Le restaurant vous propose'"
      :productList="starters"
    />

    <productList
      :title="'Plats'"
      :subTitle="'Des sélections de produits pour toutes vos envies'"
      :productList="plats"
    />

    <productList
      :title="'Desserts'"
      :subTitle="'Des sélections de produits pour toutes vos envies'"
      :productList="desserts"
    />
  </div>
</template>

<script>
import json from "../assets/product.json";
import productList from "../components/productList.vue";

export default {
  name: "BarView",
  components: { productList },

  data() {
    return {
      starters: json.starters,
      plats: json.plats,
      desserts: json.desserts,
    };
  },
};
</script>

<style lang="scss" scoped>
.cook {
  .header {
    position: relative;
    display: flex;
    align-items: center;
    height: 12rem;
    padding: 0 3%;
    background: url(../assets/photos/cover.jpg);
    background-position: top right;
    background-size: cover;

    .header-title {
      h1 {
        color: #1e1e1e;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        margin-bottom: 0.2rem;
      }

      h3 {
        color: #787878;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
}
</style>
