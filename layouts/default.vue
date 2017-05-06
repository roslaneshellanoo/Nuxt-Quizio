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
          <v-toolbar-item v-for="(item, index) in items" :key="item" ripple  :router="true" :href="item.url">
              {{item.title}}
          </v-toolbar-item>
        </v-toolbar-items>
        <v-btn icon dark>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    </header>

    <main>

      <v-sidebar class="grey lighten-4" drawer v-model="sidebar">
        <v-toolbar class="sidebar-logo">
          <v-toolbar-side-icon @click.native.stop="sidebar = !sidebar"/>
          <v-toolbar-title>
            <nuxt-link class="white--text" to="/">
              Quizio.io
            </nuxt-link>
          </v-toolbar-title>
        </v-toolbar>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="item">
            <v-list-tile :router="true" :href="item.url" ripple>
              <v-list-tile-title   v-text="item.title"/>
            </v-list-tile>
          </v-list-item>
        </v-list>

      </v-sidebar>

      <v-content>
        <div class="main-content">
          <nuxt/>
        </div>
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
            url: '/quiz/javascript'
          },
          {
            title: 'About',
            url: '/about'
          }
        ]
      }
    }
  }
</script>

<style>

  .sidebar .list__tile {
    color: #424242;
  }

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

</style>
