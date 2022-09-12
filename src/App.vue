<template>
  <v-app>
    <v-main>
      <HeaderBar></HeaderBar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from "./components/Header.vue";
export default {
  name: "App",
  created() {},
  components: {
    HeaderBar,
  },
};
</script>
