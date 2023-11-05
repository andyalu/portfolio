<template>
  <div class="links-row-set">
    <a
      :href="item.link"
      class="links-row-item"
      v-for="item in items"
      :key="item.name"
      :title="item.name"
      target="_blank"
    >
      <i :class="item.img"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "LinksRowSet",
  data() {
    return {
      items: [
        {
          name: "email",
          text: "yalunin077@gmail.com",
          img: "bi bi-envelope",
          link: "mailto:yalunin077@gmail.com",
        },
        {
          name: "phone",
          text: "+447798501078",
          img: "bi bi-telephone",
          link: "tel:+447798501078",
        },
        {
          name: "whatsapp",
          text: "WhatsApp",
          img: "bi bi-whatsapp",
          link: "https://wa.me/+380632117272",
        },
        {
          name: "telegram",
          text: "@andyalu",
          img: "bi bi-telegram",
          link: "https://telegram.me/andyalu",
        },
        {
          name: "github",
          text: "github.com/andyalu",
          img: "bi bi-github",
          link: "https://github.com/andyalu",
        },
        {
          name: "linkedin",
          text: "LikedIn",
          img: "bi bi-linkedin",
          link: "https://www.linkedin.com/in/andrew-yalunin-1859651a5/",
        },
      ],
    };
  },
};
</script>

<style>
.links-row-set {
  display: flex;
  align-items: center;
}
.links-row-item {
  margin: 0 0.3rem;
  opacity: 0.8;
  transition: all ease 0.2s;
}
.links-row-item i {
  transition: all ease 0.2s;
}
.links-row-item:hover {
  transform: scale(1.3);
  opacity: 1;
  margin: 0 0.5rem;
}
@media (max-width: 1199px) {
  .links-row-item {
    transform: scale(1.3);
    opacity: 1;
    margin: 0 0.5rem;
  }
}
@media (max-width: 350px) {
}
</style>
