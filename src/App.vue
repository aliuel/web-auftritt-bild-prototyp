<template>

<div id="canvas" class="h-full w-full fixed z-20 py-[1vh] px-[6vw] flex flex-col items-end justify-end">
  <h1 class="mb-[-9vh]">Ali</h1>
  <h1 @click="changeName()">Ülgen</h1>
  <h2 class="mb-[-1vh] mt-[-1vh]">Mein erster Versuch an</h2> 
  <h2 class="mb-[4vh]">einem Webauftritt</h2>
  <div id="button" class=" cursor-pointer bg-rose-300 h-12 w-12 rounded-xl pl-[8px] pt-[4px] mb-[3vh]">
    <span class="material-icons text-dark-blue text-4xl">arrow_forward_ios</span>
  </div>
</div>

<div id="main" class="absolute z-10 p-4 pl-6 lg:pt-0 left-0 w-full h-full text-white">
  
  <div id="header" class=" flex items-center">
    <div>
      <h1 class=" tracking-wider text-[6.5vh] mb-[-3.5vh] lg:text-[14vh] lg:mb-[-8vh]">Web </h1>  
      <h1 class=" tracking-tighter text-[2.8vh] lg:text-[6.1vh]">Developer</h1>
    </div>
  </div>

  <!-- <div id="wrapper" class=" p-4 text-2xl overflow-hidden">
    <article class="pr-12">
      <h3 class="italic tracking-tighter">01</h3>
      <h1 class="">Frontend</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, fuga eos. Quidem facilis deserunt magnam dolore aliquam, officiis consequatur? Facere dolores accusamus optio voluptatum quis quae corrupti placeat vel in.</p>
    </article>
    <article class="pr-12">
      <h3 class="italic font-thin tracking-wider">01</h3>
      <h1 class="">Frontend</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, fuga eos. Quidem facilis deserunt magnam dolore aliquam, officiis consequatur? Facere dolores accusamus optio voluptatum quis quae corrupti placeat vel in.</p>
    </article>
    <article class="pr-12">
      <h3 class="italic tracking-tighter">01</h3>
      <h1 class="">Frontend</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, fuga eos. Quidem facilis deserunt magnam dolore aliquam, officiis consequatur? Facere dolores accusamus optio voluptatum quis quae corrupti placeat vel in.</p>
    </article>
  </div> -->

  <div id="banner" class=" border-l-2 border-black fixed h-screen w-12 right-0 top-0">

  </div>

</div>

</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const name = ref('Ali');

function changeName() {
  name.value = "Ila"
}

onMounted(() => {
  let today = new Date;
  let todayArr = today.toString().split(" ");
  console.log(todayArr);
})
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  @font-face {
    font-family: Custom;
    src: url('./assets/nt_wagner_only_personal_use-webfont.woff');
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-family: Custom !important;
  }

  #canvas {
    background-image: url("./assets/9e4a93e2-46cc-42c0-9f06-719d263ab814.jpg");
    background-size: cover;
    background-position: center;
    /* transform: translateX(-20%); */
  }
</style>
