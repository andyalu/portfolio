import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [
      {
        name: "Quiz App",
        description: "Web App created with Vue JS",
        link: "https://yalu.tech/projects/quiz-app-vue/",
        githubLink: "https://github.com/andyalu/quiz-app-vue",
        projectImage: "quiz-app.png",
        projectMobileImage: "quiz-app-mob.png",
        color: "var(--vue-color)",
        category: "vue",
        technologyImg: "vue.png",
        techUsed: [
          {
            name: "vue",
            icon: "vue.png",
          },
          {
            name: "html",
            icon: "html-5.png",
          },
          {
            name: "css",
            icon: "css.png",
          },
        ],
      },
      {
        name: "MovieApp",
        description: "SPA created with Vue JS, REST API, Nuxt JS",
        link: "https://yalu.tech/projects/movie-app/",
        projectImage: "movie-app.jpg",
        projectMobileImage: "movie-app-mob.jpg",
        color: "color:var(--vue-color)",
        category: "vue",
        technologyImg: "vue.png",
        techUsed: [
          {
            name: "vue",
            icon: "vue.png",
          },
          {
            name: "nuxt",
            icon: "nuxt.png",
          },
          {
            name: "rest",
            icon: "rest.png",
          },
          {
            name: "html",
            icon: "html-5.png",
          },
          {
            name: "css",
            icon: "css.png",
          },
        ],
      },
      {
        name: "CryptoView",
        description: "SPA created with Vue JS, REST API, Quasar UI",
        link: "https://yalu.tech/projects/cryptoview/#/",
        projectImage: "cryptoview.jpg",
        projectMobileImage: "cryptoview-mob.jpg",
        color: "color:var(--vue-color)",
        category: "vue",
        technologyImg: "vue.png",
        techUsed: [
          {
            name: "vue",
            icon: "vue.png",
          },
          {
            name: "quasar",
            icon: "quasar.png",
          },
          {
            name: "rest",
            icon: "rest.png",
          },
          {
            name: "html",
            icon: "html-5.png",
          },
          {
            name: "css",
            icon: "css.png",
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {},
});
