<template>
  <div>{{ currentParam }}</div>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link> | 
    <router-link :to="{ name: 'other', params: {testValue: currentParam}}">Other</router-link>  | 
    <router-link to="/gameView">Game View</router-link> | 
    <router-link to="/settingView">Setting View</router-link> | 
    <router-link :to="{ name: 'testView', params: {settingValue: currentParam}}">Test View</router-link> | 
    <router-link to="/testTab">Test Tab View</router-link> | 
    <router-link to="/slotGame">Slot Game View</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';


export default {
  // setup() {
  //   const route = useRoute();
  //   const currentParam = ref("123");

  //   watch(
  //     () => route.params,
  //     (newParams) => {
  //       this.currentParam.value = newParams;
  //     },
  //     {immediate: true}
  //   )
  //   return {
  //     currentParam,
  //   }
  // }
}

</script>

<script lang="ts" setup>
import {bus} from 'vue3-eventbus';

var currentParam = ref(-1);
// bus.on('testEvent', e => console.log('testEvent:', e))
bus.on('testEvent', eventLoad)

function eventLoad(value) {
  currentParam.value = value['a']
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
