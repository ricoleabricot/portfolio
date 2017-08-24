<template>
  <div>
    <div class="heading m-5">
      <img src="/static/animat-customize-color.gif" width="128">
      <h2>"Il faut savoir être couteau-suisse"</h2>
      <p>
        Le problème le plus difficile à appréhender dans le développement web, c'est la multitude de compétences diverses à acquérir.<br>
        Certains vous diront qu'il faut être plus comme si, plus comme ça. Et au final, le tout ressemble à un capharnaüm.<br>
        Pour un développeur freelance, il faut savoir être couteau-suisse: un peu de front, un peu de back, du design, de l'animation etc.<br>
        Aujourd'hui, je suis capable d'annoncer que je maîtrise suffisamment chaque domaine pour être complétement prêt à la création de A-Z d'une application ou d'un projet.<br>
        Voici une liste exhaustive de mes principales compétences.
      </p>
      <hr>
    </div>

    <div class="m-2">
      <ul class="timeline">
        <li v-for="(skill, loop) in skills" :class="{ 'timeline-inverted': loop % 2 != 0 }">
          <div class="timeline-badge">
            <div :class="skill.background">
              <img :src="skill.image" width="28">
            </div>
          </div>

          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">{{ skill.name }}</h4>
              <p>
                <small class="text-muted"><i class="fa fa-clock-o"></i>&nbsp;<span>{{ skill.experience }}</span></small>
              </p>
            </div>
            <div class="timeline-body">
              <p>{{ skill.description }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'skills',
    data: function () {
      return {
        skills: [
          {
            name: 'Symfony',
            experience: '3 années exp. (travail actuel)',
            background: 'background-symfony',
            image: '/static/symfony-logo.png',
            description: 'Principale technologie sur laquelle je travaille. ' +
            'Actuellement lead développeur dans ce domaine. ' +
            'C\'est vraisemblablement avec Symfony où je me sens le plus à l\'aise (déjà travaillé en Laravel également).'
          },
          {
            name: 'Angular2',
            experience: '1 année exp. (2 projets)',
            background: 'background-angular',
            image: '/static/angular-logo.png',
            description: 'Framework javascript que j\'ai le plus exploité actuellement. ' +
            'J\'ai également travaillé avec la version petite soeur (angularJS) ce qui me permet d\'appréhender plus facilement les besoins sur cette technologie'
          },
          {
            name: 'Vue.js',
            experience: '1 projet',
            background: 'background-vue',
            image: '/static/vue-logo.png',
            description: 'C\'est la technologie que j\'ai utilisé pour créer ce site. ' +
            'Il s\'agit du premier essai que je tente. Ce framework est parfait de part son optimisation et sa simplicité pour les petits projets dont je pense commencer le développent.'
          },
          {
            name: 'React-Native',
            experience: '1 projet',
            background: 'background-react',
            image: '/static/react-native-logo.png',
            description: 'J\'ai découvert React-Native lorsque je me suis confronté à l\'idée de vouloir développer facilement et rapidement ma première application mobile. ' +
            'J\'ai pour l\'instant découvert ce framework qu\'au vue d\'un simple développement d\'un copycat d\'IMDB (base de données de films). ' +
            'Cela m\'a permi d\'appréhender le corps du framework.'
          },
          {
            name: 'HTML/CSS',
            experience: '5 années exp.',
            background: 'background-html',
            image: '/static/html-logo.png',
            description: 'On ne les présente plus désormais. Cela fait maintenance plusieurs années que j\'utilise ce couple de technologie au sein de mes développents web. ' +
            'Cependant, je me permets d\'assurer mes projets avec les dernières technologies (gestionnaire de paquets etc) afin de les faciliter et de les faire perdurer. ' +
            'Je pourrais citer: Gulp, Npm, SASS/LESS, Bower, ... parmis tant d\'autres.'
          },
          {
            name: 'C++',
            experience: '2 années étude',
            background: 'background-cpp',
            image: '/static/cpp-logo.png',
            description: 'J\'ai découvert le C++ lors de mes études à Epitech (après une année acharnée à développer en C). ' +
            'Cet apprentissage m\'a permi d\'apprendre à développer beaucoup plus bas niveau que ce que le développement web permet de faire actuellement.'
          },
          {
            name: 'SQL/NoSQL',
            experience: '3 années exp.',
            background: 'background-sql',
            image: '/static/mongodb-logo.ico',
            description: 'Toujours complet au développement web, j\'ai acquis plusieurs années d\'expérience dans le domaine de gestion de base de données. ' +
            'J\'ai eu l\'occasion de toucher à un paradigme SQL (mySQL, postgreSQL) et NoSQL (mongoDB) au cours de mes études/travail. ' +
            'Cependant, cela reste encore un domaine dans lequel beaucoup de choses sont encore à apprendre.'
          },
          {
            name: 'Apache Kafka',
            experience: '1 projet',
            background: 'background-kafka',
            image: '/static/kafka-logo.png',
            description: 'Cette technologie est actuellement utilisé dans la compagnie où je travaille. ' +
            'Faible de son niveau en asynchrone, j\'ai du trouver une alternative puissante à Symfony pour permettre une optimisation majeure des performances. ' +
            'Kafka a su répondre à mes besoins, ce qui ne me fera (pour l\'instant) jamais retourner sur RabbitMQ ou autre.'
          },
          {
            name: 'Docker',
            experience: '2 projets',
            background: 'background-docker',
            image: '/static/docker-logo.png',
            description: 'J\'utilise maintenant Docker pour gérer complétement l\'environnement de travail de mes projets web backend. ' +
            'Cela me permet aisément d\'interchanger les projets sur lesquels je suis amené à travailler d\'une façon extrêmenet rapide.'
          },
          {
            name: 'Design',
            experience: 'ø exp.',
            background: 'background-ps',
            image: '/static/photoshop-logo.jpg',
            description: 'Il m\'arrive régulièrement de toucher un peu à tout. Notamment à Photoshop et After Effects. ' +
            'Cela me permet de tester certaines intégrations lorsqu\'aucun designer est disponible. ' +
            'J\'ai récemment découvert Lottie (créé par Airbnb) qui permet d\'intégrer facilement une animation en SVG ou sur mobile.'
          }
        ]
      }
    }
  }
