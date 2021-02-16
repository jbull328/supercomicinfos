<template>
  <div id="app">
    <HeroList />
    
  </div>
</template>

<script>
  import HeroList from "./components/HeroList"

  export default {
    name: 'App',
    components: {
      HeroList
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
