<script>
export default {
  name: "FooterComponent",
};
</script>

<template>
  <footer class="footer">
    <div class="container ">
      <div class="row">
        <!-- Left Section -->
        <div class="col-md-4 footer-section">
          <p class="footer-text">Crafting Digital Experiences</p>
        </div>

        <!-- Center Section -->
        <div class="col-md-4 footer-section">
          <p class="footer-contact">
            betobendito@outlook.com<br />
            Des Moines, IA
          </p>
        </div>

        <!-- Right Section -->
        <div class="col-md-4 footer-section">
          <p class="footer-rights">
            ©2025 Bendito Web Studio<br />
            All rights reserved.<br />
            Development: Bendito
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Footer Layout */
.footer {
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  font-family: Arial, sans-serif;
}

.footer-text {
  font-size: 1.2rem;
  font-style: italic;
}

.footer-contact,
.footer-rights {
  font-size: 1rem;
  line-height: 1.6;
}

/* Shared Section Styling */
.footer-section {
  margin-bottom: 1.5rem; /* Add spacing between sections on mobile */
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .footer .row {
    flex-direction: column; /* Stack sections vertically */
  }

  .footer-section {
    text-align: left; /* Align all text to the left */
  }
}
</style>