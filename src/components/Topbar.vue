<template>
  <div class="topbar">
    <fa icon="arrow-left" class="icon-big"/>
    <div class="topbar__title">UNA-01-2018</div>
    <fa icon="book-reader" class="icon-big"/>
    <fa icon="ellipsis-v" class="icon-big"/>
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
