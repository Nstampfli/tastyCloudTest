<template>
  <div class="view home">
    <div class="header">
      <div class="header-title">
        <h1>Bienvenue au restaurant</h1>
        <h3>Découvrez nos produits</h3>
        <div class="about">
          <a href="/">A propos du restaurant</a>
        </div>
      </div>
    </div>

    <productList
      :title="'Suggestions'"
      :subTitle="'Le restaurant vous propose'"
      :productList="suggestions"
    />

    <productList
      :title="'Laissez-vous tenter'"
      :subTitle="'Des sélections de produits pour toutes vos envies'"
      :productList="autreListe"
    />
  </div>
</template>

<script>
import json from "../assets/product.json";
import productList from "../components/productList.vue";

export default {
  name: "HomeView",
  components: { productList },

  data() {
    return {
      suggestions: [],
      autreListe: [],
    };
  },

  mounted() {
    const allPlats = Object.keys(json).reduce((acc, key) => {
      if (Array.isArray(json[key])) {
        acc.push(...json[key]);
      }
      return acc;
    }, []);


    for (let i = 0; i <  Math.floor(Math.random() * 2) + 3; i++) {
      const randomIndex = Math.floor(Math.random() * allPlats.length);
      this.suggestions.push(allPlats.splice(randomIndex, 1)[0]);
    }

    for (let i = 0; i <  Math.floor(Math.random() * 5) + 6; i++) {
      const randomIndex = Math.floor(Math.random() * allPlats.length);
      this.autreListe.push(allPlats.splice(randomIndex, 1)[0]);
    }

  },
};
</script>

<style lang="scss" scoped>
.home {
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
    .about {
      position: absolute;
      border-radius: 0.25rem;
      background: #fff;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
      padding: 0.5rem 1rem;
      bottom: 0;
      transform: translateY(50%);
      left: 3%;

      a {
        line-height: 1.5rem;
      }
    }
  }
}
</style>
