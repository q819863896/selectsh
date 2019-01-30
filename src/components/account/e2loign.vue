<template>
   <div class="logs">
   </div>
</template>

<script>

   export default {
      name: 'e2login',
      data() {
         return {}
      },
      created() {
         const user = sessionStorage.getItem('user')
         if (!user) {
            this.loginBtn()
         } else {
            window.router.push({path: '/login', query: {username: user}})
         }
      },
      methods: {
         loginBtn() {
            // window.location.href = 'http://teste2.staff.xdf.cn/index.aspx?client_id=9867&response_type=code&redirect_uri=http%3A%2F%2Fqtsm.staff.xdf.cn%2Fmo%2Fybg%2Fcallback%3FsourceSys%3DYBG&state=9c4cde1f-81d5-43f7-99c6-fecf77a41679&scope=login'
            // window.location.href = "http://teste2.staff.xdf.cn/index.aspx?client_id=9867&response_type=code&redirect_uri=http://qtmyxx.xdf.cn/mo/ybg/callback?sourceSys=YBG?bizId=123&state=9c4cde1f-81d5-43f7-99c6-fecf77a41679&scope=login";
            window.location.href = 'https://passport.xdf.cn/e2/index.aspx?client_id=77705&response_type=code&redirect_uri=http://qtmyxx.xdf.cn/mo/ybg/callback?sourceSys=YBG?bizId=123&state=9c4cde1f-81d5-43f7-99c6-fecf77a41679&scope=login'
         },
      },
      destroyed() {
         this.loginBtn = null
      },
   }
</script>

<style lang="scss" scoped>
   .logs {
      width: 100%;
      height: 100%;
   }
</style>
