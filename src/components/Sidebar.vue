<template>
  <div class="sidebar">
    <div class="progress">
      <h3 class="progress__time">
        Encerrará em 14 dias
      </h3>
      <div class="progress__base">
        <div class="progress__completo" style="width:87.5%">
        </div>
      </div>
    </div>
    <ul>
      <li v-for="item in menu" :key="item.title" class="sidebar__list-item" :class="{ 'sidebar__list-item--selected': item.status === 'selected' }">
        <div class="item__title">
          {{item.title}}
          <span v-show="item.status === 'ok'" class="item__icon">
            <span class="icon icon--medium ico-tick"></span>
          </span>
        </div>
        <div class="item__description">
          {{item.descricao}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      menu: [
        { title: 'evidências', descricao: 'Lorem Ipsum', status: 'ok' },
        { title: 'auto-reflexão', descricao: 'Lorem Ipsum', status: 'ok' },
        { title: 'feedback', descricao: 'Lorem Ipsum', status: 'ok' },
        { title: 'avaliação do mentor', descricao: ' Avalie o trabalho realizado pelo seu mentor durante este ciclo de formação', status: 'selected' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.progress
  margin 24px 0

  &__time
    color #bdbdbd
    font-size 12px
    font-weight 500
    line-height 1.43
    margin-bottom 13px

  &__base,
  &__completo
    background-color #eeeeee
    border-radius 5px
    height 8px
    position relative

  &__completo
    background-color #4caf50
    position absolute

.sidebar
  background-color #f5f5f5
  box-shadow inset -1px 0 0 0 #eeeeee
  padding 0 20px 0
  width 240px

  & ul
    list-style none
    margin 0 -20px

  &__list-item
    padding 20px
    position relative
    width 100%

  &__list-item .item__title
    color #4caf50
    font-size 12px
    font-weight 600
    text-transform uppercase

  &__list-item .item__icon
    height 20px
    position absolute
    right 20px
    width 20px

  &__list-item .item__description
    display none

  &__list-item--selected
    background-color rgba(0, 0, 0, 0.02)
    boder-right 2px solid #00af7e
    box-shadow inset 0 -1px 0 0 #eeeeee, inset -2px 0 0 0 #00af7e
    display block
    height 118px
    width 240px

  &__list-item--selected .item__title
    color #00af7e
    font-size 12px
    margin-bottom 8px

  &__list-item--selected .item__icon
    display none

  &__list-item--selected .item__description
    color #757575
    display block
    font-size 14px
    font-weight 500
    line-height 1.29em
</style>
