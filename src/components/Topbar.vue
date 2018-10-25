<template>
  <div class="topbar">
    <span class="icon icon--big ico-left-arrow"></span>
    <div class="topbar__title">UNA-01-2018</div>
    <span class="icon icon--big ico-reader"></span>
    <span class="icon icon--big ico-show-more"></span>
  </div>
</template>

<script>
export default {
  name: 'topbar'
}
</script>

<style lang="stylus" scoped>
.topbar
  background-color #00af7e
  color #e0f5f0
  display flex
  flex-wrap nowrap
  left 0
  justify-content space-between
  padding 21px 20px
  top 0
  right 0

  &__title
    font-size 18px
    font-weight bold
    text-align center
    width 90%
</style>
