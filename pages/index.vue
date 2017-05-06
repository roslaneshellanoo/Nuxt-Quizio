<template>
  <div>
    <div class="main-banner">
      <div id="particles-js"></div>
      <div class="text-center mb3">
        <img src="~assets/img/logo.svg" alt="" style="max-width: 300px">
      </div>
      <h4 class="home-title white--text text-center mb4">
        Test your skills and <br> improve your knowledge!
      </h4>
    </div>
    <section class="container">
      <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo"/>
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

<script>

  export default {

    mounted () {
      this.$nextTick(function () {
        if (process.BROWSER_BUILD) {
          // window.particlesJS('particles-js', particlesData)
        }
      })
    }

  }

</script>

<style scoped>

  .title {
    margin: 50px 0;
  }

</style>
