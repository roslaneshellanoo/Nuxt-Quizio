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
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'}
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    {src: 'muse-ui/dist/muse-ui.css'},
    {src: '~assets/css/main.scss', lang: 'scss'}
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#3a5783'},
  /*
   ** Build configuration
   */
  plugins: [
    '~plugins/vue-notifications',
    //'~plugins/muse-ui'
  ],

  build: {

    vendor: ['muse-ui', 'vue-notifications'],
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
