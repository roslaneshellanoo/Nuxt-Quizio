module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Quizio.io - Test your code skills',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Signika|Material+Icons'}
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    {src: 'vuetify/dist/vuetify.min.css'},
    {src: '~assets/scss/main.scss', lang: 'scss'}
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#3a5783'},
  /*
   ** Build configuration
   */
  plugins: [

     '~plugins/vuetify'
  ],

  build: {

    vendor: ['vuetify'],
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
