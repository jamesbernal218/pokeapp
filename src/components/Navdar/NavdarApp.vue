<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <ImgPokemon />
      <div class="flex items-center space-x-2">
        <WhatsappIcon />
        <a
          href="whatsapp://send?phone=5573954476"
          class="text-sm text-gray-500 dark:text-white hover:underline"
        >
          (557) 395-4476</a
        >
      </div>
    </div>
  </nav>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <li>
            <router-link to="/team" class="text-gray-900 dark:text-white hover:underline"
              >Buscador</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ImgPokemon from "@/components/Img/ImgPokemon.vue";
import WhatsappIcon from "@/components/Svg/WhatsappIcon.vue";
export default {
  components: {
    WhatsappIcon,
    ImgPokemon,
  },
};
</script>
