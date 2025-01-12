<script>
export default {
  name: "ServicesComponent",
};
</script>

<template>
    <section class="services px-3 px-md-5">
      <div class="container">
        <!-- Service Section 1 -->
        <div class="row align-items-center mb-5">
          <div class="col-md-6">
            <h2 class="service-header">Web Design</h2>
            <p class="service-description">
              Our team crafts stunning, user-friendly designs that are fully responsive. Let us build the perfect digital presence for your business.
            </p>
          </div>
          <div class="col-md-6 text-center">
            <img src="@/assets/img1.jpeg" alt="Web Design" class="img-fluid service-image" />
          </div>
        </div>
  
        <!-- Service Section 2 -->
        <div class="row align-items-center flex-md-row-reverse mb-5">
          <div class="col-md-6">
            <h2 class="service-header">Development</h2>
            <p class="service-description">
              We develop robust, scalable websites tailored to your specific needs. From e-commerce platforms to custom web apps, we've got you covered.
            </p>
          </div>
          <div class="col-md-6 text-center">
            <img src="@/assets/img2.jpeg" alt="Development" class="img-fluid service-image" />
          </div>
        </div>
  
        <!-- Service Section 3 -->
        <div class="row align-items-center mb-5">
          <div class="col-md-6">
            <h2 class="service-header">SEO Optimization</h2>
            <p class="service-description">
              Increase your website's visibility and drive traffic with our cutting-edge SEO strategies. We help you rank higher and reach your target audience.
            </p>
          </div>
          <div class="col-md-6 text-center">
            <img src="@/assets/img5.jpeg" alt="SEO Optimization" class="img-fluid service-image" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .services {
    padding: 3rem 0;
  }
  
  .service-header {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .service-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
  }
  
  .service-image {
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
  </style>