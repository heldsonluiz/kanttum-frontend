<template>
  <div id="app">
    <topbar></topbar>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'

export default {
  name: 'app',
  components: {
    Topbar
  }
}
</script>

<style lang="stylus">
*
  box-sizing border-box
  margin 0
  padding 0

#app
  font-family 'Varela Round', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.icon-big
  font-size 22px

.icon-medium
  font-size 18px
</style>
