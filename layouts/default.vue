<template>

  <div>
    <v-app top-toolbar footer>
      <header>
        <v-toolbar>
          <v-toolbar-side-icon @click.native.stop="sidebar = !sidebar"/>
          <v-toolbar-title class="hidden-sm-and-down">
            Toolbar
          </v-toolbar-title>

          <v-toolbar-items>

            <v-toolbar-item>
              gfhfg
            </v-toolbar-item>

            <v-toolbar-item>
              About
            </v-toolbar-item>

          </v-toolbar-items>

          <v-spacer/>

          <v-btn icon dark>
            <v-icon>account_circle</v-icon>
          </v-btn>
          <v-btn icon dark>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon dark>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
      </header>

      <main>

        <v-sidebar class="blue darken-3" drawer v-model="sidebar">
          <v-list dense>
            <v-list-item v-for="item in items">
              <v-list-tile>
                <v-list-tile-title v-text="item.title"/>
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
  </div>
</template>

<script>

  export default {

    data () {
      return {
        sidebar: false,
        items: []
      }
    }
  }
</script>

<style>
  .container {
    margin: 0;
    width: 100%;
    text-align: center;
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

  .title {
    color: #505153;
    font-weight: 300;
    font-size: 2.5em;
    margin: 0;
  }
</style>
