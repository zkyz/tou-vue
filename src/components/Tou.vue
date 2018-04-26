<template>
  <component :is="$route.params['id']"/>
</template>

<script>
import main from '../main'

export default {
  data () {
    return main
  }
}
</script>

<style scoped>

</style>
