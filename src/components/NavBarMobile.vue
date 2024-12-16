<template>
  <div class="navbar mobile" @click="closeMenu">
    <div class="navbar-content" @click.stop>
      <button class="btn menu-close-btn" @click="closeMenu">
        <i class="bi bi-x-lg"></i>
      </button>
      <div class="navbar-intro">
        <div class="navbar-intro-avatar"></div>
        <h3 class="navbar-intro-name">ANDREW YALUNIN</h3>
        <p class="navbar-intro-position">Front End Developer</p>
      </div>
      <div id="nav" class="nav-menu">
        <router-link
          v-for="navlink in navlinks"
          :key="navlink.link"
          :to="navlink.link"
          @click="closeMenu"
        >
          <i :class="navlink.img" :style="navlink.color"></i>
          <span class="navlink-text" :style="navlink.color">{{
            navlink.name
          }}</span>
        </router-link>
      </div>
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script>
import ThemeSwitcher from "@/components/UI/ThemeSwitcher.vue";

export default {
  name: "NavBarMobile",
  components: {
    ThemeSwitcher,
  },
  data() {
    return {
      navlinks: [
        {
          name: "Home",
          link: "/",
          color: "color:var(--home-color)",
          img: "bi bi-house-door",
        },
        {
          name: "About",
          link: "/about",
          color: "color:var(--about-color)",
          img: "bi bi-info-circle",
        },
        {
          name: "Projects",
          link: "/projects",
          color: "color:var(--projects-color)",
          img: "bi bi-code-slash",
        },
        {
          name: "Contact",
          link: "/contact",
          color: "color:var(--contact-color)",
          img: "bi bi-chat-left-dots",
        },
      ],
    };
  },
  methods: {
    closeMenu() {
      document.querySelector(".navbar.mobile").style.left = "-100%";
    },
  },
};
</script>

<style>
.navbar.mobile {
  display: none;
}
@media (max-width: 600px) {
  .navbar.mobile {
    display: block;
    left: -100%;
    top: 0;
    width: 100%;
    height: auto;
    min-height: 100vh;
    max-height: 19rem;
    overflow-y: scroll;
    padding: 0;
  }
  .navbar.mobile .navbar-content {
    width: 75%;
    min-height: 100vh;
    padding: 2rem 1.5rem;
    backdrop-filter: blur(6px);
    box-shadow: var(--box-shadow);
    background-color: var(--navbar-mobile-bg-color);
    border-right: var(--box-border);
  }
  .navbar.mobile .navbar-intro-avatar {
    width: 9rem;
    height: 9rem;
  }
  .navbar.mobile .nav-menu a {
    justify-content: flex-start;
  }
  .navbar.mobile .nav-menu a i {
    font-size: 18px;
    margin-right: 1rem;
  }
  .navbar.mobile .navlink-text {
    display: inline-block;
  }
}
@media (max-width: 350px) {
  .navbar.mobile .navbar-intro {
    height: 16rem;
  }
  .navbar.mobile .navbar-intro-avatar {
    width: 6rem;
    height: 6rem;
  }
  .navbar.mobile .nav-menu a {
    padding: 0.8rem 10%;
  }
}
</style>
