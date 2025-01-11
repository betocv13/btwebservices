<script>
export default {
  name: "RatingComponent",
};
</script>
<template>
    <div class="text-center d-flex justify-content-center align-items-center gap-4">
    <div class="ratings">
        <img src="@/assets/stars.png" alt="Elite Flooring Logo" class="logo" />
<p>beto successfully created my portfolio and i love the way it came out. best in the game.</p>
<p>-Jane Doe</p>
    </div>
    <div class="ratings">
        <img src="@/assets/stars.png" alt="Elite Flooring Logo" class="logo" />
<p>beto successfully created my portfolio and i love the way it came out. best in the game.</p>
<p>-John Doe</p>
    </div>
</div>

</template>
<style scoped>
h1{
    text-decoration: underline;
    
}
.logo{
    width:32px;
}
.ratings{
    width:400px;

}
    </style>