<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/Login">Login</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
