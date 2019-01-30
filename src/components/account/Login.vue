<template>
   <div class="login_box"></div>
</template>
<script>
   import {requestUser, requestToken} from '../../api.js'
   import {urlParse} from '../../assets/js/urltoJson.js'

   export default {
      data() {
         return {
            logining: false,
            loginInfo: {
               account: '',
               password: '',
            },
            verify: [],
            loginRules: {
               account: [
                  {required: true, message: '请输入账号', trigger: 'blur'},
               ],
               password: [
                  {required: true, message: '请输入密码', trigger: 'blur'},
               ],
               verify: [
                  {type: 'array', required: true, message: '请输入验证码', trigger: 'blur'},
               ],
            },
            isRememberPsw: localStorage.getItem('isRememberPsw') === 'true',
         }
      },

      created() {
         let user = urlParse(window.location.href).username
         if (user) {
            sessionStorage.setItem('user', user)
            this.handleSubmit2(user)
         }
      },
      methods: {
         handleReset2() {
            this.$refs.loginInfo.resetFields()
         },

         handleSubmit2(user) {
            // this.$refs.loginInfo.validate((valid) => {
            // if (valid) {
            const loading = this.$loading({
               lock: true,
               text: '正在登录···',
               spinner: 'el-icon-loading',
               background: 'rgba(7,184,6, 0.1)',
            })
            let params = {
               username: user + '@xdf.cn',
               password: user + '@xdf.cn',
               grant_type: 'password',
               scope: 'read',
               client_id: 'rajithapp',
               client_secret: 'secret',
            }

            requestToken(params).then(res => {
               let token = res.value
               this.logining = false
               if (token) {
                  sessionStorage.setItem('token', token)
                  // let params = {}
                  // requestUser(params).then(res => {
                  //    this.logining = false
                  //    //NProgress.done();
                  //    let {message, status, datas} = res
                  //    console.log(res)
                  //    if (status !== 0) {
                  //       if (status === '' || status === undefined || status === null) {
                  //          this.$message.error('系统登录超时！')
                  //       } else {
                  //          this.$message({duration: 5000, showClose: true, message: message, type: 'error'})
                  //       }
                  //    } else {
                  //       // sessionStorage.setItem('user', JSON.stringify(datas))
                  //       this.$router.push({path: '/index'})
                  //    }
                  // })
                  this.$router.push({path: '/index'})
               } else {
                  // sessionStorage.removeItem('token')
                  // sessionStorage.removeItem('user')
                  this.$message.error('输入信息错误!')
               }
               // this.createCode();
               loading.close()
            })
            this.rememberPsw()
         },

         //是否记住密码？？
         rememberPsw() {
            localStorage.setItem('isRememberPsw', this.isRememberPsw)
            if (this.isRememberPsw === true) {
               localStorage.setItem('loginInfo', JSON.stringify(this.loginInfo))
            } else {
               let loginInfo = {
                  account: '',
                  password: '',
               }
               localStorage.setItem('loginInfo', JSON.stringify(loginInfo))
            }
         },
         // 图片验证码
         createCode() {
            // loginVerify().then(res => {
            //    let {message, status, datas} = res
            //    if (status === 0) {
            //       let {captcha, catoken} = datas
            //       this.verifyCode = captcha
            //       sessionStorage.setItem('catoken', catoken)
            //    } else if (status === '' || status === undefined || status === null) {
            //       this.$message({
            //          type: 'error',
            //          message: '系统登录超时！',
            //       })
            //    } else {
            //       this.$message({
            //          type: 'error',
            //          message: message,
            //       })
            //    }
            // })
         },
      },
      mounted() {
         // let that = this;
         // if (localStorage.getItem('loginInfo')) {
         //     let loginInfo = localStorage.getItem('loginInfo');
         //     let loginJSON = JSON.parse(loginInfo);
         //     // let {account, password} = loginJSON;
         //     this.$set(this.loginInfo, 'account', loginJSON.account);
         //     this.$set(this.loginInfo, 'password', loginJSON.password);
         // }
         window.addEventListener('keydown', (e) => {
            if (e.keyCode === 13 || e.keyCode === 'enter') {
               this.handleSubmit2()
            }
         })
      },
   }
</script>

<style lang="scss">
   .login_box {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      border-top: 1px solid transparent;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      position: relative;
      overflow: hidden;

      .long_logo {
         width: 210px;
         height: 34px;
         position: absolute;
         top: 80px;
         left: 50%;
         margin-left: -105px;
      }

      .login-container {
         -webkit-border-radius: 5px;
         border-radius: 5px;
         -moz-border-radius: 5px;
         background-clip: padding-box;
         margin: 180px auto;
         width: 350px;
         padding: 35px 35px 15px 35px;
         background: #ffffff;
         border: 1px solid #eaeaea;
         box-shadow: 0 0 40px 6px #cac6c6;

         .title {
            margin: 0px auto 40px auto;
            text-align: center;
            color: #505458;
         }

         .remember {
            margin: 0 0 35px 0;
         }
      }

      .el-input__inner {
         line-height: 1;
      }
   }

   .acc_suffix {
      width: auto;
      height: 100%;
      position: absolute;
      top: 0;
      right: 10px;
   }
</style>
