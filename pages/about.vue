<template>

  <section class="container">

    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo"/>
    <br>
    <br>
    <div>
      <v-radio id="test6" name="test6" label="Testing 6" gap></v-radio>
      <v-radio id="test7" name="test6" label="Testing 7" gap></v-radio>
      <v-radio id="test8" name="test6" label="Testing 8" gap></v-radio>
      <v-radio id="test9" name="test6" label="Testing 9" gap></v-radio>
    </div>
    <div>
      <v-btn primary dark>Next</v-btn small>
    </div>

    <h1 class="title">
      This page is loaded from the {{ name }}
    </h1>
    <h2 class="info" v-if="name === 'client'">
      Please refresh the page
    </h2>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>
<script>
//  let miniToastr
//  if (process.BROWSER_BUILD) {
//    miniToastr = require('mini-toastr')
//  }

  export default {
    data ({req}) {
      return {
        name: req ? 'server' : 'client'
      }
    },
    head () {
      return {
        title: `About Page (${this.name}-side)`
      }
    },

    mounted () {
      // miniToastr.init()
    }
  }
</script>

<style scoped>
  .title {
    margin-top: 50px;
  }

  .info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
    margin-top: 10px;
  }

  .button {
    margin-top: 50px;
  }
</style>
