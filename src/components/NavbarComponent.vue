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
      <span class="">Menu</span>
    </div>
  </nav>
</template>

<style scoped>
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
  color: #f97e00; 
}
</style>