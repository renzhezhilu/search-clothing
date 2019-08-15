import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import about from "./views/About.vue";
export default new Router({
  routes: [
    {
      path: "/",
      name: "about",
      component: about
    },
  ]
});

// import home from "./views/Home.vue";
// export default new Router({
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: home
//     },
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () =>
//         import("./views/About.vue")
//     }
//   ]
// });
