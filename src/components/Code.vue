<template>
  <div>
    <div class="heading m-5">
      <h2>"Je m'efforce d'apprendre toujours plus"</h2>
      <p>
        Le développement est en perpétuel changement, ce qui est à la mode aujourd'hui ne le sera peut-être plus demain.<br>
        C'est pourquoi je m'efforce d'apprendre toujours plus et d'essayer un maximum de choses dans un maximum de domaines.<br>
        Le principal de ma veille et de mes projets personnels tournent autour du web et du mobile, mais il arrive aussi
        que je vienne à travailler/apprendre sur des choses plus complexes: chatbot, AI, etc.<br>
        Ici, voici une liste exhaustive de projets sur lesquels j'ai travaillé ces dernières années.
      </p>
      <hr>
    </div>

    <div class="m-5">
      <h4>Site vitrine "Pierrick Gicquelais" en Vue.js (<i class="fa fa-rocket"></i> lancé en 2017)</h4>
      <div class="text-left">
        <p>
          Ceci est une légère présentation du code utilisé pour ce site vitrine.<br>
          Tout a été développé avec Vue.js en mode templating.<br>
          Cela a permis d'implémenter beaucoup plus facilement le mini-routing utilisé par le menu afin d'avoir plusieurs
          pages d'informations.<br>
          C'est aussi l'un de mes premiers projets dans cette technologie là (et l'occasion d'utiliser la nouvelle version de Bootstrap).
        </p>

        <h6>
          <a href="https://github.com/Kafei59" target="_blank">Lien vers le projet github <i class="fa fa-github"></i></a>
        </h6>
      </div>
      <iframe width="100%" height="500" src="//jsfiddle.net/Kafei59/g60ufpb2/1/embedded/js,html,css/dark/?menuColor=000" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
      <hr>
    </div>

    <div class="m-5">
      <h4>Projet "Bound" en Symfony2 et AngularJS (<i class="fa fa-rocket"></i> lancé en 2015)</h4>
      <div class="text-left">
        <p>
          Bound est le seul projet personnel qui a vraiment abouti à un stade de développement complexe et poussé.<br>
          Le but était de réunir sous une même application, un maximum d'applications sociales (Facebook, Twitter) afin de
          créer une gamification autour d'elle.<br>
          Le projet tournait avec une stack Symfony2 en API Rest et un front en Angular.js, ce qui m'a permis d'essayer
          ce framework javascript à l'époque. Ici, il s'agit simplement de la page d'accueil (qui contenait une vidéo en background).
        </p>

        <h6>
          <a href="https://github.com/Kafei59/bound" target="_blank">Lien vers le projet github <i class="fa fa-github"></i></a>
        </h6>
      </div>
      <iframe width="100%" height="700" src="//jsfiddle.net/Kafei59/gzs23uzb/9/embedded/js,html,css,result/dark/?menuColor=000" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
      <hr>
    </div>

    <div class="m-5">
      <h4>Projet "kTerm" de terminal en ligne en jQuery (<i class="fa fa-rocket"></i> lancé en 2014)</h4>
      <div class="text-left">
        <p>
          Ce projet est un vieux projet web qui consistait à recréé un simple terminal dans un navigateur web.<br>
          À l'époque, le principe était de créer un site complet, type portfolio, uniquement navigable de cette façon.<br>
          Quelques commandes ont été implémentées pour tester le comportement.<br>
          C'est l'un des premiers projets me permettant d'utiliser jQuery.
        </p>

        <h6>
          <a href="https://github.com/Kafei59/kterm" target="_blank">Lien vers le projet github <i class="fa fa-github"></i></a>
        </h6>
      </div>
      <iframe width="100%" height="500" src="//jsfiddle.net/Kafei59/Ljoqs1ah/1/embedded/js,html,css,result/dark/?menuColor=000" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'code'
  }
</script>
