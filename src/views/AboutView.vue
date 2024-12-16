<template>
  <section class="about-section" id="about">
    <div class="container">
      <h2 class="section-heading">_ About</h2>
      <p class="section-text">
        <strong>Field of activity:</strong> Front End Engineer, Front End
        Developer, UI/UX Engineer
      </p>
      <p class="section-text">
        <strong>Educated at:</strong>
        <a href="http://www.tsatu.edu.ua/" target="_blank"
          >Taurian State Agrotechnological University</a
        >
        (2007 - 2012) <br />
        <strong>Specialty:</strong> Mechanical engineer
      </p>
      <div class="section-text">
        <strong>Certifications</strong> <br />
        <div class="resources-list">
          <div class="resources-item">
            <span>Javascript Tutorial Course, 2019</span> <br />
            <img
              src="../assets/img/cert/SoloLearn_Certificate.jpg"
              alt="Certificate"
              class="cert-img"
              loading="lazy"
            />
          </div>
          <div class="resources-item">
            <span>Cybersecurity Awareness Training, 2023</span> <br />
            <img
              src="../assets/img/cert/cybersecurity_cert.jpg"
              alt="Certificate"
              class="cert-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="section-text">
        <strong>The basic technologies I use:</strong> <br />
        <div class="resources-list">
          <div
            class="resources-item"
            v-for="technology in technologies"
            :key="technology.name"
            :title="technology.name"
          >
            <a
              :href="technology.link"
              class="resources-item-link stack-link"
              target="_blank"
            >
              <img
                :src="require('../assets/img/technologies/' + technology.img)"
                class="resources-item-img stack-img"
                :alt="technology.name"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="section-text">
        <strong>Some resources where I learn and draw inspiration:</strong>
        <br />
        <div class="resources-list">
          <div
            class="resources-item"
            v-for="resource in resources"
            :resource="resource"
            :key="resource.name"
            :title="resource.name"
          >
            <a
              :href="resource.link"
              class="resources-item-link"
              target="_blank"
            >
              <img
                :src="require('../assets/img/resources/' + resource.img)"
                class="resources-item-img"
                :alt="resource.name"
              />
              <span>{{ resource.name }}</span>
            </a>
          </div>
        </div>
      </div>
      <p class="section-text">
        Besides web development, I am interested in music, cinema and sports.
      </p>
      <p class="section-text">
        I also sometimes compose my own beats. Here's some of my latest: <br />
        <audio class="audio" controls style="margin-top: 1rem">
          <source src="../assets/mp3/30042022.mp3" type="audio/mpeg" />
        </audio>
        <br />
        <audio class="audio" controls style="margin-top: 0.5rem">
          <source src="../assets/mp3/fast.mp3" type="audio/mpeg" />
        </audio>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
  data() {
    return {
      technologies: [
        {
          name: "HTML5",
          link: "https://developer.mozilla.org/ru/docs/Web/HTML",
          img: "html-5.png",
        },
        {
          name: "CSS3",
          link: "https://www.w3.org/Style/CSS/#specs",
          img: "css.png",
        },
        {
          name: "JavaScript",
          link: "https://developer.mozilla.org/ru/docs/Web/JavaScript",
          img: "javascript.png",
        },
        {
          name: "Typescript",
          link: "https://www.typescriptlang.org/",
          img: "typescript.png",
        },
        {
          name: "Vue JS",
          link: "https://v3.vuejs.org/",
          img: "vue.png",
        },
        {
          name: "Nuxt",
          link: "https://nuxt.com/",
          img: "nuxt.png",
        },
        {
          name: "React",
          link: "https://react.dev/",
          img: "react.png",
        },
        {
          name: "Next JS",
          link: "https://nextjs.org/",
          img: "nextjs.png",
        },
        {
          name: "Pinia",
          link: "https://pinia.vuejs.org/",
          img: "pinia.png",
        },
        {
          name: "JQuery",
          link: "https://jquery.com/",
          img: "jquery.png",
        },
        {
          name: "WordPress",
          link: "https://wordpress.com/",
          img: "wordpress.png",
        },
        {
          name: "Elementor",
          link: "https://elementor.com/",
          img: "elementor.png",
        },
        {
          name: "Visual Studio Code",
          link: "https://code.visualstudio.com/",
          img: "vsc.png",
        },
        {
          name: "Gulp",
          link: "https://gulpjs.com/",
          img: "gulp.jpg",
        },
        {
          name: "Figma",
          link: "https://www.figma.com/",
          img: "figma.png",
        },
        {
          name: "GIT",
          link: "https://git-scm.com/",
          img: "git.png",
        },
        {
          name: "PHP",
          link: "https://www.php.net/",
          img: "php.png",
        },
        {
          name: "MySQL",
          link: "https://www.mysql.com/",
          img: "mysql.png",
        },
        {
          name: "Node JS",
          link: "https://nodejs.org/uk/",
          img: "nodejs.png",
        },
      ],
      resources: [
        {
          name: "javascript.info",
          link: "https://javascript.info/",
          img: "learn-js.png",
        },
        {
          name: "developer.mozilla.org",
          link: "https://developer.mozilla.org/",
          img: "mdn.png",
        },
        {
          name: "www.vuemastery.com",
          link: "https://www.vuemastery.com/",
          img: "vuemastery.png",
        },
        {
          name: "dou.ua",
          link: "https://dou.ua/",
          img: "dou.png",
        },
        {
          name: "dev.to",
          link: "https://dev.to/",
          img: "dev.webp",
        },
        {
          name: "css-tricks.com",
          link: "https://css-tricks.com/",
          img: "css-tricks.svg",
        },
        {
          name: "www.codewars.com",
          link: "https://www.codewars.com/",
          img: "codewars.png",
        },
        {
          name: "www.youtube.com",
          link: "https://www.youtube.com/",
          img: "youtube.png",
        },
      ],
    };
  },
};
</script>

<style>
.about-section .section-heading {
  color: var(--about-color);
}
.cert-img {
  width: 100%;
  height: auto;
  max-width: 396px;
  margin-top: 0.6rem;
  border-radius: 6px;
}
.resources-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.resources-item {
  list-style: none;
  margin: 0.5rem 0.5rem 0 0;
}
.resources-item-link {
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: var(--navbar-bg-color);
  font-size: 90%;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
}
.resources-item-link:hover {
  box-shadow: inset 0 0 1px 2px var(--about-color);
}
.resources-item-img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}
.stack-img {
  height: 3.2rem !important;
  width: auto !important;
  margin-right: 0 !important;
}
.stack-link {
  display: grid;
  place-items: center center;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}
.about-section .btn-wrapper {
  display: flex;
  justify-content: flex-end;
}
.about-section .btn-wrapper .btn {
  background-color: var(--about-color);
  margin: 1rem 0;
}
.about-section .btn-wrapper .btn:hover {
  box-shadow: 0 0 12px var(--about-color);
}
.audio {
  width: 100%;
  max-width: 380px;
  border-radius: 100px;
  border: var(--box-border);
}
@media (max-width: 1199px) {
  .stack-img {
    height: 2.4rem !important;
    width: auto !important;
    margin-right: 0 !important;
  }
}
@media (max-width: 350px) {
  .resources-item-link {
    padding: 0.3rem 0.5rem;
  }
}
</style>
