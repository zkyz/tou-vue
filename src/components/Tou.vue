<template>
  <component :is="components[$route.params.id]"/>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      components: []
    }
  },
  created () {
    (async () => {
      fetch('/static/programs.json')
        .then(res => res.json())
        .then(res => {
          res.forEach(name => {
            this.components[name] = Vue.component(name, function (resolve) {
              fetch(`/static/${name}.html`)
                .then(res => res.text())
                .then(res => {
                  console.log(name)

                  resolve({
                    template: res
                  })
                })
            })
          })
        })
    })()
  }
}
</script>

<style scoped>

</style>
