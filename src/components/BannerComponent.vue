<script>

export default {
  name: 'BannerComponent',
  methods: {
    scrollToContact() {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script><template>
  <div class="container-fluid d-flex flex-column align-items-center">
    <!-- Main Image Box -->
    <div class="image-box position-relative d-flex align-items-center justify-content-center">
      <!-- Image -->
      <img src="@/assets/web.jpg" class="img-fluid w-100" alt="Main Image" />

      <!-- Overlayed Text & Button -->
      <div class="overlay-text text-center position-absolute text-white">
        <h1 class="fw-bold">READY TO ELEVATE YOUR BRAND?</h1>
        <p class="text-light">
          Let’s build a stunning, high-converting website that sets you apart.
        </p>
        <button class="btn btn-outline-light btn-md mt-5 mt-md-0 custom-btn" @click="scrollToContact">
          BOOK A SERVICE
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Image Box Styling */
.image-box {
  width: 94vw;
  max-height: 50vh;
  animation: myAnim 2s ease 0s 1 normal forwards;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

}

.image-box img {
  filter: brightness(65%);

}

@keyframes myAnim {
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
}


/* Overlay Text Styling */
.overlay-text {
  max-width: 96%;
  text-align: center;
}

.overlay-text h1 {
  font-size: 2.8rem;
  font-weight: 500;
  font-family: 'CustomFont4', sans-serif;

}

.overlay-text p {
  font-size: 1.0rem;
  max-width: 500px;
  margin: 10px auto;
}


@media (max-width: 768px) {
  .overlay-text h1 {
    font-size: 1.0rem;
  }

  .overlay-text p {
    font-size: .8rem;
  }
}
</style>