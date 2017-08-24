<template>
  <div>
    <div class="heading m-5">
      <img src="/static/animat-pencil-color.gif" width="128">
      <h2>"J'aime dire que j'habite plusieurs villes"</h2>
      <p>
        Je suis disponible physiquement (rendez-vous ponctuel et défini, présentation) pour des missions freelance sur plusieurs régions.<br>
        En effet, j'aime dire que j'habite plusieurs villes et que je les porte chacune dans mon coeur.<br>
        Actuellement, j'ai établi mon fief dans la belle et magnifique ville de la bière, Lille.<br>
        Je suis également disponible assez facilement (et rapidement) sur Paris.<br>
        Enfin, je peux aussi me libérer pour des missions avoisinants la région des bons vins de Bordeaux.<br>
        N'hésitez pas à me contacter par téléphone ou par mail pour prendre contact pour un projet !
      </p>
      <hr>
    </div>

    <div class="m-5">
      <div class="text-left">
        <h4>Contact</h4>
        <p>
          Pierrick GICQUELAIS - Développeur freelance web et mobile cross-platform<br>
          <a href="mailto:pierrick.gicquelais@gmail.com">Pour m'envoyer une jolie lettre <i class="fa fa-envelope"></i></a><br>
          <a href="https://github.com/Kafei59" target="_blank">Pour accéder à mes petits projets <i class="fa fa-github"></i></a><br>
          <a href="https://www.societe.com/societe/monsieur-pierrick-gicquelais-813855988.html" target="_blank">Pour accéder au statut de ma société <i class="fa fa-bank"></i></a><br>
          Sinon, vous pouvez toujours me chanter une petite chanson au: <strong>06.37.26.95.46</strong><br>
          (merci de ne pas me démarcher pour autre chose)
        </p>
      </div>
    </div>

    <div class="m-5">
      <gmap-map :center="center" :zoom="zoom">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDzWm4LflHK1LXBcr-2MjY30ferq6HIzds'
    }
  })

  export default {
    name: 'contact',
    data: function () {
      return {
        center: {lat: 50.633333, lng: 3.066667},
        zoom: 6,
        markers: [{
          position: {lat: 50.6381373, lng: 3.061137599999938}
        }, {
          position: {lat: 48.866667, lng: 2.333333}
        }, {
          position: {lat: 44.837789, lng: -0.5791799999999512}
        }]
      }
    }
  }
</script>

<style>
  .vue-map-container {
    flex: 1;
    height: 300px;
  }
</style>
