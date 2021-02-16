<template>
  <div id="app">
    <DataExample />
    
  </div>
</template>

<script>
  import DataExample from "./components/DataExample"

  export default {
    name: 'App',
    components: {
      DataExample
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
