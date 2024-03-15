<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-semibold text-center mb-6">Pokémon App</h1>
      <!-- Barra de búsqueda -->

      <div class="flex items-center border border-gray-300 rounded-lg mb-6">
        <input
          v-model="searchQuery"
          type="text"
          class="py-2 px-4 w-full focus:outline-none"
          placeholder="Buscar Pokémon..."
        />
        <button
          @click="search"
          class="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Buscar
        </button>
      </div>
      <!-- Detalles del Pokémon -->
      <div v-if="pokemon" class="text-center">
        <h2 class="text-xl font-semibold mb-4">{{ pokemon.name }}</h2>
        <img
          :src="pokemon.sprites.front_default"
          alt="Imagen del Pokémon"
          class="mx-auto mb-4"
          style="max-width: 200px"
        />
        <p><strong>Altura:</strong> {{ pokemon.height }}</p>
        <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
        <p>
          <strong>Tipo(s):</strong>
          {{ pokemon.types.map((type) => type.type.name).join(", ") }}
        </p>
      </div>
      <!-- Mensaje de error -->
      <div v-else class="text-red-500 font-semibold text-center">
        No se encontró ningún Pokémon.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      pokemon: null,
    };
  },
  methods: {
    async search() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.searchQuery.toLowerCase()}`
        );
        if (!response.ok) {
          throw new Error("Pokémon no encontrado");
        }
        const data = await response.json();
        this.pokemon = data;
      } catch (error) {
        console.error("Error al buscar el Pokémon:", error);
        this.pokemon = null;
      }
    },
  },
};
</script>
