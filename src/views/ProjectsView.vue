<template>
  <section class="projects-section" id="projects">
    <div class="container">
      <h2 class="section-heading delay-2">_ Projects</h2>
      <MySelect
        :options="options"
        :selectedOption="selectedOption"
        @selectOption="selectOption"
        @sortByCategories="sortByCategories"
      />
      <div class="projects-wrapper">
        <div
          class="project"
          v-for="project in filteredProjects"
          :key="project.name"
          :project="project"
          :title="project.name"
        >
          <span class="project-label" :style="`background:${project.color}`">{{
            project.category
          }}</span>
          <img
            src="../assets/img/projects/laptop.png"
            alt="laptop"
            class="laptop"
            loading="lazy"
          />
          <div class="project-desktop-img">
            <img
              :src="require('../assets/img/projects/' + project.projectImage)"
              :alt="project.name"
              class="project-img"
            />
          </div>
          <div class="phone-img-wrapper">
            <img
              src="../assets/img/projects/phone.png"
              alt="phone"
              class="phone"
            />
            <div class="project-mobile-img">
              <img
                :src="
                  require('../assets/img/projects/' +
                    project.projectMobileImage)
                "
                :alt="project.name"
                class="project-img-mob"
              />
            </div>
          </div>
          <div class="project-info">
            <h3 class="project-name" :style="`color:${project.color}`">
              {{ project.name }}
            </h3>
            <p class="project-description">
              {{ project.description }}
            </p>
            <div class="project-tech-used">
              <img
                v-for="tech in project.techUsed"
                :key="tech.name"
                :src="require('../assets/img/technologies/' + tech.icon)"
                :alt="tech.name"
                class="project-tech-icon"
                width="20"
                height="20"
                :title="tech.name"
              />
            </div>
            <img
              :src="
                require('../assets/img/technologies/' + project.technologyImg)
              "
              :alt="project.category"
              class="project-tag"
            />
            <div class="links-set">
              <a :href="project.githubLink" target="_blank" title="GitHub Code">
                <i class="bi bi-github"></i>
              </a>
              <a :href="project.link" target="_blank" title="Demo">
                <i class="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="../assets/img/thats-all.png"
        alt="that's all folks"
        class="thats-all-img"
      />
    </div>
  </section>
</template>

<script>
import MySelect from "@/components/UI/MySelect";

