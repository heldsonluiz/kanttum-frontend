<template>
  <div id="app">
    <topbar></topbar>
    <section class="app__main">
      <sidebar></sidebar>
      <section class="app__content">
        <breadcrumbs></breadcrumbs>
      </section>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from './components/Breadcrumbs'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

export default {
  name: 'app',
  components: {
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
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.app
  &__main
    display flex
    flex-wrap wrap
    height calc(100vh - 64px)
    justify-content flex-start

  &__content
    display flex
    flex-wrap wrap
    justify-content flex-start
    width calc(100% - 240px)

.icon-big
  font-size 22px

.icon-medium
  font-size 14px
</style>
