import Vue from 'vue'
// import MuseUI from 'muse-ui'

if (process.BROWSER_BUILD) {
  const MuseUI = require('muse-ui')
  Vue.use(MuseUI)
}

