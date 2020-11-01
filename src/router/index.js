import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import PersonalCenter from '@/components/PersonalCenter'
import Register from '@/components/Register'
import PersonalHome from '@/components/PersonalHome'
import PersonalHomeSettings from '@/components/PersonalHomeSettings'
import ExploreHome from '@/components/ExploreHome'
import RecommandActor from '@/components/RecommandActor'
import RecommandMovie from '@/components/RecommandMovie'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/PersonalHome/:id',
      name: 'PersonalHome',
      component: PersonalHome,
      children: [
        {
          path: '',
          name: 'ExploreHome',
          component: ExploreHome
        },
        {
          path: 'settings',
          name: 'PersonalHomeSettings',
          component: PersonalHomeSettings
        },
        {
          path: 'RecommandActor',
          name: 'RecommandActor',
          component: RecommandActor
        },
        {
          path: 'RecommandMovie',
          name: 'RecommandMovie',
          component: RecommandMovie
        }
      ]
    }
  ]
})
