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
    <section class="home px-5 vh-100">

      <!-- Navbar -->
      <div>
        <NavbarComponent class="py-4" />
      </div>

      <!-- Banner -->
      <div class="banner d-flex align-items-center justify-content-center">
        <div class="w-100 h-100 overflow-hidden position-relative">
          <img src="@/assets/dsm.jpg" alt="Banner Image" class="img-fluid w-100 h-100" />
          <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h1 class="fs-3 fw-bold">Building Websites that Matter</h1>
          </div>
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
  filter: brightness(50%);
}

.banner {
  height: 80vh;
}

h1 {
  font-family: 'Avenir', sans-serif;
}
</style>