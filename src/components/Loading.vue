<template>
  <div id="loading">
    <img src="./../assets/spinner.png" alt="spinner" class="rotate">
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
#loading
  background-color rgba(212, 212, 212, 0.6)
  display flex
  z-index 100000
  align-items center
  justify-content center
  position fixed
  top 0
  bottom 0
  left 0
  right 0

.rotate
  height 70px
  animation example 1.75s linear infinite

@keyframes example
  from
    transform rotate(0)
  to
    transform rotate(360deg)
</style>
