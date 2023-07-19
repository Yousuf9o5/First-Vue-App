<script setup>
import { ref } from "vue";

const data = ref([
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s",
    header: "Card 1",
    desc: "dinw oiwnfe okewp wp mefn igwn gefl wpnri pingwp pweokfw pwng",
    cardNum: 1,
    checked: false,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s",
    header: "Card 2",
    desc: "dinw oiwnfe okewp wp mefn igwn gefl wpnri pingwp pweokfw pwng",
    cardNum: 2,
    checked: false,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT49ZBu9rM8wdiEw2qOXw9h9oZMNCJkBtaOBAExrhuGg&s",
    header: "Card 3",
    desc: "dinw oiwnfe okewp wp mefn igwn gefl wpnri pingwp pweokfw pwng",
    cardNum: 3,
    checked: false,
  },
]);

const inputs = ref([]);

const incomingInputs = (value, i) => {
  inputs.value[i] = value;
};

const changeColor = (i, value) => {
  data.value[i].checked = value;
};
</script>

<template>
  <div
    v-for="(item, i) in data"
    :key="i"
    :class="[item.checked ? 'checked' : '', 'my-card']"
  >
    <div class="card-img-container">
      <img :src="item.img" :alt="item.cardNum" class="card-image" />
    </div>
    <div class="card-header-container">
      <h3 class="card-header">{{ item.header }}</h3>
    </div>
    <div class="desc">
      {{ item.desc }}
    </div>
    <div class="card-num">
      {{ item.cardNum }}
    </div>
    <div class="card-num">
      <input type="checkbox" @change="changeColor(i, $event.target.checked)" />
    </div>
  </div>
</template>

<style></style>
