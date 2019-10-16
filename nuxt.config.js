import colors from 'vuetify/es5/util/colors'
import contentful from './.contentful.json'
export default {
  mode: 'universal',
  env: {
    CTF_SPACE_ID: contentful.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: contentful.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: contentful.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: contentful.CTF_BLOG_POST_TYPE_ID
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/google-analytics',
    {
      id: 'UA-108608743-2'
    }
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    // routes() {
    //   return client
    //     .getEntries({
    //       content_type: process.env.CTF_BLOG_POST_TYPE_ID,
    //       order: '-sys.createdAt'
    //     })
    //     .then((entries) => {
    //       return entries.items.map((entry) => {
    //         return {
    //           route: `posts/${entry.fields.slug}`,
    //           payload: entry
    //         }
    //       })
    //     })
    // }
  }
}
