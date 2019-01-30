<template>
   <div id="app">
      <!-- <keep-alive> -->
         <router-view/>
      <!-- </keep-alive> -->
   </div>
</template>

<script>
   export default {
      name: 'name',
      methods: {
      }
   }
</script>


<style lang="scss">
   #app {
      #nav {
         width: 100%;
         height: 3rem;
         line-height: 3rem;

         a {
            display: inline-block;
            width: 50%;
            height: 100%;
            text-align: center;
         }
      }
   }
</style>
