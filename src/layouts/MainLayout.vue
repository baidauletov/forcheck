<template>
  <div class="main-layout">
        <transition  mode="out-in" >
          <router-view class="main-layout__router" @openShop="openShop()" />
        </transition>
        <!-- @changeRouteTitle="changeRouteTitle" -->
        
        <vueSidebar />
  </div>
</template>

<script>
import vueSidebar from './../components/vue-sidebar.vue'

export default {
  name: 'mainLayout',
  
  components: {
    vueSidebar
  },

  methods: {
      openShop() {
        console.log('mnain')
          this.$emit('openShop')
      }
  }
}
</script>

<style lang="scss">
.main-layout {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  .main-layout__router {
    width: 83vw;
  }
}
</style>