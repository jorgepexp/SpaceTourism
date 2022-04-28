import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
  },
  {
    path: '/destination',
    name: 'Destination',
    props: { url: '' },
    component: () =>
      import(
        /* webpackChunkName: "destination" */ '../views/DestinationView.vue'
      ),
  },
  {
    path: '/crew',
    name: 'Crew',
    props: { url: '' },
    beforeEnter: (to, from) => {
      console.log(`to: `, to, `from: `, from);
    },
    component: () =>
      import(/* webpackChunkName: "crew" */ '../views/CrewView.vue'),
  },
  {
    path: '/technology',
    name: 'Technology',
    props: { url: '' },
    component: () =>
      import(
        /* webpackChunkName: "technology" */ '../views/TechnologyView.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
