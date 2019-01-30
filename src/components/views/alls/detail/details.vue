<template>
   <!-- 全部院校详情页 -->
   <div class="alldetail">
      <!-- <div class="header">
         <p>案例编号：{{items.number}}</p>
      </div> -->
      <div class="sections">
         <!-- <div class="anBm">
               <span>案例编号：{{items.number}}</span>
            </div> -->
         <div class="main">
            <div class="case">
               <span>案例编号：{{items.number}}</span>
            </div>
            <div class="informa">
               <p class="txt">背景信息</p>
               <ul>
                  <li class="bgt">
                     <span>毕业院校：{{items.graduateSchool}}</span>
                  </li>
                  <li>
                     <img :src="bgSchool" alt=""> <span>毕业院校背景：{{items.bgSchool}}</span>
                  </li>
                  <li>
                     <img :src="bgStudent" alt=""> <span>学生背景：{{items.bgStudent}}</span>
                  </li>
               </ul>
            </div>
            <div class="informa">
               <p class="txt">成绩信息</p>
               <ul class="achievement">
                  <li v-if="items.GPA">
                     <img :src="GPA_icon" alt=""> <span>GPA：{{items.GPA}}</span>
                  </li>
                  <li v-if="items.TOEFL">
                     <img :src="TOEFL_icon" alt=""> <span>TOEFL：{{items.TOEFL}}</span>
                  </li>
                  <li v-if="items.IELTS">
                     <img :src="LELTS_icon" alt=""> <span>IELTS：{{items.IELTS}}</span>
                  </li>
                  <li v-if="items.GRE">
                     <img :src="GRE_icon" alt=""> <span>GRE：{{items.GRE}}</span>
                  </li>
                  <li v-if="items.GMAT">
                     <img :src="GMAT_icon" alt=""> <span>GMAT：{{items.GMAT}}</span>
                  </li>
               </ul>
            </div>
            <div class="informa">
               <p class="txt">录取情况</p>
               <mt-swipe :auto="0">
                  <mt-swipe-item v-for="(val, idx) in vals " :key="idx">
                     <ul>
                        <li><p><img :src="school_icon" alt=""></p><span>学校名称：</span><i>{{val.schoolName}}</i></li>
                        <li><p><img :src="subject_icon" alt=""></p><span>专&#12288;&#12288;业：</span>{{val.majorName}}</li>
                        <li><p><img :src="degree_icon" alt=""></p><span>学&#12288;&#12288;位：</span>{{val.academicName}}</li>
                        <li><p><img :src="result_icon" alt=""></p><span>申请结果：</span>{{val.applyResult}}</li>
                     </ul>
                  </mt-swipe-item>
               </mt-swipe>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import {allsdetails} from '../../../../api'
   import {urlParse} from '../../../../assets/js/urltoJson'

   export default {
      name: 'alldetail',
      data() {
         return {
            items: {},
            vals: [],
            graduateSchool: require('../../../../static/images/gtSchool.png'),
            bgSchool: require('../../../../static/images/bgSchool.png'),
            bgStudent: require('../../../../static/images/bgStudent.png'),
            GPA_icon: require('../../../../static/images/GPA_icon.png'),
            TOEFL_icon: require('../../../../static/images/TOEFL_icon.png'),
            LELTS_icon: require('../../../../static/images/LELTS_icon.png'),
            GRE_icon: require('../../../../static/images/GRE_icon.png'),
            GMAT_icon: require('../../../../static/images/GMAT_icon.png'),
            school_icon: require('../../../../static/images/school_icon.png'),
            subject_icon: require('../../../../static/images/subject_icon.png'),
            degree_icon: require('../../../../static/images/degree_icon.png'),
            result_icon: require('../../../../static/images/result_icon.png'),
            // ../../../../assets/images/gtSchool.png
         }
      },
      computed: {},
      mounted() {
         this.getData();
      },
      watch: {
         // "$route": "getData"
      },
      methods: {
         goback() {
            this.$router.go(-1);    //返回上一层
         },
         getData() {
            let numB = urlParse(window.location.href);
            let params = {
               number: numB.number,
            }
            allsdetails(params).then(res => {
               // console.log(res);
               let {datas, status, message} = res;
               this.items = {};
               this.vals = [];
               if (status !== 0) {
                  // this.$message.error(message);
                  console.log(message);
               } else {
                  this.items = datas;
                  this.vals = datas.admitList;
               }
            })
         },
      },
      destroyed () {
         this.getData=false;
      }
   }
