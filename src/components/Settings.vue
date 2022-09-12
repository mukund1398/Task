<template>
  <div>
    <v-container>
      <v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        inset
        label="Vuetify Theme Dark"
        persistent-hint
      ></v-switch>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SettingPage",
};
</script>
