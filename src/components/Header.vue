<template>
  <v-app-bar light app clipped-left color="blue" fixed>
    <v-toolbar-title :class="['title', 'font-italic', 'pa-2']">
      {{ title }}
    </v-toolbar-title>
    <v-text-field
      class="mt-5 pa-8"
      background-color="white"
      color="black"
      placeholder="Search for Cards"
      type="text"
      outlined
      dense
    ></v-text-field>
    <v-spacer></v-spacer>

    <v-btn rounded text>
      <router-link class="router-name" to="/cards">Cards</router-link>
    </v-btn>
    <v-btn rounded text>
      <router-link class="router-name" to="/setting">Setting</router-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      title: "Demo App",
    };
  },
};
</script>

<style scoped>
.router-name {
  color: white;
  text-decoration: none;
}
</style>
