const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-posts-vue" */ "/var/www/html/gridsomepro/myproj/src/templates/BlogPosts.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--post-details-vue" */ "/var/www/html/gridsomepro/myproj/src/pages/PostDetails.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--posts-vue" */ "/var/www/html/gridsomepro/myproj/src/pages/Posts.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--my-new-page-vue" */ "/var/www/html/gridsomepro/myproj/src/pages/myNewPage.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--my-page-vue" */ "/var/www/html/gridsomepro/myproj/src/pages/myPage.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/var/www/html/gridsomepro/myproj/src/pages/About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/var/www/html/gridsomepro/myproj/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/var/www/html/gridsomepro/myproj/src/pages/Index.vue")

export default [
  {
    path: "/blog-posts/:id/",
    component: c1
  },
  {
    path: "/post-details/",
    component: c2
  },
  {
    path: "/posts/",
    component: c3
  },
  {
    path: "/my-new-page/",
    component: c4
  },
  {
    path: "/my-page/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
