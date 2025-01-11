<script>


export default {
  name: 'NavbarComponent',
};
</script>

<template>
  <nav class="navbar ">
    <!-- Company Name -->
    <h1 class="logo m-0">BENDITO</h1>
    <!-- Menu Text -->
    <div class="menu-text">
      <span class="fw-bold">Menu</span>
    </div>
  </nav>
</template>

<style scoped>
.navbar {

}

.logo {
  font-size: 1.8rem;
  color: #ffffff;
  font-family: 'CustomFont3', sans-serif; /* Apply Garet font */
}

.menu-text {
  font-size: 1.8rem;
  color: #ffffff;
  cursor: pointer;
}

.menu-text:hover {
  color: #000; /* Darker text on hover */
}
</style>