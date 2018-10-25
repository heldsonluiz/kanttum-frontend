<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__title">
      <span class="icon icon--big ico-star-half"></span>
      Avaliação do mentor
    </div>
    <div class="breadcrumbs__timer">
      Esta etapa encerra em 3 dias
      <span class="icon icon--big ico-stopwatch"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'breadcrumbs'
}
</script>

<style lang="stylus" scoped>
.breadcrumbs
  background-color #ffffff
  box-shadow inset 0 -3px 0 0 #eeeeee
  color #757575
  display flex
  height 64px
  justify-content space-between
  padding 20px
  width 100%

  &__title
    text-align left
    font-weight bold
    span
      padding-right 16px

  &__timer
    text-align right
    color #bdbdbd
    font-size 13px

    span
      padding-left 16px

</style>
