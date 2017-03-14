<template>

  <section class="container">

    <h1 class="display-1">
      About Page
    </h1>
    <br>
    <v-stepper v-model="e1">

      <v-stepper-header>
        <v-stepper-step step="1" v-bind:complete="e1 > 1"></v-stepper-step>
        <v-divider />
        <v-stepper-step step="2" v-bind:complete="e1 > 2"></v-stepper-step>
        <v-divider />
        <v-stepper-step step="3"></v-stepper-step>
        <v-divider />
        <v-stepper-step step="4"></v-stepper-step>
      </v-stepper-header>

      <v-stepper-content step="1">

        <p class="title">
          First Question ?
        </p>
        <v-radio label="Radio 1" primary v-model="ex8" value="radio-1" light />
        <v-radio label="Radio 2" primary v-model="ex8" value="radio-2" light />
        <v-radio label="Radio 2" primary v-model="ex8" value="radio-3" light />
        <v-radio label="Radio 2" primary v-model="ex8" value="radio-4" light />

        <v-btn primary @click.native="e1 = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">

        <v-radio label="Radio 1" primary v-model="ex8" value="radio-1" light />
        <v-radio label="Radio 2" primary v-model="ex8" value="radio-2" light />
        <v-radio label="Radio 2" primary v-model="ex8" value="radio-3" light />
        <v-radio label="Radio 2" primary v-model="ex8" value="radio-4" light />

        <v-btn primary @click.native="e1 = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px" />
        <v-btn primary @click.native="e1 = 4">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px" />
        <v-btn primary @click.native="e1 = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
    <br>

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
        e1: '',
        ex8: ''
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
