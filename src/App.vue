<template>
  <div id="app">
    <NavdarApp />
    <router-view />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    NavdarApp: defineAsyncComponent(() =>
      import(
        /*webpackChunkName: "Navdar"*/
        "@/components/Navdar/NavdarApp"
      )
    ),
  },
};
</script>
