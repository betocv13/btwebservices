<script>
export default {
  name: "MyWorkComponent",
};
</script>

<template>
    <section class="my-work-section">
      <div class="container text-center">
        <!-- Header -->
        <h2 class="section-header mb-5">My Work</h2>
  
        <!-- Desktop Layout -->
        <div class="row d-none d-md-flex justify-content-between">
          <div class="col-md-4">
            <p class="work-description">Branding</p>
            <img src="@/assets/3.png" alt="Work 1" class="work-image img-fluid" />
          </div>
          <div class="col-md-4">
            <p class="work-description">Shopify</p>
            <img src="@/assets/2.png" alt="Work 2" class="work-image img-fluid" />
          </div>
          <div class="col-md-4">
            <p class="work-description">Web/UX Development</p>
            <img src="@/assets/1.png" alt="Work 3" class="work-image img-fluid" />
          </div>
        </div>
  
        <!-- Mobile Layout (Carousel) -->
        <div id="myWorkCarousel" class="carousel slide d-md-none" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active text-center">
                <p class="work-description">Branding</p>
              <img src="@/assets/3.png" alt="Work 1" class="work-image img-fluid" />
            </div>
            <div class="carousel-item text-center">
              <p class="work-description">Shopify</p>
              <img src="@/assets/2.png" alt="Work 2" class="work-image img-fluid" />
            </div>
            <div class="carousel-item text-center">
              <p class="work-description">Web/UX Development</p>
              <img src="@/assets/1.png" alt="Work 3" class="work-image img-fluid" />
            </div>
          </div>
          <!-- Carousel Controls -->
          <button class="carousel-control-prev" type="button" data-bs-target="#myWorkCarousel" data-bs-slide="prev">
  <span class="control-icon">&lt;</span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#myWorkCarousel" data-bs-slide="next">
  <span class="control-icon">&gt;</span>
  <span class="visually-hidden">Next</span>
</button>
        </div>
      </div>
    </section>
  </template>

<style scoped>
.my-work-section {
  background-color: var(--background); /* Adjust to your desired background */
  color: white;
}

.section-header {
  font-size: 3rem;
  font-weight: bold;
  font-family: 'CustomFont3', sans-serif;
}
.work-description{
  font-family: 'CustomFont3', sans-serif;
}
.work-image {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.control-icon {
  font-size: 2rem; /* Adjust size */
  color: white; /* White text for the icon */
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Optional: Set button size */
  height: 40px;
  text-align: center;
}

.control-icon:hover {
  color: blue;

  transition: 0.3s ease;
}
</style>