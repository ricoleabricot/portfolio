<template>
  <div>
    <nav id="sidenav" class="sidebar">
      <div class="p-3">
        <img src="/static/kafei.png" class="rounded" width="60">K.
        <hr>
      </div>

      <ul class="nav nav-pills text-left flex-column">
        <li class="nav-item">
          <router-link :to="{ name: 'Hello'}" class="nav-link">
            <img src="/static/id-card.png" width="32">&nbsp;&nbsp;Présentation
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{ name: 'Resume'}" class="nav-link">
            <img src="/static/resume.png" width="32">&nbsp;&nbsp;Parcours
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{ name: 'Skills'}" class="nav-link">
            <img src="/static/magic-wand.png" width="32">&nbsp;&nbsp;Compétences
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{ name: 'Code'}" class="nav-link">
            <img src="/static/computer.png" width="32">&nbsp;&nbsp;Code
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{ name: 'Contact'}" class="nav-link">
            <img src="/static/paper-plane.png" width="32">&nbsp;&nbsp;Contact
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'side-navigation'
  }
</script>

<style scoped>
  .nav-pills .nav-link {
    border-radius: 0;
  }

  .router-link-exact-active {
    background-color: #3fb7eb;
    color: white;
    border-right: 5px solid #3fb7eb;
  }
</style>
