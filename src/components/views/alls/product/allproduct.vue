<template>
   <div class="all-product">
      <div class="top">
         <!--<span @click="goback" class="back">返回</span>-->
         <div class="main">
            <p>共为您找到<span class="num"> {{num}} </span>条结果</p>
         </div>
         <div class="pj" v-if="showyesData">
            <p v-if="gpaP">
               <span>GPA</span><br>
               <span>{{gpaP}}</span>
            </p>
            <p v-if="toeflP">
               <span>TOEFL</span><br>
               <span>{{toeflP}}</span>
            </p>
            <p v-if="ieltsP">
               <span>IELTS</span><br>
               <span>{{ieltsP}}</span>
            </p>
            <p v-if="greP">
               <span>GRE</span><br>
               <span>{{greP}}</span>
            </p>
            <p v-if="gmatP">
               <span>GMAT</span><br>
               <span>{{gmatP}}</span>
            </p>
         </div>
      </div>
      <div class="sections">
         <div class="noData" v-if="shownoData">
            <p>
               <img src="../../../../assets/images/nodata.png" alt="">
            </p>
            <p class="txt">没有更多记录啦</p>
         </div>
         <mu-paper v-if="showyesData" :z-depth="1" class="demo-loadmore-wrap">
            <mu-container ref="container" class="demo-loadmore-content">
               <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loadingMore" @load="load">
                  <mu-list>
                     <a  v-for="(item, index) in items" :key="index" @click="toAllDetail(item.number)"><!-- :to="'/alldetail?number='+(item.number)"/onfocus="this.blur()" -->
                        <div class="icon">
                           <img src="../../../../assets/images/al.png" alt="">
                        </div>
                        <div class="center">
                           <p class="number">案例编号：{{item.number}}</p>
                           <p class="sqxw">申请学位：{{item.academicName}}</p>
                           <ul class="cons">
                              <li>
                                 <p class="sqxw" v-if="item.gpa">GPA：{{item.gpa}}</p>
                              </li>
                              <li>
                                 <p class="sqxw" v-if="item.toefl">TOEFL：{{item.toefl}}</p>
                              </li>
                              <li>
                                 <p class="sqxw" v-if="item.ielts">IELTS：{{item.ielts}}</p>
                              </li>
                              <li>
                                 <p class="sqxw" v-if="item.gre">GRE：{{item.gre}}</p>
                              </li>
                              <li>
                                 <p class="sqxw" v-if="item.gmat">GMAT：{{item.gmat}}</p>
                              </li>
                           </ul>
                        </div>
                        <div class="todetail">
                           <img src="../../../../assets/images/toRight.png" alt="">
                        </div>

                     </a>
                  </mu-list>
               </mu-load-more>
            </mu-container>
            <p v-if="toTop" @click="returnTop" class="returnTop">
               <img src="../../../../assets/images/returntop.png" alt="">
            </p>
         </mu-paper>
         <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
             <ul>
                 <li v-for="(item,inx) in list" :key="inx" class="popp">{{ item.txt }}</li>
             </ul>
         </mt-loadmore> -->
      </div>
   </div>
</template>

