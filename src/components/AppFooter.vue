<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">© andyalu 2019-{{ currentYear }}</p>
      <LinksRowSet />
    </div>
  </footer>
</template>

<script>
import LinksRowSet from "./LinksRowSet.vue";
export default {
  name: "AppFooter",
  components: {
    LinksRowSet,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.footer {
  min-height: 10vh;
}
.footer-text {
  font-size: 0.9rem;
  font-weight: 200;
  color: var(--regular-text-color);
  text-align: center;
}
.footer .links-row-set {
  margin: 0.5rem auto 0 auto;
  justify-content: center;
}
</style>
