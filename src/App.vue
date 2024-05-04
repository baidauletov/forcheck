<template>
  <v-app id="app" :style="mainBg">
    <v-main lass="main-layout">
      <!-- <transition mode="out-in"> -->
        <vueHeader :showShop="toOpenShop" @closeShop="closeShop()" />
      <!-- </transition> -->
      <router-view />
      <vueSidebar ></vueSidebar>
    </v-main>
  </v-app>
</template>

<script >
import vueHeader from '@/components/VueHeader.vue'
import vueSidebar from '@/components/VueSidebar.vue'
import dashboardbg from '@/assets/background-dashboard.png'

export default {
  name: 'App',
  components: {
    vueSidebar,
    vueHeader,
  },

  data() {
    return {
      toOpenShop: false,
      dashboardBackground: dashboardbg,
    }
  },

  mounted() {
    const data = { type: 'start_stage', begin: 'dashboard' }
    console.log(JSON.stringify(data))
  },

  computed: {
    mainBg() {
      return {
        '--dashboardbg': `url(${this.dashboardBackground}) center no-repeat`,
      }
    },
  },

  methods: {
    openShop() {
      console.log('toOpenShop: ', this.toOpenShop)
      this.toOpenShop = true
    },
    closeShop() {
      this.toOpenShop = false
    },
  },
}
</script>


<style lang="scss">
body {
  padding: 0;
  margin: 0;
  overflow-y: hidden;
}
.main-layout {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  .main-layout__router {
    width: 83vw;
    background-size: cover;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: #2c3e50;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow-y: hidden;
  background-size: cover;
  background: var(--dashboardbg);
}
a {
  text-decoration: none !important;
  color: inherit !important;
}
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #31312f;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #2e2e2d;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
</style>
