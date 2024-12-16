<template>
  <div class="theme-switcher">
    <button class="switch-btn light" @click="switchToLight">
      <i class="bi bi-sun"></i>
    </button>
    <button class="switch-btn dark" @click="switchToDark">
      <i class="bi bi-moon"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  methods: {
    switchToLight() {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    },
    switchToDark() {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    },
    setThemeFromStorage() {
      let themeValue = localStorage.getItem("theme");
      document.documentElement.classList.add(themeValue);
    },
  },
  mounted() {
    this.setThemeFromStorage();
  },
};
</script>

<style>
.theme-switcher {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 5.1rem;
  padding: 0.5rem;
  border-radius: 100px;
  background-color: rgba(150, 150, 150, 0.4);
  backdrop-filter: blur(6px);
  border: var(--box-border);
  transition: 0.5s;
}
.switch-btn {
  display: block;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 100px;
  border: var(--box-border);
  cursor: pointer;
}
.switch-btn i {
  font-size: 16px;
}
.switch-btn.light {
  background-color: #fff;
  margin-right: 0.5rem;
}
.switch-btn.dark {
  background-color: #0c0c0c;
}
.switch-btn.dark i {
  color: #eee;
}
.switch-btn input {
  display: none;
}
@media (max-width: 1100px) {
  .theme-switcher {
    width: 4.4rem;
    padding: 0.4rem;
  }
  .switch-btn {
    width: 1.6rem;
    height: 1.6rem;
  }
  .switch-btn.light {
    margin-right: 0.4rem;
  }
}
</style>
