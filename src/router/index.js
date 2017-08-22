import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'
import Code from '@/components/Code'
import Contact from '@/components/Contact'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
