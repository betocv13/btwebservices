<template>
  <nav class="navbar position-relative">
    <!-- Company Name -->
    <h1 class="logo m-0">BENDITO</h1>
    <!-- Menu Text -->
    <div class="menu-text" @click="toggleMenu">
      <span>Menu</span>
    </div>

    <!-- Fullscreen Menu -->
    <div v-if="showMenu" class="fullscreen-menu">
      <ul class="menu-list px-3 px-md-5">
        <li @click="scrollToSection('home')">
          <span class="section-name">Home</span>
          <span class="section-number">1</span>
        </li>
        <hr>
        <li @click="scrollToSection('about')">
          <span class="section-name">About</span>
          <span class="section-number">2</span>
        </li>
        <hr>
        <li @click="scrollToSection('my-work')">
        <span class="section-name">My Work</span>
        <span class="section-number">3</span>
        </li>
        <hr>
        <li @click="scrollToSection('services')">
          <span class="section-name">Services</span>
          <span class="section-number">3</span>
        </li>
        <hr>
        <li @click="scrollToSection('contact')">
          <span class="section-name">Contact</span>
          <span class="section-number">4</span>
        </li>
        <hr>
      </ul>
      <button class="close-button px-3 px-md-5" @click="toggleMenu">Close</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      showMenu: false, // Controls the visibility of the menu
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        this.showMenu = false; // Close the menu after navigation
      }
    },
  },
};
</script>

<style scoped>
/* Navbar styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo {
  font-size: 1.8rem;
  color: #ffffff;
  font-family: 'CustomFont3', sans-serif;
}

.menu-text {
  font-size: 1.8rem;
  color: #ffffff;
  cursor: pointer;
  font-family: 'CustomFont3', sans-serif;
}

.menu-text:hover {
  color: #099f48;
}

/* Fullscreen menu styles */
.fullscreen-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000; /* Black background */
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.menu-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-family: 'CustomFont3', sans-serif;
  padding: 1rem 0;
  cursor: pointer;
}

.menu-list li:hover {
  color: #099f48;
}

.section-name {
  text-align: left;
  flex: 1; /* Push the number to the right */
}

.section-number {
  text-align: right;
}

hr {
  width: 100%;
  border: none;
  border-top: 1px solid #fff;
  margin: 0.5rem 0;
}

/* Close Button */
.close-button {
  margin-top: 2rem;
  align-self: flex-end;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.close-button:hover {
  color: #099f48;
}
</style>