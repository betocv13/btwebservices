<script>
export default {
  name: "LoaderComponent",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
    <div v-if="isVisible" class="loader-container">
      <div class="loader-content">
        <h1 class="loader-text">BENDITOWEBSTUDIO.COM</h1>
      </div>
    </div>
  </template>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background); /* Background color */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's on top of all elements */
}

.loader-content {
  text-align: center;
}

.loader-text {
  color: #fff;
  font-size: 4rem;
  opacity: 0;
  animation: fadeInOut 3s ease-in-out forwards;
  font-family: 'CustomFont4', sans-serif;
  word-spacing: 10px; 
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}
@media (max-width: 768px) {
  .loader-text {
  font-size: 1.6rem;
  word-spacing: 0px; 
}
}
</style>