export default {
  name: "projects",
  components: {
    MySelect,
  },
  data() {
    return {
      selectedOption: "All",
      sortedProjects: [],
      projects: [
        {
          name: "Quiz App Vue",
          description: "Web App created with Vue & Pinia",
          link: "https://andyalu.github.io/quiz-app-vue/",
          githubLink: "https://github.com/andyalu/quiz-app-vue",
          projectImage: "quiz-app-vue.jpg",
          projectMobileImage: "quiz-app-vue-mob.jpg",
          color: "var(--vue-color)",
          category: "vue",
          technologyImg: "vue.png",
          techUsed: [
            {
              name: "Vue",
              icon: "vue.png",
            },
            {
              name: "Pinia",
              icon: "pinia.png",
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
          name: "Code Snippets",
          description: "Web App made with JavaScript",
          link: "https://andyalu.github.io/snippets/",
          githubLink: "https://github.com/andyalu/snippets",
          projectImage: "snippets.jpg",
          projectMobileImage: "snippets-mob.jpg",
          color: "var(--js-color)",
          category: "js",
          technologyImg: "javascript.png",
          techUsed: [
            {
              name: "JavaScript",
              icon: "javascript.png",
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
          name: "C-Market",
          description: "Online Shop Template created with Vue 3, Pinia",
          link: "https://andyalu.github.io/c-market/",
          githubLink: "https://github.com/andyalu/c-market",
          projectImage: "c-market.jpg",
          projectMobileImage: "c-market-mob.jpg",
          color: "var(--vue-color)",
          category: "vue",
          technologyImg: "vue.png",
          techUsed: [
            {
              name: "Vue",
              icon: "vue.png",
            },
            {
              name: "Pinia",
              icon: "pinia.png",
            },
            {
              name: "REST API",
              icon: "rest.png",
            },
          ],
        },
        {
          name: "Avex AI",
          description: "Landing Page",
          link: "https://andyalu.github.io/avex-ai/",
          githubLink: "https://github.com/andyalu/avex-ai",
          projectImage: "avex-ai.jpg",
          projectMobileImage: "avex-ai-mob.jpg",
          color: "var(--layout-color)",
          category: "layout",
          technologyImg: "css.png",
          techUsed: [
            {
              name: "html",
              icon: "html-5.png",
            },
            {
              name: "css",
              icon: "css.png",
            },
            {
              name: "JavaScript",
              icon: "javascript.png",
            },
          ],
        },
        {
          name: "Currency Converter",
          description: "Web App created with JavaScript",
          link: "https://andyalu.github.io/currency-converter/",
          githubLink: "https://github.com/andyalu/currency-converter",
          projectImage: "quick-currency-converter.jpg",
          projectMobileImage: "quick-currency-converter-mob.jpg",
          color: "var(--js-color)",
          category: "js",
          technologyImg: "javascript.png",
          techUsed: [
            {
              name: "js",
              icon: "javascript.png",
            },
            {
              name: "Rest API",
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
          name: "Rick&Morty-Pedia",
          description: "SPA created with React",
          link: "https://andyalu.github.io/rampedia/",
          githubLink: "https://github.com/andyalu/rampedia",
          projectImage: "rampedia.jpg",
          projectMobileImage: "rampedia-mob.jpg",
          color: "var(--react-color)",
          category: "react",
          technologyImg: "react.png",
          techUsed: [
            {
              name: "React",
              icon: "react.png",
            },
            {
              name: "Boostrap",
              icon: "bootstrap.png",
            },
            {
              name: "Rest API",
              icon: "rest.png",
            },
          ],
        },
        {
          name: "Task List",
          description: "Web App created with Vue, Local Storage",
          link: "https://andyalu.github.io/task-list-vue/",
          githubLink: "https://github.com/andyalu/task-list-vue",
          projectImage: "task-list.jpg",
          projectMobileImage: "task-list-mob.jpg",
          color: "var(--vue-color)",
          category: "vue",
          technologyImg: "vue.png",
          techUsed: [
            {
              name: "Vue",
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
          name: "Quiz App JS",
          description: "Web App created with JavaScript",
          link: "https://andyalu.github.io/quiz-app-js/",
          githubLink: "https://github.com/andyalu/quiz-app-js",
          projectImage: "quiz-app-js.png",
          projectMobileImage: "quiz-app-js-mob.png",
          color: "var(--js-color)",
          category: "js",
          technologyImg: "javascript.png",
          techUsed: [
            {
              name: "js",
              icon: "javascript.png",
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
          name: "Enigma Aff",
          description: "Multipage Website",
          link: "https://andyalu.github.io/enigma-aff/",
          githubLink: "https://github.com/andyalu/enigma-aff",
          projectImage: "enigma-aff.jpg",
          projectMobileImage: "enigma-aff-mob.jpg",
          color: "var(--layout-color)",
          category: "layout",
          technologyImg: "css.png",
          techUsed: [
            {
              name: "html",
              icon: "html-5.png",
            },
            {
              name: "css",
              icon: "css.png",
            },
            {
              name: "js",
              icon: "javascript.png",
            },
          ],
        },
        {
          name: "Tic Tac Toe",
          description: "Web Game created with Vue, Tailwind CSS",
          link: "https://andyalu.github.io/tic-tac-toe/",
          githubLink: "https://github.com/andyalu/tic-tac-toe",
          projectImage: "tic-tac-toe.jpg",
          projectMobileImage: "tic-tac-toe-mob.jpg",
          color: "var(--vue-color)",
          category: "vue",
          technologyImg: "vue.png",
          techUsed: [
            {
              name: "Vue",
              icon: "vue.png",
            },
            {
              name: "Tailwind CSS",
              icon: "tailwind.png",
            },
          ],
        },
        {
          name: "AI Fortuna",
          description: "Landing Page",
          link: "https://andyalu.github.io/ai-fortuna/",
          githubLink: "https://github.com/andyalu/ai-fortuna",
          projectImage: "ai-fortuna.jpg",
          projectMobileImage: "ai-fortuna-mob.jpg",
          color: "var(--layout-color)",
          category: "layout",
          technologyImg: "css.png",
          techUsed: [
            {
              name: "html",
              icon: "html-5.png",
            },
            {
              name: "css",
              icon: "css.png",
            },
            {
              name: "js",
              icon: "javascript.png",
            },
          ],
        },
        {
          name: "AIMA Tech",
          description: "Landing Page",
          link: "https://andyalu.github.io/aima-tech/",
          githubLink: "https://github.com/andyalu/aima-tech",
          projectImage: "aima-tech.jpg",
          projectMobileImage: "aima-tech-mob.jpg",
          color: "var(--layout-color)",
          category: "layout",
          technologyImg: "css.png",
          techUsed: [
            {
              name: "html",
              icon: "html-5.png",
            },
            {
              name: "css",
              icon: "css.png",
            },
            {
              name: "js",
              icon: "javascript.png",
            },
          ],
        },
        {
          name: "Instant Weather",
          description: "Web Widget created with React",
          link: "https://andyalu.github.io/weather-app-react/",
          githubLink: "https://github.com/andyalu/weather-app-react",
          projectImage: "weather-app-react.jpg",
          projectMobileImage: "weather-app-react-mob.jpg",
          color: "var(--react-color)",
          category: "react",
          technologyImg: "react.png",
          techUsed: [
            {
              name: "React",
              icon: "react.png",
            },
            {
              name: "html",
              icon: "html-5.png",
            },
            {
              name: "css",
              icon: "css.png",
            },
            {
              name: "Rest API",
              icon: "rest.png",
            },
          ],
        },
        {
          name: "Brokernear",
          description: "Multipage Website",
          link: "https://andyalu.github.io/brokernear/",
          githubLink: "https://github.com/andyalu/brokernear",
          projectImage: "brokernear.png",
          projectMobileImage: "brokernear-mob.png",
          color: "var(--layout-color)",
          category: "layout",
          technologyImg: "css.png",
          techUsed: [
            {
              name: "html",
              icon: "html-5.png",
            },
            {
              name: "css",
              icon: "css.png",
            },
            {
              name: "js",
              icon: "javascript.png",
            },
          ],
        },
        {
          name: "Exercises App",
          description: "SPA created with React",
          link: "https://andyalu.github.io/exer-app/",
          githubLink: "https://github.com/andyalu/exer-app",
          projectImage: "exer-app.jpg",
          projectMobileImage: "exer-app-mob.jpg",
          color: "var(--react-color)",
          category: "react",
          technologyImg: "react.png",
          techUsed: [
            {
              name: "React",
              icon: "react.png",
            },
            {
              name: "html",
              icon: "html-5.png",
            },
            {
              name: "css",
              icon: "css.png",
            },
            {
              name: "Rest API",
              icon: "rest.png",
            },
          ],
        },
        {
          name: "Meal Match",
          description: "JavaScript Game",
          link: "https://andyalu.github.io/meal-match/",
          githubLink: "https://github.com/andyalu/meal-match",
          projectImage: "meal-match.jpg",
          projectMobileImage: "meal-match-mob.jpg",
          color: "var(--js-color)",
          category: "js",
          technologyImg: "javascript.png",
          techUsed: [
            {
              name: "js",
              icon: "javascript.png",
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
          name: "Heliorec",
          description: "Landing Page",
          link: "https://andyalu.github.io/heliorec/",
          githubLink: "https://github.com/andyalu/heliorec",
          projectImage: "heliorec.jpg",
          projectMobileImage: "heliorec-mob.jpg",
          color: "var(--layout-color)",
          category: "layout",
          technologyImg: "css.png",
          techUsed: [
            {
              name: "html",
              icon: "html-5.png",
            },
            {
              name: "css",
              icon: "css.png",
            },
            {
              name: "js",
              icon: "javascript.png",
            },
            {
              name: "splide js",
              icon: "splide.svg",
            },
          ],
        },
        {
          name: "Password Generator",
          description: "Web App created with JavaScript",
          link: "https://andyalu.github.io/passw/",
          githubLink: "https://github.com/andyalu/passw",
          projectImage: "passw-generator.jpg",
          projectMobileImage: "passw-generator-mob.jpg",
          color: "var(--js-color)",
          category: "js",
          technologyImg: "javascript.png",
          techUsed: [
            {
              name: "js",
              icon: "javascript.png",
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
      options: [
        {
          name: "All",
          value: "all",
          background: "background-color:#2196F3",
        },
        {
          name: "Vue JS App",
          value: "vue",
          background: "background-color:var(--vue-color)",
        },
        {
          name: "React App",
          value: "react",
          background: "background-color:var(--react-color)",
        },
        {
          name: "Javascript App",
          value: "js",
          background: "background-color:var(--js-color)",
        },
        {
          name: "Web Page",
          value: "layout",
          background: "background-color:var(--layout-color)",
        },
      ],
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option.name;
      this.sortByCategories(option);
    },
    sortByCategories(option) {
      this.sortedProjects = [];
      let vm = this;
      this.projects.map(function (item) {
        if (item.category === option.value) {
          vm.sortedProjects.push(item);
        }
      });
    },
  },
  computed: {
    filteredProjects() {
      if (this.sortedProjects.length) {
        return this.sortedProjects;
      } else {
        return this.projects;
      }
    },
  },
};
</script>

<style>
.projects-section .section-heading {
  color: var(--projects-color);
}
.projects-section .container {
  width: 96%;
  max-width: 1200px;
}
.projects-wrapper {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: all ease 0.5s;
}
.project {
  flex: 0 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--box-border-radius);
  border: 2px solid #333;
  margin: 0 0.4rem 1.5rem 0.4rem;
  position: relative;
  padding: 0.5rem;
  background-color: var(--navbar-bg-color);
  background-image: url(../assets/img/Noise.png);
  overflow: hidden;
  transition: all ease 0.2s;
}
.project-label {
  display: inline-block;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: capitalize;
  padding: 0.25rem 0.8rem;
  border-radius: 4px;
  border: var(--box-border);
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 5;
}
.laptop {
  display: block;
  width: 100%;
  height: auto;
  transition: all ease 0.4s;
}
.project-desktop-img {
  position: absolute;
  z-index: 1;
  width: 74%;
  aspect-ratio: 8 / 5.1;
  top: 4.5%;
  left: 50%;
  transform: translate(-50%, 0) scale(1);
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: all ease 0.4s;
}
.project-img {
  width: 100%;
  height: auto;
}
.phone-img-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
  width: 26%;
}
.phone {
  width: 100%;
  height: auto;
}
.project-mobile-img {
  position: absolute;
  width: 83.5%;
  aspect-ratio: 1 / 2.01;
  left: 50%;
  transform: translate(-50%, 0);
  top: 3.5%;
  border-radius: 6px;
  overflow: hidden;
}
.project-img-mob {
  width: 100%;
  height: auto;
}

.project-info {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  background: var(--project-info-bg);
  z-index: 7;
  transition: all ease 0.4s;
}
.project-name {
  font-size: 1.8rem;
  line-height: 130%;
  font-weight: 400;
  text-shadow: var(--regular-text-shadow);
  position: relative;
  transition: all ease 0.4s;
}
.project-description {
  margin-top: 0;
  background-color: var(--main-bg-color);
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  border: var(--box-border);
  color: var(--default-text-color);
  line-height: 140%;
  font-weight: 400;
  display: inline-block;
  position: relative;
  font-size: 0;
  height: 0;
  opacity: 0;
  transition: all ease 0.4s;
}
.project-tech-icon {
  margin-right: 0.5rem;
}
.project-tag {
  position: absolute;
  height: 80%;
  width: auto;
  top: 1rem;
  right: 1rem;
  opacity: 0;
  transition: all ease 0.4s;
}
.links-set {
  display: flex;
  align-items: center;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}
.links-set a {
  display: inline-block;
  margin-left: 0.8rem;
}
.links-set a i {
  font-size: 24px;
}

.project:hover {
  background-color: var(--nav-item-bg);
}
.project:hover .project-info {
  backdrop-filter: blur(8px);
  padding: 1rem 1rem;
}
.project:hover .project-description {
  margin-top: 0.7rem;
  font-size: 0.9rem;
  height: auto;
  opacity: 1;
  margin-bottom: 1rem;
}
.project:hover .project-name {
  font-size: 2.2rem;
}
.project:hover .project-tag {
  opacity: 0.2;
}

.projects-section .btn-wrapper {
  display: flex;
  justify-content: flex-end;
}
.projects-section .btn-wrapper .btn {
  background-color: var(--projects-color);
  margin: 1rem 0;
}
.projects-section .btn-wrapper .btn:hover {
  box-shadow: 0 0 12px var(--projects-color);
}
.thats-all-img {
  display: block;
  width: 100%;
  max-width: 22rem;
  margin: 2rem auto;
}
@media (max-width: 1600px) {
}
@media (max-width: 1200px) {
  .project {
    flex: 0 47%;
  }
  .project-name {
    font-size: 1.5rem;
  }
  .project .project-info {
    backdrop-filter: blur(8px);
    padding: 0.5rem 1rem;
  }
  .project:hover .project-info {
    padding: 0.5rem 1rem;
  }
  .project .project-description {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    height: auto;
    opacity: 1;
    margin-bottom: 0.8rem;
  }
  .project:hover .project-description {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .project:hover .project-name {
    font-size: 1.5rem;
  }
  .project .project-tag {
    opacity: 0.2;
  }
  .links-set {
    right: 1rem;
    bottom: 0.5rem;
  }
  .links-set a img {
    width: 20px;
    height: 20px;
  }
}
@media (max-width: 992px) {
}
@media (max-width: 799px) {
  .project {
    flex: 0 100%;
    padding: 0.5rem 0.5rem 3rem 0.5rem;
    position: relative;
    margin-bottom: 1.2rem;
  }
  .project-label {
    font-size: 0.8rem;
    padding: 0.1rem 0.4rem;
  }
  .phone-img-wrapper {
    bottom: 28%;
  }
  .project .project-info {
    padding: 0.2rem 1rem !important;
  }
  .project-name {
    font-size: 1.25rem !important;
  }
  .project .project-description {
    margin-top: 0.2rem !important;
    font-size: 0.75rem !important;
    margin-bottom: 0.5rem !important;
    padding: 0.2rem 0.4rem !important;
  }
  .project-tech-used img {
    width: 18px;
    height: 18px;
  }
  .links-set {
    bottom: 0.2rem;
  }
  .links-set a img {
    width: 18px;
    height: 18px;
  }
}
@media (max-width: 599px) {
}
@media (max-width: 350px) {
  .section-heading {
    font-size: 2.6rem;
  }
  .project-name {
    margin-bottom: 0.1rem;
  }
  .project-image {
    height: 50%;
  }
  .project-description {
    font-size: 0.6rem;
    padding: 0.2rem 1rem;
  }
}
</style>
