module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/styles/main.scss', lang: 'scss' },
    { src: '~assets/styles/themes/default.scss', lang: 'scss' },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  build: {
    vendor: [
      'axios'
    ]
  },
  plugins: [
    '~plugins/cordova'
  ]
};
