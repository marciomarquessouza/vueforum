import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/PageHome';
import Forum from '@/components/pages/PageForum';
import Profile from '@/components/pages/PageProfile';
import Category from '@/components/pages/PageCategory';
import PageThreadShow from '@/components/pages/PageThreadShow';
import NotFound from '@/components/pages/PageNotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/thread/:id',
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true,
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true,
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true,
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile,
      props: true,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
  mode: 'history',
});
