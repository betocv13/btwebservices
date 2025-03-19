<script>
export default {
  name: "CardComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      default: "#",
    },
    iconColor: {
      type: String,
      default: "#6f79b3", // Default color
    },
    tagBgColor: {
        type: String,
        default: "#6f79b3", // Default color
    }, 
    tagTextColor: {
        type: String,
        default: "#6f79b3", // Default color
    },
    iconBox: {
        type: String,
        default: "#6f79b3", // Default color
    }
  },
};
</script>

<template>
    <div class="card">
      <div class="card-inner">
        <div class="box">
          <div class="imgBox">
            <img :src="imageSrc" alt="Card Image" />
          </div>
          <div class="icon" :style="{ backgroundColor: iconColor }">
            <a :href="link" class="iconBox" :style="{ backgroundColor: iconBox }">
              <span class="material-symbols-outlined">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
      <div class="content">
        <h3 class="title">{{ title }}</h3>
        <p>{{ description }}</p>
        <ul>
          <li 
          v-for="(tag, index) in tags" 
          :key="index"
          :style="{ backgroundColor: tagBgColor, color: tagTextColor}"
          >
        {{ tag }}</li>
        </ul>
      </div>
    </div>
  </template>

  <style scoped>

.card {
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  overflow: hidden;
  border: none;
  transition: border .3s, box-shadow .3s, background-color .3s;
}

.card:hover {
  border: 1px solid rgb(0, 0, 0);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.8);

}

.card-inner {
  position: relative;
  width: 100%;
  height: 18.75rem;
  background-color: #051c9e;
  border-radius: 1.25rem;
}
.title{
    text-decoration: underline;
}

.box {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 1.25rem;
  overflow: hidden;
}

.imgBox {
  position: absolute;
  inset: 0;

}

.imgBox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.imgBox:before{
    content: '';
    position: absolute;
    inset: 0;
    background: var(--opacity);
    opacity: 0;
    transition: opacity 0.3s ease;
}
.imgBox:hover::before {
opacity: 1;
}

.icon {
  position: absolute;
  bottom: -0.375rem;
  right: -0.375rem;
  width: 5rem;
  height: 5rem;
  border-top-left-radius: 50%;
 
}

.iconBox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0.625rem;
  border-radius: 50%;
  transition: 0.3s;
  text-decoration: none;
  background-color: red;
}

.iconBox span {
  color: white;
  font-size: 1.5rem;
}

.content {
  padding: 0.938rem 0.635rem;
}

.content h3 {
  text-transform: capitalize;
}

.content p {
  margin: 0.635rem 0 1.25rem;

}

ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  list-style-type: none;
}

ul li {
  text-transform: uppercase;

  color: white;
  font-weight: 800;
  font-size: 0.7rem;
  padding: 0.375rem 0.625rem;
  border-radius: 188rem;
}
</style>
