export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wing-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  router: {
    middleware: ['auth'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAmMiJCvovKbCv62QksYO3z5bEhW5n9h-8",
          authDomain: "fwing-app.firebaseapp.com",
          databaseURL: "https://fwing-app-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "fwing-app",
          storageBucket: "fwing-app.appspot.com",
          messagingSenderId: "283787631279",
          appId: "1:283787631279:web:2b1a819821b07d1c14d25a",
          measurementId: "G-61GXXHY714"
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: true
            },
          },
          database: {
          }
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