</script>

<style lang="scss">
   .alldetail {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      overflow-y: auto;
      .header {
         width: 100%;
         height: 4rem;
         line-height: 4rem;
         background: #E6E6E6;
         /*color: #ffffff;*/
         display: flex;
         flex-shrink: 0;
         position: fixed;
         // top: 0;
         // left: 0;
         z-index: 99;

         span {
            position: absolute;
            left: .8rem;
            margin-left: .5rem;
         }

         p {
            margin: 0 auto;
            font-size: 1.05rem;
            // font-weight: 600;
         }
      }

      .sections {
         width: 100%;
         flex: 1;
         background: #ffffff;
         // position: absolute;
         // top: 4rem;
         padding-bottom: 2rem;
         background: url(../../../../assets/images/detail_bj.jpg) no-repeat top center;
         background-size: 100% 11rem;
         .anBm{
            width: 100%;
            text-align: center;
            font-size: 1.2rem;
            padding-top: 5rem;
            color: rgb(255, 94, 0);
         }
         .main {
            width: 94%;
            margin: 9rem 3% 0 3%;
            background: #ffffff;
            border-radius: .4rem;
            padding: 0 .8rem;

            .case {
               width: 100%;
               line-height: 2.4rem;
               font-size: 1.4rem;
               color: rgb(255, 94, 0);
               text-align: center;
            }

            .informa {
               width: 100%;
               // height: 100%;
               border-bottom: 1px solid #cccccc;

               img {
                  width: 1rem;
                  margin-right: .4rem;
               }

               .txt {
                  font-size: 1.2rem;
                  line-height: 2.6rem;
               }

               ul {
                  font-size: .9rem;
                  color: #666666;
                  padding: 0 0 .8rem 0;

                  .bgt {
                     background: url(../../../../assets/images/gtSchool.png) no-repeat left center;
                     background-size: 1rem 1rem;
                     padding-left: 1.4rem;
                  }

                  li {
                     width: 100%;
                     line-height: 2rem;
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;

                     span {
                        display: inline-block;
                     }

                     i {
                        word-break: break-all;
                        display: inline-block;
                        font-style: normal;
                     }

                     em {
                        visibility: hidden;
                     }
                  }
               }

               .achievement {
                  width: 100%;
                  display: flex;
                  flex-wrap: wrap;

                  li {
                     width: 100%;
                  }
               }

               .el-carousel {
                  background: #e8f8fa;
                  padding: 1rem;
               }

               .mint-swipe {
                  padding: 1rem;
                  width: 100%;
                  height: 11.5rem;
                  background: #eef6fd;
                  border-radius: .5rem;

                  ul {
                     width: 100%;
                     height: 100%;

                     li {
                        display: flex;

                        span {
                           display: inline-block;
                           white-space: nowrap;
                        }
                     }
                  }
               }

               &:last-child {
                  border: none;
               }
            }
         }
      }

      /* 覆盖框架样式 */
      .mint-swipe-indicators {
         width: 90%;
         text-align: center;
         .is-active{
            border: 1px solid #000000;
         }
      }

      .mint-swipe-indicator {
         width: 5px;
         height: 5px;
         display: inline-block;
         border-radius: 100%;
         background: #000000;
         opacity: 0.2;
         margin: 0 1px;
      }
   }
</style>
