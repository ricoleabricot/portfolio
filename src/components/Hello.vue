<template>
  <div>
    <div class="box">
      <div class="wave wave-one"></div>
      <div class="wave wave-two"></div>
      <div class="wave wave-three"></div>
      <div class="title">
        Pierrick Gicquelais<br><br>
        <small>
          Développeur Freelance<br>
          web<br>
          mobile cross-platform
        </small>
      </div>
    </div>

    <p class="biography p-2">
      Hello,<br><br>
      Je m'appelle Pierrick Gicquelais, j'ai {{ age }} ans, et je suis développeur freelance.<br>
      <i class="fa fa-coffee"></i><br><br>

      Je vous propose actuellement mes services, en tant que développeur freelance, pour des missions de courte ou moyenne durée.<br>
      Mon domaine d'expertise s'étend du front web (création de site vitrine, application web),
      au back web (création d'API, amélioration de code existant, maintenance), en passant par du développement mobile (création d'applications simples iOS et android).<br>
      (si vous voulez me contacter: <router-link :to="{ name: 'Contact'}">contact</router-link>)<br><br>

      Fort d'un bachelor d'Epitech Lille (BAC+3), passionné d'informatique et de nouvelles technologies,
      j'ai eu la chance de passer de simple développeur backend à lead développeur fullstack (front/back web + crossplatform mobile).<br>
      (si vous voulez en savoir davantage sur mon parcours et mon CV: <router-link :to="{name: 'Resume'}">voir tout cela</router-link>)<br><br>

      Grâce à mes études, mon travail et mes projets personnels, j'ai acquéri de nombreuses connaissances dans le domaine du web.<br>
      Allant de l'intégration web basique (HTML, CSS), en passant par des frameworks et des stacks Javascript (Angular2, Vue.js),
      des technologies mobiles cross-platform (react-native) jusqu'à mon expertise en backend PHP (Symfony), je fais preuve curiosité et d'apprentissage latéral.<br>
      (si vous voulez en savoir davantage sur mes compétences: <router-link :to="{name: 'Skills'}">voir tout cela</router-link>)<br><br>
    </p>
  </div>
</template>

<script>
  var age = new Date(new Date() - new Date('1995-12-04')).getFullYear() - 1970

  export default {
    name: 'hello',
    data: function () {
      return {
        age: age
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .box {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 350px;
  }

  .wave {
    position: absolute;
    top: 3%;
    left: 50%;
    width: 1800px;
    height: 1800px;
    margin-left: -900px;
    margin-top: -1490px;
    opacity: 0.4;
    background: #0af;
    border-radius: 46%;
    animation: drift 3000ms infinite linear;
  }

  .wave.wave-two {
    animation: drift 7000ms infinite linear;
    opacity: 0.1;
    background: #83ffee;
  }

  .wave.wave-three {
    animation: drift 5000ms infinite linear;
  }

  .box:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
  }

  .title {
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    z-index: 1;
    text-align: center;
    color: white;
    text-transform: uppercase;
    letter-spacing: .4em;
    font-size: 24px;
    text-indent: 0.3em;
  }

  .biography {
    line-height: 30px;
  }

  @keyframes drift {
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
  }
</style>
