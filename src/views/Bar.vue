<template>
  <div class="view bar">
    <div class="header">
      <div class="header-title">
        <h1>Boissons à l'Honneur</h1>
        <h3>Des créations inédites à découvrir</h3>
      </div>
    </div>

    <productList
      :title="'Softs'"
      :subTitle="'Le restaurant vous propose'"
      :productList="softs"
    />

    <productList
      :title="'Cocktails'"
      :subTitle="'Des sélections de produits pour toutes vos envies'"
      :productList="cocktails"
    />

    <productList
      :title="'Bières'"
      :subTitle="'Des sélections de produits pour toutes vos envies'"
      :productList="beers"
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
      cocktails: json.cocktails,
      beers: json.beers,
      softs: json.softs,
    };
  },
};
</script>

<style lang="scss" scoped>
.bar {
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
