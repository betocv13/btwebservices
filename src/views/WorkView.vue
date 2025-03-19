<script>

export default {
  name: 'WorkView',
  components: {
  }
};
</script>

<template>
  <section class="px-3 px-md-5 pt-2 pb-5">
   <div class="banner d-flex align-items-center justify-content-center position-relative">
    <img src="@/assets/pelo.jpg" alt="Banner Image" class="banner-img img-fluid w-100 h-100 rounded" />
    <!-- Text Overlay -->
    <p class="pelo mrs-saint-font text-white position-absolute top-50 start-50 translate-middle z-3">
      Pelo
    </p>
   </div>
  </section>
</template>

<style scoped>
/* banner image and transition--------------- */
img {
  object-fit: cover;

}
.work-page {
  min-height: 100vh;

}
.banner {
  height: 80vh;
}
.banner-img {
  object-fit: cover;
}
.pelo{
    font-size: 15rem;
}
</style>