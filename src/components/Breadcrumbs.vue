<template>
  <div class="breadcrumbs">
    <h3 class="breadcrumbs__title">
      <fa icon="star-half-alt" class="icon-big"></fa>
      <span>Avaliação do mentor</span>
    </h3>
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
  height 64px
  padding 20px
  width 100%

  &__title
    font-size 20px
    font-weight bold
    height 64px
    letter-spacing -0.3px

    span
      padding-left 16px

</style>
