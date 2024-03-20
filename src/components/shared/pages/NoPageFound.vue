<template>
  <div
    class="min-h-screen flex flex-grow items-center justify-center bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700"
  >
    <div class="rounded-lg bg-white p-8 text-center shadow-xl">
      <h1 class="mb-4 text-4xl font-bold text-gray-800">404</h1>
      <p class="text-gray-700 mb-4">
        Oops! Parece que has entrado a una zona inexplorada.
      </p>
      <SnorlaxImg />
      <BotonReturnBack />
    </div>
  </div>
</template>
<script>
import SnorlaxImg from "@/components/IMG/SnorlaxImg.vue";
import BotonReturnBack from "@/components/botones/BotonReturnBack.vue";
export default {
  components: {
    SnorlaxImg,
    BotonReturnBack,
  },
};
</script>
