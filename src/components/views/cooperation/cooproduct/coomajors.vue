<template>
   <div class="all-product">
      <!-- <div class="top">
          <span @click="goback" class="back">返回</span>
          <div class="main">
             <p class="title">选校宝</p>
          </div>
       </div>-->
      <div class="sections">
         <div class="noData" v-if="shownoData">
            <p>
               <img src="../../../../assets/images/nodata.png" alt="">
            </p>
            <p class="txt">没有更多记录啦</p>
         </div>
         <div v-if="showyesData" style="width:100%;height:100%;">
            <mu-paper :z-depth="1" class="demo-loadmore-wrap" style="border:none;">
               <mu-container ref="container" class="demo-loadmore-content">
                  <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loadingMore" @load="load">
                     <mu-list v-for="(item, index) in items" :key="index">
                        <a @click="toCooPro(item.schoolEngName)" :data-txt="item.schoolEngName"><!-- :to="'/cooproduct?schoolEngName='+(item.schoolEngName)" onfocus="this.blur();" -->
                           <div class="icon">
                              <img src="../../../../assets/images/al.png" alt="">
                           </div>
                           <div class="center">
                              <p class="sqxw">{{item.schoolEngName}}</p>
                              <p class="sqxw">{{item.rankWay}}：{{item.rank}}</p>
                           </div>
                           <div class="todetail">
                              <img src="../../../../assets/images/toRight.png" alt="">
                           </div>
                        </a>
                     </mu-list>
                  </mu-load-more>
               </mu-container>
            </mu-paper>
            <p v-if="toTop" @click="returnTop" class="returnTop">
               <img src="../../../../assets/images/returntop.png" alt="">
            </p>
         </div>
         <!-- <ul>
             <li v-for="(item, index) in items" :key="index" @click="getList(item.serviceId)">
                 <div class="icon">
                     <img src="../../../../assets/images/al.png" alt="">
                 </div>
                 <div class="center">
                     <p class="sqxw">{{item.schoolName}}</p>
                     <p class="sqxw">
                         <img src="../../../../assets/images/pm.png" alt="">
                         <span>综合排名：{{item.zhpm}}</span>
                     </p>
                 </div>
                 <div class="todetail">
                     <img src="../../../../assets/images/toRight.png" alt="">
                 </div>
             </li>
         </ul> -->
      </div>
   </div>
</template>

