<script>
import '../styles/base.css';
export default {
  name: 'ContactComponent',
};
</script>

<template>

   <div class="vh-100 p-0">
  <div class="contact-form container">
    <h1 class="mb-4">Contact Me</h1>
    <div class="contact-input">
    <!-- Mobile Layout -->
    <div class="mobile-layout flex-column gap-3">
      <p>First Name</p>
      <hr>
      <p>Last Name</p>
      <hr>
      <p>email@domain.com</p>
      <hr>
      <p>Description...</p>
      <hr>
    </div>
    <div class="submit mt-5 d-flex align-items-center">
    <h2 class="">Submit</h2> 
    <span class="material-symbols-outlined">arrow_outward</span>
    </div>
  </div>
  </div>
</div>
</template>

<style>
.contact-form {
 /* Dark background for contrast */
  color: white;
}

.contact-form label {
  font-weight: bold; /* Make labels more prominent */
}
.btn{
  background-color: var(--medium-brown);
}

</style>