</script>

<style>
  .timeline {
    position: relative;
    padding: 1px 30px;
    list-style: none;
    margin: 0;
  }

  .timeline:before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    margin-left: -1.5px;
    background-color: #fff;
  }

  .timeline > li {
    position: relative;
    margin-bottom: 20px;
  }

  .timeline li:nth-child(1) {
    padding-top: 10px;
  }

  .timeline > li:before,
  .timeline > li:after {
    content: " ";
    display: table;
  }

  .timeline > li:after {
    clear: both;
  }

  .timeline > li:before,
  .timeline > li:after {
    content: " ";
    display: table;
  }

  .timeline > li:after {
    clear: both;
  }

  .timeline > li > .timeline-panel {
    float: left;
    position: relative;
    width: 46%;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: #fff;
  }

  .timeline > li > .timeline-panel:before {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 26px;
    right: -15px;
    border-top: 15px solid transparent;
    border-right: 0 solid lightgray;
    border-bottom: 15px solid transparent;
    border-left: 15px solid lightgray;
  }

  .timeline > li > .timeline-panel:after {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 27px;
    right: -14px;
    border-top: 14px solid transparent;
    border-right: 0 solid #fff;
    border-bottom: 14px solid transparent;
    border-left: 14px solid #fff;
  }

  .timeline > li > .timeline-badge {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-left: -25px;
    text-align: center;
    font-size: 1.4em;
    line-height: 50px;
    color: #fff;
  }

  .timeline > li > .timeline-badge > div {
    border-radius: 50%;
  }

  .timeline > li.timeline-inverted > .timeline-panel {
    float: right;
  }

  .timeline > li.timeline-inverted > .timeline-panel:before {
    right: auto;
    left: -15px;
    border-right-width: 15px;
    border-left-width: 0;
  }

  .timeline > li.timeline-inverted > .timeline-panel:after {
    right: auto;
    left: -14px;
    border-right-width: 14px;
    border-left-width: 0;
  }

  .timeline-badge.primary {
    background-color: #2e6da4 !important;
  }

  .timeline-badge.success {
    background-color: #3f903f !important;
  }

  .timeline-badge.warning {
    background-color: #f0ad4e !important;
  }

  .timeline-badge.danger {
    background-color: #d9534f !important;
  }

  .timeline-badge.info {
    background-color: #5bc0de !important;
  }

  .timeline-title {
    margin-top: 0;
    color: inherit;
  }

  .timeline-body > p,
  .timeline-body > ul {
    margin-bottom: 0;
  }

  .timeline-body > p + p {
    margin-top: 5px;
  }

  .background-symfony {
    background-color: #000;
  }

  .background-angular {
    background-color: #fc434f;
  }

  .background-vue {
    background-color: #4e807d;
  }

  .background-react {
    background-color: #465365;
  }

  .background-html {
    background-color: #fc4c02;
  }

  .background-cpp {
    background-color: #0077b5;
  }

  .background-sql {
    background-color: #89eb6a;
  }

  .background-kafka {
    background-color: #fff;
  }

  .background-docker {
    background-color: #3f729b;
  }

  .background-ps {
    background-color: #001D26;
  }

  @media(max-width:767px) {
    ul.timeline:before {
      left: 40px;
    }

    ul.timeline > li > .timeline-panel {
      width: calc(100% - 90px);
      width: -moz-calc(100% - 90px);
      width: -webkit-calc(100% - 90px);
    }

    ul.timeline > li > .timeline-badge {
      top: 16px;
      left: -15px;
      margin-left: 0;
    }

    ul.timeline > li > .timeline-panel {
      float: right;
    }

    ul.timeline > li > .timeline-panel:before {
      right: auto;
      left: -15px;
      border-right-width: 15px;
      border-left-width: 0;
    }

    ul.timeline > li > .timeline-panel:after {
      right: auto;
      left: -14px;
      border-right-width: 14px;
      border-left-width: 0;
    }
  }
</style>
