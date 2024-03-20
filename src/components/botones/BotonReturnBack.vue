<template>
  <div class="flex items-center justify-center">
    <button
      @click="goBack"
      class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
    >
      Regresar
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
