<template>
  <div>
    <div class="heading m-5">
      <h2>"J'ai réussi à apprendre progressivement et pragmatiquement"</h2>
      <p>
        Fort de quelques expériences professionnelles, j'ai pu acquérir de nombreuses connaissances en développement web.<br>
        Tout au long de mon (court) parcours, j'ai travaillé sur plusieurs projets me permettant d'appréhender certains domaines de différents points de vue.<br>
        Ce qui fait la force de ce parcours, c'est que j'ai réussi à apprendre progressivement et pragmatiquement.<br>
        J'ai débuté en en tatant du PHP avec framework propriétaire pour enfin arriver à de l'expertise en backend.<br>
        Voici en quelques mots, l'étendu de mon expérience professionnelle:
      </p>
      <hr>
    </div>

    <div class="m-2">
      <ul class="resume">
        <li v-for="(experience, loop) in experiences">
          <div class="experience text-left py-3">
            <div>
              <img :src="experience.image" class="img-thumbnail float-left" width="84">
              <div class="resume-title">
                <h4>
                  {{ experience.company }}<br>
                  <small>{{ experience.job }}</small>
                </h4>

                <p>
                  &nbsp;<i class="fa fa-calendar-o"></i>&nbsp;
                  <span><strong>{{ experience.start | moment("Do MMMM YYYY") }}</strong></span> -

                  <span v-if="experience.end">
                    <strong>{{ experience.end | moment("Do MMMM YYYY") }}</strong>
                    <small>&nbsp;<i class="fa fa-circle"></i>&nbsp;</small>
                    {{ experience.start | moment("from", experience.end, true) }}
                  </span>

                  <span v-else>
                    <i>Toujours en cours</i>
                    <small>&nbsp;<i class="fa fa-circle"></i>&nbsp;</small>
                    {{ experience.start | moment("from", true) }}
                  </span>
                </p>
              </div>
            </div>

            <pre>{{ experience.description }}</pre>
            <button v-for="tag in experience.tags" class="btn btn-outline-info btn-sm m-2">{{ tag }}</button>
          </div>

          <hr class="w-50" v-show="loop < experiences.length - 1">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'resume',
    data: function () {
      return {
        experiences: [
          {
            company: 'Auto-entrepreneur',
            job: 'Développeur web et mobile cross-platform',
            image: '/static/kafei.png',
            tags: ['symfony', 'laravel', 'fullstack', 'fléxibilité'],
            start: '05-01-2015',
            end: '',
            description: 'Création d\'un statut d\'auto-entrepreneur pour répondre aux missions de plusieurs clients.\n' +
            'Pour l\'instant, j\'ai travaillé sur 2 missions (un projet Symfony et un projet Laravel) pour un BDE étudiant et la compagnie Cassiop.\n' +
            'N\'hésitez pas à me contacter pour faire parti de cette liste.'
          },
          {
            company: 'Pumpkin',
            job: 'Lead développeur web',
            image: '/static/pumpkin.png',
            link: 'https://www.linkedin.com/company-beta/3794241/',
            tags: ['symfony', 'backend', 'refacto', 'mongoDB', 'postgreSQL', 'kafka', 'elasticsearch', 'management', 'agilité'],
            start: '09-01-2015',
            end: '',
            description: 'Full-Stack Développeur et Back-End Architecte (Symfony2/3, Angular2) pour l\'application Pumpkin.\n' +
              'Expertise dans le domaine du web:\n' +
              '- Réfactorisation complète d\'une API (Sf2 -> Sf3, mongoDB -> postgreSQL) complète et réussie\n' +
              '- Création d\'une architecture back-end en micro services, extensible et abstraite (Symfony3)\n' +
              '- Amélioration d\'une application web existante et optimisation (Twig)\n' +
              '- Création d\'une application web type "dashboard" en single-page framework (Angular2)\n' +
              '- Expertise des technologies des bases des données (mongoDB, postgreSQL)\n' +
              '- Optimisation des résultats de recherche de données et de performance de l\'API en asynchrone (Elasticsearch, Kibana, Apache Kafka)\n' +
              '- Gestion des serveurs de développement et de la mise en production (Docker)'
          },
          {
            company: 'Epitech',
            job: 'Assistant pédagogique',
            image: '/static/epitech.png',
            link: 'https://www.linkedin.com/company-beta/163660/',
            tags: ['c++', 'c', 'pégadogie', 'soutien'],
            start: '01-01-2015',
            end: '08-31-2015',
            description: 'Soutien en langage applicatif (C/C++) pour les élèves de première et deuxième année.\n' +
              'Compétence en gestion et en pédagogie valorisée:\n' +
              '- Création de cours pour les élèves d\'année précédente en C\n' +
              '- Soutien en C++ pour les élèves de deuxième année\n' +
              '- Création de challenges et hackathon\n'
          },
          {
            company: 'No Parking',
            job: 'Développeur web - Stagiaire',
            image: '/static/noparking.png',
            link: 'https://www.linkedin.com/company-beta/1992812/',
            tags: ['backend', 'php', 'jquery', 'AJAX'],
            start: '07-01-2014',
            end: '12-31-2014',
            description: 'Développement Back-End (PHP framework propriétaire) d\'un logiciel de gestion de trésorerie et de gestion du temps.\n' +
              'Découverte des technologies du web en général:\n' +
              '- Utilisation d\'une API Rest\n' +
              '- Optimisation des structures en micro-services\n' +
              '- Compétence bas niveau en PHP\n' +
              '- Appréhension du système AJAX\n'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .resume {
    list-style: none;
  }

  .resume-title {
    padding-left: 100px;
  }

  .resume pre {
    white-space: pre-wrap;
    font-family: inherit;
    font-size: inherit;
  }
</style>
