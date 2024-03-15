<template>
  <Navdar />

  <div
    class="bg-gradient-to-br from-purple-500 to-indigo-600 min-h-screen flex items-center justify-center"
  >
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <div class="relative">
        <Titulo titulo="PokeApp" />

        <input
          v-model="searchQuery"
          type="text"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar Pokémon..."
          required
        />
        <div>
          <BotonBusqueda :texto="'Buscar'" :search="search" />
        </div>
      </div>
      <div v-if="pokemon" class="text-center">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ pokemon.name }}</h2>
        <img
          :src="pokemon.sprites.front_default"
          alt="Imagen del Pokémon"
          class="mx-auto mb-4"
          style="max-width: 200px"
        />
        <p><strong class="text-gray-700">Altura:</strong> {{ pokemon.height }}</p>
        <p><strong class="text-gray-700">Peso:</strong> {{ pokemon.weight }}</p>
        <p>
          <strong class="text-gray-700">Tipo(s):</strong>
          {{ pokemon.types.map((type) => type.type.name).join(", ") }}
        </p>
        <p>
          <strong class="text-gray-700">Stats:</strong>
          {{
            pokemon.stats
              .map((stats) => stats.stat.name + ": " + stats.base_stat)
              .join(", ")
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from "@/components/TituloH1.vue";
import BotonBusqueda from "@/components/botones/BotonBusqueda.vue";
import Navdar from "@/components/NavdarComponente.vue";
import Swal from "sweetalert2";
import "./assets/css/app.css";
export default {
  components: {
    Titulo,
    BotonBusqueda,
    Navdar,
  },
  data() {
    return {
      searchQuery: "",
      pokemon: null,
    };
  },
  methods: {
    async search() {
      try {
        if (this.searchQuery.trim() === "") {
          throw new Error("Empty search query");
        }
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.searchQuery.toLowerCase()}`
        );

        if (!response.ok) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
        const data = await response.json();
        this.pokemon = data;
      } catch (error) {
        console.error("Error al buscar el Pokémon:", error);
        this.pokemon = null;
        if (error.message === "Empty search query") {
          Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "Por favor ingresa el nombre de un Pokémon antes de buscar.",
          });
        }
      }
    },
  },
};
</script>
