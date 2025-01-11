<script>
import NavbarComponent from './components/NavbarComponent.vue';
import './styles/base.css';

export default {
  name: 'App',
  components: {
    NavbarComponent,
  },
};
</script>

<template>
  <div id="app">
    <section class="home px-5">

      <!-- Navbar -->
      <div>
        <NavbarComponent class="py-4" />
      </div>

      <!-- Banner -->
      <div class="banner d-flex align-items-center justify-content-center position-relative">
        <img src="@/assets/dsm.jpg" alt="Banner Image" class="img-fluid" />
        <div class="position-absolute text-center text-white" style="z-index: 2;">
          <h1 class="display-5 fw-bold">Building Websites that Matter</h1>
        </div>
      </div>

    </section>
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

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 100%;
  filter: brightness(50%);
}

.banner {
  position: relative;
  height: 80vh; /* Adjusts the height of the banner */
  overflow: hidden;
}

.home {
  height: 100vh;

}

h1 {
  font-family: 'Avenir', sans-serif;
}
</style>