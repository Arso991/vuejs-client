import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/layout_home/IndexLayout.vue'
import IndexHome from '@/layout_home/IndexHome.vue'
import SignUp from '@/layout_home/SignUp.vue'
import LogIn from '@/layout_home/LogIn.vue'
import User from '@/layout/UserLayout.vue'
import Home from '@/layout/Home.vue'
import CourseList from '@/layout/CourseList.vue'
import CompleteCourse from '@/layout/CompleteCourse.vue'
import RemoveCourse from '@/layout/RemoveCourse.vue'
import CourseDetails from '@/layout/CourseDetails.vue'
import validation from '@/components/validation.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:Index,
      children : [
        {
          path:'/',
          name:'indexhome',
          component:IndexHome,
        },
        {
          path:'/signup',
          name:'sign',
          component:SignUp,
        },
        {
          path:'/login',
          name:'login',
          component:LogIn,
        }
      ]
    },
    {
      path:'/user',
      name:'user',
      component:User,
      children : [
        {
          path:'/user:user_id',
          name:'user_home',
          component:Home
        },
        {
          path:'/user/courses:user_id',
          name:'course',
          component:CourseList
        },
        {
          path:'/user/course:id',
          name:'coursedetail',
          component:CourseDetails
        },
        {
          path:'/user/complete:user_id',
          name:'complete',
          component:CompleteCourse
        },
        {
          path:'/user/remove:user_id',
          name:'remove',
          component:RemoveCourse
        }
      ]
    },
    {
      path:'/validation',
      name: 'validate',
      component: validation
    }
  ]
})

export default router
