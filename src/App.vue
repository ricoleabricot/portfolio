<template>
  <div id="app">
    <transition name="fade">
      <cat-loader v-if="loading"></cat-loader>
      <div v-else="loading">
        <header>
          <top-navigation></top-navigation>
        </header>

        <div class="d-flex flex-row">
          <div class="navigation hidden-xs-down w-20">
            <side-navigation></side-navigation>
          </div>

          <div class="content w-100 h-100">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>

        <footer class="text-white p-2">
          <div>
            <img src="/static/vue-logo.png" width="24" class="d-inline-block align-top">
            <p class="d-inline-block align-top">Powered by Vue.js</p>
          </div>
          <div>
            <img src="/static/bootstrap-logo.png" width="24" class="d-inline-block align-top">
            <p class="d-inline-block align-top">Enhanced with Bootstrap4</p>
          </div>
          <p>
            <a href="https://github.com/Kafei59/portfolio">
              Developed with <i class="fa fa-heart"></i> by Pierrick Gicquelais - {{ new Date() | moment("YYYY") }} <i class="fa fa-copyright"></i>
            </a>
          </p>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
  import CatLoader from './components/CatLoader.vue'
  import TopNavigation from './components/TopNavigation.vue'
  import SideNavigation from './components/SideNavigation.vue'
  import Vue from 'vue'

  export default {
    name: 'app',
    components: { CatLoader, TopNavigation, SideNavigation },
    data: function () {
      return {
        loading: true
      }
    },

    mounted: function () {
      window.setInterval(function () {
        this.loading = false
      }.bind(this), 1500)

      const moment = require('moment')
      require('moment/locale/fr')

      Vue.use(require('vue-moment'), {
        moment
      })
    }
  }
</script>

<style>
  body {
    background-color: #465365;
    color: white;
  }

  footer a {
    color: white;
  }

  footer a:hover {
    color: gainsboro;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 53px;
  }

  .navigation {
    border-right: 1px solid rgba(70, 83, 101, 0.1);
    background-color: #fff;
  }

  .content {
    min-height: 95vh;
    background-color: #f7f7f7;
    zoom: 0.9;
  }

  .w-20 {
    width: 20%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
