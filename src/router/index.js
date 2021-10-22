import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
    import( "../views/home.vue"),
  },
  {
    path: "/donam",
    name: "donam",
    component: () =>
     import("../views/donam.vue"),
  },{
    path: "/donu",
    name: "donu",
    component: () => 
    import("../views/donu.vue")
  }, {
    path: "/mu",
    name: "mu",
    component: () =>
      import( "../views/mu.vue"),
  },{
     path: "/giaao",
     name: "giaao",
     component: () =>
     import( "../views/giaao.vue"),
  },{
    path: "/giaaonu",
    name: "giaaonu",
    component: () =>
    import( "../views/giaaonu.vue"),
 },{
  path: "/giamu",
  name: "giamu",
  component: () =>
  import( "../views/giamu.vue"),
},{
  path: "/dathang",
  name: "dathang",
  component: () =>
  import( "../views/dathang.vue"),
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
