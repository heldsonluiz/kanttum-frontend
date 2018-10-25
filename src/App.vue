<template>
  <div id="app">
    <topbar></topbar>
    <section class="app__main">
      <sidebar></sidebar>
      <section class="app__content">
        <breadcrumbs></breadcrumbs>
        <avaliacao></avaliacao>
      </section>
    </section>
  </div>
</template>

<script>
import Avaliacao from './components/Avaliacao'
import Breadcrumbs from './components/Breadcrumbs'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

export default {
  name: 'app',
  components: {
    Avaliacao,
    Breadcrumbs,
    Sidebar,
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
  min-width 360px
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased

.app
  &__main
    display flex
    flex-wrap wrap

  &__content
    display flex
    flex-wrap wrap
    justify-content flex-start
    width calc(100% - 240px)

.icon
  line-height 1em!important

  &.icon--big
    font-size 20px!important
  &.icon--medium
    font-size 14px!important

@media (max-width: 640px)
  .app
    &__content
      width 100%

</style>
