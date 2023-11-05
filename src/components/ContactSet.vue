<template>
  <div class="contact-set">
    <a
      :href="contact.link"
      class="contact-item"
      v-for="contact in contacts"
      :key="contact.name"
      target="_blank"
    >
      <i :class="contact.img"></i>
      <span>{{ contact.text }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "ContactSet",
  data() {
    return {
      contacts: [
        {
          name: "location",
          text: "Long Melford, Sudbury, UK",
          img: "bi bi-geo-alt",
          link: "https://www.google.com/maps/place/Long+Melford,+Sudbury/@52.0793216,0.7013253,14z/data=!3m1!4b1!4m6!3m5!1s0x47d8545f1342987b:0x5c8bb4fd479aa9a3!8m2!3d52.074356!4d0.71633!16zL20vMDg3Z2Rf?entry=ttu",
        },
        {
          name: "whatsapp",
          text: "WhatsApp",
          img: "bi bi-whatsapp",
          link: "https://wa.me/+380632117272",
        },
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
        {
          name: "telegram",
          text: "@andyalu",
          img: "bi bi-telegram",
          link: "https://telegram.me/andyalu",
        },
      ],
    };
  },
};
</script>

<style>
.contact-set {
  width: 100%;
}
.contact-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 1.6rem;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  background-color: var(--main-bg-color);
  backdrop-filter: blur(5px);
  border-radius: var(--box-border-radius);
  border: var(--box-border);
  box-shadow: var(--box-shadow);
  margin-bottom: 0.3rem;
  transition: all 0.2s ease;
}
.contact-item:hover {
  background-color: var(--contact-item-hover-bg);
  border: var(--box-border);
}
.contact-item i {
  margin-right: 1.2rem;
  font-size: 20px;
  height: auto;
}
@media (max-width: 600px) {
  .contact-item {
    padding: 1rem;
    font-size: 0.9rem;
  }
}
@media (max-width: 350px) {
  .contact-item {
    padding: 1.5rem 0.8rem;
    font-size: 0.9rem;
  }
  .contact-item img {
    margin-right: 0.5rem;
  }
}
</style>
