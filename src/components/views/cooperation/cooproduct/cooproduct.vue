<template>
   <!-- 合作院校+++++++查询页 -->
   <div class="cooproduct">
      <div class="top">
         <!--<span @click="goback" class="back">返回</span>-->
         <div class="main">
            <!--<p class="title">选校宝</p>-->
            <ul>
               <li> <!-- @click="zhpm" -->
                  <p>综合</p><!-- <img src="../../../../assets/images/updown.png" alt=""> -->
               </li>
               <li @click.prevent="gpa($event)">
                  <p>GPA<img src="../../../../assets/images/top.png" alt=""></p>
               </li>
               <li @click.prevent="toefl($event)">
                  <p>TOEFL<img src="../../../../assets/images/top.png" alt=""></p>
               </li>
               <li @click.prevent="ielts($event)">
                  <p>IELTS<img src="../../../../assets/images/top.png" alt=""></p>
               </li>
            </ul>
         </div>
      </div>
      <div class="sections">
         <div class="noData" v-if="shownoData">
            <p>
               <img src="../../../../assets/images/nodata.png" alt="">
            </p>
            <p class="txt">没有更多记录啦</p>
         </div>
         <div v-if="showyesData">
            <mu-paper :z-depth="1" class="demo-loadmore-wrap">
               <mu-container ref="container" class="demo-loadmore-content">
                  <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" ><!-- @load="load" -->
                     <mu-list>
                        <div>
                           <div class="schoolN">
                              <p>{{schoolName}}</p>
                              <div class="bot">
                                 <img src="../../../../assets/images/pm.png" alt="">
                                 <span>{{pmtype}}：{{zhpms}}</span>
                              </div>
                           </div>
                           <div class="wrap">
                              <ul>
                                 <li>
                                    <p>专业</p>
                                    <p>合作项目</p>
                                 </li>
                                 <router-link :to="'/coodetail?cooperateId='+(val.cooperateId)" v-for="(val, index) in items" :key="index" onfocus="this.blur()">
                                    <p>{{val.major}}</p>
                                    <p>{{val.cooperatePro}}</p>
                                    <img src="../../../../assets/images/toRight.png" alt="">
                                 </router-link>
                              </ul>
                           </div>
                        </div>
                     </mu-list>
                  </mu-load-more>

               </mu-container>
               <p v-if="toTop" @click="returnTop" class="returnTop">
                  <img src="../../../../assets/images/returntop.png" alt="">
               </p>
            </mu-paper>
         </div>

      </div>
   </div>
</template>

