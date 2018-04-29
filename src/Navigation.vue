<template>
  <v-list
    dense
    class="grey lighten-4"
  >
    <template v-for="(item, i) in items">
      <v-layout
        row
        v-if="item.heading"
        align-center
        :key="i"
      >
        <v-flex xs6>
          <v-subheader v-if="item.heading">
            {{ item.heading }}
          </v-subheader>
        </v-flex>
        <v-flex xs6 class="text-xs-right">
          <v-btn small flat>edit</v-btn>
        </v-flex>
      </v-layout>
      <v-divider
        dark
        v-else-if="item.divider"
        class="my-3"
        :key="i"
      />
      <v-list-tile
        :key="i"
        v-else
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="grey--text">
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  props: ['items']
}
</script>
