<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-simple-table :fixed-header="true" height="90vh">
            <template>
              <thead>
                <tr>
                  <th>API</th>
                  <th>Auth</th>
                  <th>Category</th>
                  <th>Cors</th>
                  <th>Description</th>
                  <th>HTTPs</th>
                  <th>Link</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in tableData" :key="item.API">
                  <td>{{ item.API }}</td>
                  <td>{{ item.Auth }}</td>
                  <td>{{ item.Category }}</td>
                  <td>{{ item.Cors }}</td>
                  <td>{{ item.Description }}</td>
                  <td>{{ item.HTTPS }}</td>
                  <td>{{ item.Link }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "HomePage",
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    Vue.axios.get("https://api.publicapis.org/entries").then((response) => {
      this.tableData = response.data.entries;
      console.log("aaa", response.data.entries);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
