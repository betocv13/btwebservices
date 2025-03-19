<script>
import NavbarComponent from './components/NavbarComponent.vue';
import AboutUsComponent from './components/AboutUsComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MyWorkComponent from './components/MyWorkComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
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
    BannerComponent,
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
  methods: {
  scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}
};
</script>

<template>
  <div id="app">
    <!-- Loader -->
    <LoaderComponent :isVisible="isLoading" />

    <div v-if="!isLoading">
      <NavbarComponent class="px-3 px-md-5" />

      <!-- Render the full page content ONLY on the home page ("/") -->
      <template v-if="$route.path === '/'">
        <section id="home" class="home px-3 px-md-5">
          <div class="banner d-flex align-items-center justify-content-center">
            <div class="w-100 h-100 overflow-hidden position-relative">
              <img src="@/assets/webbaner.jpg" alt="Banner Image" class="banner-img img-fluid w-100 h-100 rounded" />
              <div class="position-absolute start-50 bottom-0 translate-middle text-white text-center">
                <h1 class="custom-header">Crafting Digital Experiences</h1>
                <button class="btn btn-outline-light btn-md custom-btn" @click="scrollToContact">
                  BOOK A SERVICE
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="About px-3 px-md-5 mt-4">
          <AboutUsComponent />
          <hr class="about-line" />
        </section>

        <!-- My Work should ONLY appear on "/" and NOT on "/work" -->
        <section id="my-work" class="MyWork px-3 px-md-5">
          <MyWorkComponent />
        </section>

        <section id="services" class="Services px-3 px-md-5">
          <ServicesComponent />
        </section>

        <section id="Banner" class="Banner px-3 px-md-5">
          <BannerComponent />
        </section>

        <section id="contact" class="Contact px-3 px-md-5">
          <ContactComponent />
        </section>
      </template>

      <!-- Render other pages like /work -->
      <router-view v-else />

      <FooterComponent />
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
  filter: brightness(99%);
}

.custom-header {
  font-size: 2.5rem;
  font-family: 'CustomFont4', sans-serif;
  font-weight: bold;
  animation: myAnim 2s ease 0s 1 normal forwards;
  letter-spacing: 1px;
}

@keyframes myAnim {
	0% {
		opacity: 0;
		transform: translateY(50px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

.banner {
  height: 80vh;
}

.banner-img {
  object-fit: cover;
  filter: brightness(85%);
  animation: growIn 1.5s ease-in-out forwards;
}

.custom-btn{
  animation: myAnim 2s ease 0s 1 normal forwards;
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
    font-size: 1.3rem; 
    width: 400px;
  }
  .banner {
  height: 75vh;
}
}
</style>