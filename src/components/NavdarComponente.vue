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
            <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import WhatsappIcon from "./Svg/WhatsappIcon.vue";
import ImgPokemon from "./IMG/ImgPokemon.vue";
export default {
  components: {
    WhatsappIcon,
    ImgPokemon,
  },
};
</script>
