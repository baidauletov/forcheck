/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// import VueAgile from 'vue-agile'

const app = createApp(App)

registerPlugins(app)

// app.use(VueAgile)

app.mount('#app')
