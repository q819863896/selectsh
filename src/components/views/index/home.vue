<template>
   <div class="home">
      <el-button @click="login">登录</el-button>
   </div>
</template>

<script>
   import {E2Login, requestToken, requestUser, loginVerify} from '../../../api.js'

   export default {
      name: 'home',
      data() {
         return {}
      },
      created() {
         // this.toLigin();
      },
      methods: {
         xdfLigin() {
            console.log('as')

         },
         login() {

         },
      },
   }
</script>

<style lang="scss" scoped>
   .home {
      width: 100%;
      height: 100%;
   }
</style>