<script>
   import {Indicator} from 'mint-ui'
   import {alls} from '../../../../api'
   import {loadingIcon, closeLoadingIcon} from '../../../../assets/js/loading.js'

   export default {
      name: 'all-product',
      data() {
         return {
            toTop: false,
            num: '',
            shownoData: false,
            showyesData: true,
            mescroll: null,
            items: [],
            idx: '',
            refreshing: false,
            loadingMore: false,
            text: 'List',
            lists: [],
            page: 1,
            // level: [],
            gpaP: '',
            toeflP: '',
            ieltsP: '',
            greP: '',
            gmatP: '',
            allLoaded: false,
            list: [],
         }
      },
      created() {
         Indicator.open();
         // console.log(JSON.parse(sessionStorage.getItem('allList')));
      },
      mounted() {
         this.getData();
         window.addEventListener('scroll', this.scrollToTop);
         // console.log(sessionStorage.getItem("whichName"));
      },
      watch: {
         // "$route": "getData"
      },
      methods: {
         scrollToTop(el) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let browserHeight = window.outerHeight;
            this.toTop = scrollTop > browserHeight;
         },
         goback() {
            // this.$router.push({path: "/index"});
            this.$router.go(-1);    //返回上一层
            sessionStorage.removeItem('allpro');
            // sessionStorage.removeItem("allList");
            sessionStorage.removeItem('allstatus');
         },
         toAllDetail (id) {
            // console.log(id);
            this.$router.push({
               name: 'alldetail',
               query: {
                  number: id,
               },
            })
         },
         getData() {
            // console.log(sessionStorage.getItem('allList'));
            alls(JSON.parse(sessionStorage.getItem('allList'))).then(res => {
               // console.log(JSON.parse(sessionStorage.getItem('allList')));
               if (res.status === 1) {
                  Indicator.close();
                  this.shownoData = true;
                  this.showyesData = false;
                  this.num = 0;
               } else {
                  Indicator.close();
                  this.num = res.datas.count;
                  this.items = res.datas.serviceList;
                  this.gpaP = res.datas.avggpa;
                  this.toeflP = res.datas.avgtoefl;
                  this.ieltsP = res.datas.avgielts;
                  this.greP = res.datas.avggre;
                  this.gmatP = res.datas.avggmat;
               }
            }).catch((err) => {
               console.log(err);
            })
         },
         refresh() {
            this.refreshing = true;
            this.$refs.container.scrollTop = 0;
            let params = {
                  pageNo: this.page,
                  pageSize: 10
               };
            let tjss = JSON.parse(sessionStorage.getItem('allList'));
            let newParams = Object.assign(params, tjss);
            console.log(newParams);
            setTimeout(() => {
               this.refreshing = false
               alls(newParams).then((res) => {
                  console.log(res)
                  setTimeout(() => {
                     this.loadingMore = false
                     // let mens = this.lists.push(res.datas.serviceList);
                     // let arr = items.concat(mens);
                     // this.items = arr;
                  }, 1000)
               })
            }, 2000)
         },
         load() {
            this.loadingMore = true;
            let params = {
               pageNo: ++this.page,
               pageSize: 10
            };
            
            // let params = JSON.parse(sessionStorage.getItem('allList'));
            // console.log(Object.assign(lisParams, params));
            // params.pageNo = ++this.page
            // params.pageSize = 10
            alls(params).then((res) => {
               setTimeout(() => {
                  this.loadingMore = false
                  this.lists.push(res.datas.serviceList)
                  this.items = this.items.concat(res.datas.serviceList);
               }, 1000)
            })

         },
         returnTop() {
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
         this.getData=false;
      },
   }
</script>

<style lang="scss">

   .all-product {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .top {
         width: 100%;
         // height: 9.5rem;
         // line-height: 3.5rem;
         background: #E6E6E6;
         /*color: #ffffff;*/
         position: fixed;
         z-index: 99;

         .back {
            position: absolute;
            left: 1rem;
            top: 1.3rem;
         }

         .main {
            text-align: center;
            line-height: 3.5rem;

            p {
               font-size: 1.05rem;
               // font-weight: 600;
            }

            .num {
               color: #000000;
            }
         }

         .pj {
            width: 100%;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            // padding-left: 1rem;
            p {
               text-align: center;
               width: 20%;
               margin-right: .6rem;
               color: #64645a;
            }
         }
      }

      .sections {
         width: 100%;
         flex: 1;
         box-sizing: border-box;
         padding-top: 6rem;

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

         ul {
            a {
               width: 96%;
               height: 5rem;
               display: flex;
               border-bottom: 1px solid #cccccc;
               margin: .5rem 2% 0 2%;

               .icon {
                  width: 6rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
               }

               .center {
                  width: 60%;
                  height: 100%;
                  position: relative;

                  .number {
                     font-size: .8rem;
                     color: #9d9d9d;
                  }

                  .sqxw {
                     font-size: .9rem;
                     color: #545151;
                     padding-top: .4rem;
                  }
               }

               .todetail {
                  width: 10%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  img {
                     width: 60%;
                  }
               }

               .cons {
                  position: absolute;
                  left: 0em;
                  bottom: .5rem;
                  width: 100%;
                  display: flex;
                  color: #545151;
                  overflow: hidden;

                  li {
                     margin-left: .2rem;
                     white-space: nowrap;

                     &:first-child {
                        margin-left: 0;
                     }
                  }
               }

               .cons:after {
                  display: inline;
                  content: "...";
                  font-size: 16px;
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

      .popp {
         line-height: 3rem;
      }

      .mint-swipe-indicators {
         width: 90%;
      }
   }
</style>
