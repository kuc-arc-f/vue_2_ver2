<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/Layouts/Navbar'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>
<style>
</style>
