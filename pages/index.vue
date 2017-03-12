<template>
  <div>
    <div class="main-banner">

    </div>
    <section class="container">
      <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
      <h1 class="title">
        Universal Vue.js Application Framework
      </h1>

      <v-btn small primary dark @click.native="$store.commit('increment')">{{ $store.state.counter }}</v-btn>

      <nuxt-link class="button" to="/about">
        About page
      </nuxt-link>
    </section>
  </div>

</template>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>
