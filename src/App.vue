<template>
  <v-app>
    <v-navigation-drawer
      fixed
      clipped
      class="grey lighten-4"
      app
      v-model="drawer"
    >
      <navigation :items="items"/>
    </v-navigation-drawer>

    <v-toolbar color="light-blue darken-3" app absolute clipped-left>
      <v-toolbar-side-icon @click="pulling"/>
      <span class="title white--text ml-3 mr-5">Something</span>
      <v-spacer/>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './Navigation'

export default {
  data () {
    return {
      drawer: false,
      items:  []
    }
  },
  components: {
    Navigation
  },
  methods:    {
    pulling () {
      this.drawer = !this.drawer
    }
  },
  created () {
    fetch('/static/menus.json')
      .then(res => res.json())
      .then(res => {
        this.items = res
      })
  }
}
</script>
