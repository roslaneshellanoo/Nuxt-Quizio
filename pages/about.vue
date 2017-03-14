<template>

  <section class="container">

    <h1 class="title">
      About Page
    </h1>

    <v-row>
      <v-col xs12 md12>
        <v-subheader>Light</v-subheader>
        <v-card class="grey lighten-4 z-depth-0">
          <v-card-text>
            <p>{{ ex8 || 'null' }}</p>

            <v-radio
              label="Radio 1"
              primary
              v-model="ex8"
              value="radio-1"
              light />

            <v-radio
              label="Radio 2"
              primary
              v-model="ex8"
              value="radio-2"
              light />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

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
        ex8: 'default',
        ex9: {}
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
