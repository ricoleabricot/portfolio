<template>
  <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top">
    <button v-on:click="toggled = !toggled" class="navbar-toggler-left hidden-lg-up">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">
      <img src="/static/paper-plane-2.png" width="32" class="d-inline-block align-top">
      Pierrick Gicquelais.
    </a>

    <transition name="fade" mode="in-out">
      <div v-if="toggled">
        <nav class="navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{name: 'Hello'}" class="nav-link">
                <i class="fa fa-search"></i>&nbsp;&nbsp;Présentation
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'Resume'}" class="nav-link">
                <i class="fa fa-trophy"></i>&nbsp;&nbsp;Parcours
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'Skills'}" class="nav-link">
                <i class="fa fa-star"></i>&nbsp;&nbsp;Compétences
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'Code'}" class="nav-link">
                <i class="fa fa-code"></i>&nbsp;&nbsp;Code
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'Contact'}" class="nav-link">
                <i class="fa fa-paper-plane"></i>&nbsp;&nbsp;Contact
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </nav>
</template>

<script>
  var toggled = false

  export default {
    name: 'top-navigation',
    data: function () {
      return {
        toggled: toggled
      }
    }
  }
</script>

<style scoped>
  .navbar {
    background-color: #465365;
  }

  .router-link-exact-active {
    color: white;
  }
</style>
