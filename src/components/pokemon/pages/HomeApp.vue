<template>
  <div class="h-screen flex items-center justify-center bg-blue-600 text-white">
    <div class="text-center">
      <ImgHome />
      <h1 class="text-4xl font-bold mb-2">Jaime Jair Bernal Guzmán</h1>
      <p class="text-lg mb-8">Desarrollador Web</p>
      <p class="text-sm opacity-80">¡Bienvenido a mi proyecto de portafolio "PokeApp"!</p>
    </div>
  </div>
</template>
<script>
import ImgHome from "@/components/Img/ImgHome.vue";
export default {
  components: {
    ImgHome,
  },
};
</script>
