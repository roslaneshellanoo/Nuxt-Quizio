<template>

  <v-app top-toolbar footer :class="[ this.$route.name + '-page']">
    <header>
      <v-toolbar>
        <v-toolbar-side-icon @click.native.stop="sidebar = !sidebar"/>
        <v-toolbar-title>
          <nuxt-link class="white--text" to="/">
            Quizio.io
          </nuxt-link>
        </v-toolbar-title>
        <v-toolbar-items class="hidden-md-and-down">
          <v-toolbar-item v-for="item in items" ripple  :router="true" :href="item.href">
              {{item.title}}
          </v-toolbar-item>
        </v-toolbar-items>
        <v-btn icon dark>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    </header>

    <main>

      <v-sidebar class="" drawer v-model="sidebar">
        <v-toolbar class="sidebar-logo">
          <v-toolbar-side-icon @click.native.stop="sidebar = !sidebar"/>
          <v-toolbar-title class="">
            Quizio.io
          </v-toolbar-title>
        </v-toolbar>

        <v-list dense>
          <v-list-item v-for="item in items">
            <v-list-tile ripple>
              <v-list-tile-title  v-text="item.title"/>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-sidebar>

      <v-content>
        <v-container fluid>
          <nuxt/>
        </v-container>
      </v-content>
    </main>

    <v-footer>
      <div class="text-xs-right">© 2016</div>
    </v-footer>

  </v-app>

</template>

<script>

  export default {

    data () {
      return {
        routeclass: this.$route.name,
        sidebar: false,
        items: [
          {
            title: 'Javascript Quiz',
            href: '/quiz/javascript'
          },
          {
            title: 'About',
            href: '/about'
          }
        ]
      }
    }
  }
</script>

<style>

  .button, .button:visited {
    display: inline-block;
    color: #3B8070;
    letter-spacing: 1px;
    background-color: #fff;
    border: 2px solid #3B8070;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 45px;
  }

  .button:hover, .button:focus {
    color: #fff;
    background-color: #3B8070;
  }

  .title {
    color: #505153;
    font-weight: 300;
    font-size: 2.5em;
    margin: 0;
  }
</style>
