import Vue from "vue";
import Router from "vue-router";


// import home from "./views/Home.vue";

Vue.use(Router);


// import about from "./views/About.vue";
// export default new Router({
//   routes: [
//     {
//       path: "/",
//       name: "about",
//       component: about
//     },
//   ]
// });

let router = new Router({
    routes: [
        // {
        //     path: "/",
        //     name: "search",
        //     component: () => import("./search_src/views/Search.vue"),
        //     meta: {
        //         title: 'search-clothing' // 标题设置
        //     }
        // },
        {
            path: "/",
            name: "home",
            component: () =>
                import("./views/Home.vue")
        },
        // {
        //     path: "/about",
        //     name: "about",
        //     component: () =>
        //         import("./views/About.vue")
        // }
    ]
});

//路由守卫
router.beforeEach((to, from, next) => {
    //修改页面title
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })
export default router
