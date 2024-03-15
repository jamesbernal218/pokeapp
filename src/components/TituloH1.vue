<template>
  <h1 :class="clases">{{ titulo }}</h1>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
  },
  computed: {
    clases() {
      return "text-3xl font-bold text-gray-800 text-center";
    },
  },
};
</script>
