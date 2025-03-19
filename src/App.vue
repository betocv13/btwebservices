<script>
import NavbarComponent from './components/NavbarComponent.vue';
import AboutUsComponent from './components/AboutUsComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MyWorkComponent from './components/MyWorkComponent.vue';
import './styles/base.css';

import LoaderComponent from './components/LoaderComponent.vue';
import ServicesComponent from './components/ServicesComponent.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
    AboutUsComponent,
    LoaderComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    MyWorkComponent,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Simulate a loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Matches the fadeInOut animation duration
  },
};
</script>

<template>
  <div id="app">
     <!-- Loader -->
     <LoaderComponent :isVisible="isLoading" />

<!-- Main Content -->
<div v-if="!isLoading">
  <section id="home" class="home px-3 px-md-5">
    <NavbarComponent class="py-4 px-3" />
    <div class="banner d-flex align-items-center justify-content-center">
      <div class="w-100 h-100 overflow-hidden position-relative">
        <img src="@/assets/webbanner.jpg" alt="Banner Image" class="banner-img img-fluid w-100 h-100" />
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 class="custom-header">Crafting Digital Experiences</h1>
        </div>
      </div>
    </div>
  </section>

    <section id="about" class="About px-3 px-md-5">
      <AboutUsComponent/>
      <hr class="about-line" />
    </section>

    <section id="my-work" class="MyWork px-3 px-md-5">
      <MyWorkComponent/>
    </section>

    <section id="services" class="Services px-3 px-md-5">
      <ServicesComponent/>
    </section>

    <section id="contact" class="Contact px-3 px-md-5">
      <ContactComponent/>
    </section>

    <section id="Footer" class="Footer px-3 px-md-5">
      <FooterComponent/>
    </section>
  </div>
</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background);
}
/* banner image and transition--------------- */
img {
  object-fit: cover;
  filter: brightness(50%);
}
.custom-header {
  font-size: 2.0rem;
  font-family: 'CustomFont3', sans-serif;
  font-weight: bold;
}
.banner {
  height: 80vh;
}
.banner-img {
  object-fit: cover;
  filter: brightness(50%);
  animation: growIn 1.5s ease-in-out forwards;
}
.home{
  min-height: 100vh;
}

@keyframes growIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
/* banner text and transition--------------- */

.banner-text {
  animation: fadeUp 10s ease-in-out 8s forwards;
}
@keyframes fadeUp {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* About --------------- */
.About{
  min-height: 18vh;
}
.about-line {
  border-top: 1px solid white; /* Adjust thickness as needed */
}
@media (max-width: 768px) {
  .custom-header {
    font-size: 1.0rem; 
  }
}
</style>