<script>
   import {Indicator} from 'mint-ui'
   import {cooperByParam, CooperateBySchoolEngName} from '../../../../api'

   export default {
      name: 'all-product',
      data() {
         return {
            toTop: false,
            shownoData: false,
            showyesData: true,
            num: '',
            showData: false,
            lists: [],
            items: [],
            datas: {},
            idx: '',
            refreshing: false,
            loadingMore: false,
            page: 1,
         }
      },
      beforeCreate () {
         sessionStorage.removeItem("coomajItem");
      },
      created() {
         // loadingIcon(this);
         Indicator.open();
         console.log(sessionStorage.getItem("cooSchoolName"));
      },
      mounted() {
         this.getData();
         window.addEventListener('scroll', this.scrollToTop);
         
      },
      watch: {
         // $route(to, from) {
         //    console.log(to);
         // }
         "$route": "getData"
      },
      methods: {
         scrollToTop(el) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let browserHeight = window.outerHeight
            this.toTop = scrollTop > browserHeight
         },
         // 返回按钮
         goBack() {
            // this.$router.replace({path: '/'});
            // this.$router.go(-1)    //返回上一层
            this.$router.replace({path: '/index'});
         },
         toCooPro (id) {
            this.$router.push({
               name: 'cooproduct',
               query: {
                  schoolEngName: id,
               },
            })
         },
         getData() {
            // console.log(sessionStorage.getItem('cooSchoolName'));
            // console.log(sessionStorage.getItem('cooFilter'));
            // if (sessionStorage.getItem('cooFilter')) {
               let params = JSON.parse(sessionStorage.getItem('cooFilter'));
               console.log(params);
               cooperByParam(params).then(res => {
                  console.log(res.datas.list);
                  if (res.status == 0) {
                     this.num = res.datas.total;
                     this.items = res.datas.list;
                     Indicator.close();
                  } else {
                     Indicator.close();
                     this.shownoData = true;
                     this.showyesData = false;
                     this.num = 0;
                  }
               })
            // } else if (sessionStorage.getItem('cooSchoolName')) {
               // let params = {};
               // // let params = JSON.parse(sessionStorage.getItem("cooSchoolName"));
               // params.pageNo = this.page;
               // params.pageSize = 100;
               // params.schoolEngName = JSON.parse(sessionStorage.getItem('cooSchoolName'));
               // console.log(params);
               // CooperateBySchoolEngName(params).then(res => {
               //    // console.log(res);
               //    if (res.status === 1) {      // 没有数据
               //       Indicator.close()
               //       this.shownoData = true
               //       this.showyesData = false
               //       // this.num = 0;
               //    } else {
               //       Indicator.close();
               //       this.shownoData = false;
               //       this.showyesData = true;
               //       this.items = res.datas.list;
               //       // this.num = 0;
               //    }
               // })
            // }
         },
         refresh() {
            this.refreshing = true;
            this.$refs.container.scrollTop = 0;
            // if (sessionStorage.getItem('cooFilter')) {
               let params = {
                  pageNo: this.page,
                  pageSize: 10
               };
               let tjss = JSON.parse(sessionStorage.getItem('cooFilter'));
               let newParams = Object.assign(params, tjss);
               setTimeout(() => {
                  this.refreshing = false
                  cooperByParam(newParams).then((res) => {
                     setTimeout(() => {
                        this.loadingMore = false
                        this.shownoData = false
                        this.showyesData = true
                        this.items = res.datas.list
                     }, 1000)
                  })
               }, 2000)
            // } else if (sessionStorage.getItem('cooSchoolName')) {
               // setTimeout(() => {
               //    this.refreshing = false
               //    CooperateBySchoolEngName({pageNo: this.page, pageSize: 10}).then((res) => {
               //       setTimeout(() => {
               //          this.loadingMore = false
               //          this.shownoData = false
               //          this.showyesData = true
               //          this.items = res.datas.list
               //       }, 1000)
               //    })
               // }, 2000)
            // }

         },
         load() {
            this.loadingMore = true;
            if (sessionStorage.getItem('cooFilter')) {      // 输入条件的-----列表
               let params = JSON.parse(sessionStorage.getItem('cooFilter'));
               params.pageNo = ++this.page;
               params.pageSize = 10;
               // console.log(params);
               cooperByParam(params).then((res) => {
                  if (res.datas.length < 10 || this.items.length == res.datas.total) {
                     this.loadingMore = false;
                     this.items;
                  } else {
                     let newData = res.datas.list;
                     // this.items = this.items.concat(...res.datas);
                     setTimeout(() => {
                        this.loadingMore = false;
                        this.lists.push(res.datas.list);
                        this.items = this.items.concat(...newData);
                        // console.log(this.items);
                        // if (this.items.length == res.datas.total) {
                        //    this.loadingMore = false;
                        // }
                     }, 1000)
                  }
                  
               })
            } else if (sessionStorage.getItem('cooSchoolName')) {       // 输入完学校名---列表
               let params = {}
               // let params = JSON.parse(sessionStorage.getItem("cooSchoolName"));
               params.pageNo = ++this.page
               params.pageSize = 10
               params.schoolEngName = JSON.parse(sessionStorage.getItem('cooSchoolName'))
               console.log(params)
               CooperateBySchoolEngName(params).then((res) => {
                  console.log(res)
                  setTimeout(() => {
                     this.loadingMore = false
                     this.lists.push(res.datas.list)
                     this.items = this.items.concat(...this.list)
                  }, 1000)
               })
            }

         },
         returnTop() {
            console.log('asasd')
            let back = setInterval(() => {
               if (document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset) {
                  document.body.scrollTop -= 100
                  document.documentElement.scrollTop -= 100
               } else {
                  clearInterval(back)
               }
            })
         },
      },
      beforeDestroy () {
         window.location.href = "";
      },
      destroyed() {
         window.removeEventListener('scroll', this.scrollToTop);
         window.removeEventListener('popstate', this.goBack, false);
         sessionStorage.removeItem("cooSchoolName");
         sessionStorage.removeItem("cooFilter");
      },
   }
</script>

<style scoped lang="scss">
   .all-product {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .top {
         width: 100%;
         height: 3rem;
         background: #E6E6E6;
         color: #ffffff;
         line-height: 3rem;
         position: fixed;

         .back {
            position: absolute;
            left: 1.6rem;
            top: 0;
         }

         .main {
            text-align: center;

            .title {
               font-size: 1.2rem;
            }

            .result {
               line-height: 3rem;
            }

            .num {
               color: #000000;
            }
         }
      }

      .sections {
         width: 100%;
         flex: 1;
         border: none;
         /*padding-top: 3rem;*/
         padding-top: 0;

         .noData {
            width: 100%;
            height: 100%;

            p {
               display: flex;
               justify-content: center;
               align-items: center;
            }

            .txt {
               width: 100%;
               text-align: center;
               color: #8a8a8a;
            }
         }

         // .mu-list{
         //     width: 100%;
         //     a{
         //         width: 100%;
         //         height: 100%;
         //         display: flex;
         //         .todetail{
         //            width: 10%;
         //            height: 100%;
         //            display: flex;
         //            justify-content: center;
         //            align-items: center;
         //         }
         //     }
         // }
         ul {
            a {
               display: inline-block;
               width: 100%;
               display: flex;
               border-bottom: 1px solid #cccccc;
               margin: -.5rem 2% 1rem 2%;
               position: relative;

               .icon {
                  width: 24%;
               }

               .center {
                  width: 60%;
                  height: 100%;

                  .sqxw {
                     font-size: .9rem;
                     color: #9d9d9d;
                     padding-top: .2rem;
                     display: flex;
                     align-items: center;

                     img {
                        width: 1.2rem;
                     }

                     span {
                        margin-left: .4rem;
                     }

                     &:nth-child(2) {
                        margin-top: .3rem;
                     }
                  }
               }

               .todetail {
                  width: 10%;
                  height: 100%;
                  position: absolute;
                  right: 1rem;

                  img {
                     width: 60%;
                  }
               }
            }
         }
      }

      .returnTop {
         position: fixed;
         bottom: 2rem;
         right: 2rem;
         width: 3rem;
         height: 3rem;

         img {
            width: 100%;
            height: 100%;
         }
      }

      .mu-paper {
         width: 100%;
         height: 100%;
         border: none;
      }
   }
</style>