<script>
   import {Indicator} from 'mint-ui'
   import {coopSchOrMaj} from '../../../../api'
   import {urlParse} from '../../../../assets/js/urltoJson.js'

   export default {
      name: 'cooproduct',
      data() {
         return {
            toTop: false,
            num: '',
            shownoData: false,
            showyesData: false,
            items: [],
            datas: {},
            schoolName: '',
            zhpms: '',
            refreshing: false,
            loading: false,
            pageNo: 1,
            pageSize: 10000,
            lists: [],
            sss: '综合',
            // items: []
         }
      },
      created() {
         Indicator.open();
         // console.log(this.$route.query.ServiceId);
      },
      mounted() {
         this.getCoop();
         window.addEventListener('scroll', this.scrollToTop);
      },
      watch: {
         "$route": "getCoop"
      },
      methods: {
         scrollToTop(el) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let browserHeight = window.outerHeight
            this.toTop = scrollTop > browserHeight
         },
         // 返回
         goBack() {
            this.$router.replace({path: '/coomajors'});
         },
         gpa(e) {
            console.log('gpa');
            console.log(e);
            // console.log(e.target.parentElement.nextElementSibling.firstElementChild.firstElementChild)
            this.sss = 'GPA'
            e.target.parentElement.nextElementSibling.firstElementChild.firstElementChild.classList.remove('rotate')
            e.target.firstElementChild.classList.add('rotate')
            this.getCoop()
         },
         toefl(e) {
            console.log('toefl')
            this.sss = 'TOEFL'
            e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.classList.remove('rotate')
            e.target.parentElement.nextElementSibling.firstElementChild.firstElementChild.classList.remove('rotate')
            e.target.firstElementChild.classList.add('rotate')
            this.getCoop()
         },
         ielts(e) {
            console.log('ielts')
            this.sss = 'IELTS'
            e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.classList.remove('rotate')
            e.target.firstElementChild.classList.add('rotate');
            this.getCoop();
         },
         getCoop() {
            // let nn = urlParse(this.$route.query.ServiceId);
            // let schoolEngName = JSON.stringify(nn).replace(/"|{|}|schoolEngName|:/g, '').replace(/%20/g, ' ')
            // console.log(this.$route.query.schoolEngName);
            // console.log(schoolEngName);
            let params = {
               order: this.sss,
               schoolEngName: this.$route.query.schoolEngName
            }
            params.pageNo = this.pageNo;
            params.pageSize = this.pageSize;
            coopSchOrMaj(params).then(res => {
               // console.log(res.datas);
               if (res.status === 1) {
                  Indicator.close();
                  this.shownoData = true;
                  this.showyesData = false;
                  this.num = 0;
               } else {
                  Indicator.close();
                  this.shownoData = false;
                  this.showyesData = true;
                  this.schoolName = res.datas.schoolEngName;
                  this.pmtype = res.datas.rankWay;
                  this.zhpms = res.datas.rank;
                  this.items = res.datas.schoolList.list;
               }
            })
         },
         refresh() {
            this.refreshing = true
            this.$refs.container.scrollTop = 0
            let nn = urlParse(window.location.href)
            let schoolEngName = JSON.stringify(nn).replace(/"|{|}|schoolEngName|:/g, '').replace(/%20/g, ' ')
            console.log(schoolEngName)
            let params = {
               order: this.sss,
               schoolEngName: schoolEngName,
            }
            params.pageNo = 1
            params.pageSize = 10000
            setTimeout(() => {
               this.refreshing = false
               coopSchOrMaj(params).then((res) => {
                  console.log(res)
                  setTimeout(() => {
                     this.loading = false
                     this.items = res.datas.schoolList.list
                  }, 1000)
               })
            }, 2000)
         },
         load() {
            this.loading = true;
            let nn = urlParse(window.location.href);
            let schoolEngName = JSON.stringify(nn).replace(/"|{|}|schoolEngName|:/g, '').replace(/%20/g, ' ');
            let params = {
               order: this.sss,
               schoolEngName: schoolEngName
            }
            params.pageNo = ++this.pageNo;
            params.pageSize = 10;
            console.log(params);
            coopSchOrMaj(params).then((res) => {
               console.log(res.datas.schoolList);
               // if (this.items.length == res.datas.schoolList.total) {
               //     this.loadingMore = false;
               //     this.items;
               // } else {
                  let newData = res.datas.schoolList.list;
                  setTimeout(() => {
                     this.loadingMore = false;
                     this.lists.push(res.datas.schoolList.list);
                     this.items = this.items.concat(...newData);
                  }, 1000)
                  // console.log(this.items.length);
                  // if (this.items.length == res.datas.schoolList.total) {
                     this.loadingMore = false;
                  // }
               // }
               
            })
            // this.pageNo = this.pageNo++
         },
         returnTop() {
            // console.log('asasd');
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
      destroyed() {
         window.removeEventListener('scroll', this.scrollToTop);
         window.removeEventListener('popstate', this.goBack, false);
      },
   }
</script>

<style scoped lang="scss">
   .rotate {
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      transition: all 0.1s ease-out 0s;
   }

   .cooproduct {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .top {
         width: 100%;
         height: 3rem;
         line-height: 3rem;
         background: #E6E6E6;
         color: #ffffff;
         position: relative;

         .back {
            position: absolute;
            left: 1.6rem;
         }

         .main {
            text-align: center;
            height: 100%;

            .title {
               font-size: 1.2rem;
            }

            .result {
               line-height: 1.5rem;
            }

            ul {
               display: flex;
               width: 100%;
               height: 100%;
               background: #E6E6E6;

               li {
                  flex: 1;
                  color: #000000;
                  border: 1px solid #ffffff;

                  p {
                     width: 100%;
                     height: 100%;
                     margin: auto;
                     display: flex;
                     justify-content: center;
                     align-items: center;

                     img {
                        width: 10px;
                        vertical-align: text-top;
                        margin-left: 5px;
                     }
                  }
               }
            }

            .num {
               color: #000000;
            }
         }
      }

      .sections {
         width: 100%;
         flex: 1;
         box-sizing: border-box;

         .noData {
            width: 100%;
            height: 100%;

            p {
               display: flex;
               justify-content: center;
               align-items: center;
               margin-top: 8rem;
            }

            .txt {
               width: 100%;
               text-align: center;
               color: #8a8a8a;
               margin-top: 0rem;
            }
         }

         .schoolN {
            width: 100%;
            padding: .8rem;
            margin-top: 1.8rem;
            background: #f1f1f1;

            p {
               font-size: 1rem;
            }

            .bot {
               display: flex;
               align-items: center;
               line-height: 2rem;

               img {
                  width: 1rem;
               }

               span {
                  margin-left: .5rem;
               }
            }
         }

         .wrap {
            width: 100%;
            padding: .8rem;
            font-size: .86rem;

            ul {
               width: 100%;

               li, a {
                  display: inline-block;
                  display: flex;
                  line-height: 1.8rem;
                  position: relative;

                  p {
                     width: 50%;
                     padding: 0 .4rem 0 .4rem;
                  }

                  img {
                     position: absolute;
                     top: 50%;
                     right: 0;
                     margin-top: -.5rem;
                     width: 1.3rem;
                     height: 1rem;
                  }

                  &:first-child {
                     color: #8a8a8a;
                  }
               }

               a {
                  line-height: 3rem;
                  border-bottom: 1px solid #f3f0f0;
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
   }
</style>
