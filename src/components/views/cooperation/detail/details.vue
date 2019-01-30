<template>
   <!-- 合作院校详情    加字段 -->
   <div class="coodetail">
      <div class="sections">
         <div class="wrap">
            <div class="sec-top">
               <p>{{items.schoolEngName}}</p>
               <span><img class="icon" :src="detail01" alt=""> 合作机构：{{items.cooperateOrg}}</span><br>
               <!-- <span><img class="icon" src="../../../../assets/images/index/detail-02.png" alt="">分管对接人：{{items.divisionPerson}}</span> -->
            </div>
            <div class="informa">
               <p class="txt">基本信息</p>
               <ul>
                  <li v-if="items.rankWay">
                     <span><img class="icon" :src="way_icon" alt="">学校排名：{{items.rankWay}}{{items.rank}}</span>
                  </li>
                  <li v-if="items.major">
                     <span><img class="icon" :src="subject_icon" alt="">专<em>安实</em>业：{{items.major}}</span>
                  </li>
                  <li v-if="items.cooperatePro">
                     <span><img class="icon" :src="item_icon" alt="">合作项目：{{items.cooperatePro}}</span>
                  </li>
                  <li v-if="items.updateTime">
                     <span><img class="icon" :src="detail03" alt="">更新时间：{{items.updateTime}}</span>
                  </li>
                  <li v-if="items.cooperateWay">
                     <span><img class="icon" :src="detail04" alt="">合作方式：{{items.cooperateWay}}</span>
                  </li>
                  <!-- <li>
                         <span><img class="icon" src="../../../../assets/images/index/subject_icon.png" alt="">合作机构：{{items.cooperateOrg}}</span>
                     </li> -->
                  <li v-if="items.schoolEngName">
                     <span><img class="icon" :src="detail05" alt="">学校英文名称：{{items.schoolEngName}}</span>
                  </li>
                  <li v-if="items.schoolChiName">
                     <span><img class="icon" :src="detail06" alt="">学校中文名称：{{items.schoolChiName}}</span>
                  </li>
                  <li v-if="items.majorRank">
                     <span><img class="icon" :src="detail07" alt="">专业排名：{{items.majorRank}}</span>
                  </li>
                  <li v-if="items.stem">
                     <span><img class="icon" :src="detail08" alt="">STEM：{{items.stem}}</span>
                  </li>
               </ul>
            </div>
            <div class="informa">
               <p class="txt">成绩信息</p>
               <ul class="achievement">
                  <li>
                     <p v-if="items.gpa"><img class="icon" :src="GPA_icon" alt="">GPA：{{items.gpa}}</p>
                     <p v-if="items.gpaRemark"><img class="icon" :src="GPA_icon" alt="">GPA备注：{{items.gpaRemark}}</p>
                  </li>
                  <li>
                     <p v-if="items.toefl"><img class="icon" :src="TOEFL_icon" alt="">TOEFL：{{items.toefl}}</p>
                     <p v-if="items.gpaRemark"><img class="icon" :src="TOEFL_icon" alt="">TOEFL备注：{{items.gpaRemark}}</p>
                  </li>
                  <li>
                     <p v-if="items.ielts"><img class="icon" :src="LELTS_icon" alt="">IELTS：{{items.ielts}}</p>
                     <p v-if="items.ieltsRemark"><img class="icon" :src="LELTS_icon" alt="">IELTS备注：{{items.ieltsRemark}}</p>
                  </li>
                  <li>
                     <p v-if="items.gre"><img class="icon" :src="GRE_icon" alt="">GRE：{{items.gre}}</p>
                     <p v-if="items.greRemark"><img class="icon" :src="GRE_icon" alt="">GRE备注：{{items.greRemark}}</p>
                  </li>
                  <li>
                     <p v-if="items.gmat"><img class="icon" :src="GMAT_icon" alt="">GMAT：{{items.gmat}}</p>
                     <p v-if="items.gmatRemark"><img class="icon" :src="GMAT_icon" alt="">GMAT备注：{{items.gmatRemark}}</p>
                  </li>
               </ul>
            </div>
            <div class="informa">
               <p class="txt">其他要求</p>
               <ul>
                  <li>
                     <p v-if="items.majorBground">专业背景要求：{{items.majorBground}}</p>
                     <p v-if="items.majorBgroundRemark">专业背景备注：{{items.majorBgroundRemark}}</p>
                  </li>
                  <li>
                     <p v-if="items.jobRequire">工作要求：{{items.jobRequire}}</p>
                     <p v-if="items.jobRequireRemark">工作要求备注：{{items.jobRequireRemark}}</p>
                  </li>
                  <!-- <li>
                         <p>工作要求：{{items.jobrequire}}</p><br>
                         <p>专业背景备注：{{items.majorBgroundRemark}}</p>
                     </li> -->
                  <li>
                     <p v-if="items.isIBTOrIELTSApply">是否接受无IBT/IELTS申请：{{items.isIBTOrIELTSApply}}</p>
                  </li>
                  <li>
                     <p v-if="items.isEnglisTest">是否接受英语内测：{{items.isEnglisTest}}</p>
                  </li>
                  <li>
                     <p v-if="items.languageCourse">语言课程时长：{{items.languageCourse}}</p>
                  </li>
                  <li>
                     <p v-if="items.languageCourseCost">语言课程学费/美金：{{items.languageCourseCost}}</p>
                  </li>
                  <li>
                     <p v-if="items.bridgeCourse">桥梁课程时长：{{items.bridgeCourse}}</p>
                  </li>

                  <!-- 新增 -->
                  <li>
                     <p v-if="items.bridgeCourseCost">桥梁课程学费/美金：{{items.bridgeCourseCost}}</p>
                  </li>
                  <li>
                     <p v-if="items.bridgeCourse">硕士课程学分：{{items.bridgeCourse}}</p>
                  </li>
                  <li>
                     <p v-if="items.masterCourseCost">硕士课程学费/美金：{{items.masterCourseCost}}</p>
                  </li>
                  <li>
                     <p v-if="items.isResultCert">是否需要成绩认证：{{items.isResultCert}}</p>
                  </li>
                  <li>
                     <p v-if="items.bridgeCourse">是否需要面试：{{items.bridgeCourse}}</p>
                  </li>
                  <li>
                     <p v-if="items.bridgeCourseIsGPA">桥梁课程毕业要求GPA：{{items.bridgeCourseIsGPA}}</p>
                  </li>
                  <li>
                     <p v-if="items.bridgeCourseIsIBTorIELTS">桥梁课程毕业要求-IBT/IELTS：{{items.bridgeCourseIsIBTorIELTS}}</p>
                  </li>

                  <li>
                     <p v-if="items.bridgeCourseIsGRE">桥梁课程毕业要求GRE：{{items.bridgeCourseIsGRE}}</p>
                  </li>
                  <li>
                     <p v-if="items.bridgeCourseIsGMAT">桥梁课程毕业要求GMAT：{{items.bridgeCourseIsGMAT}}</p>
                  </li>
                  <li>
                     <p v-if="items.schoolSeason">开学季：{{items.schoolSeason}}</p>
                  </li>
                  <li>
                     <p v-if="items.springDeadline">春季截止日期：{{items.springDeadline}}</p>
                  </li>
                  <li>
                     <p v-if="items.summerDeadline">夏季截止日期：{{items.summerDeadline}}</p>
                  </li>
                  <li>
                     <p v-if="items.autumnDeadline">秋季截止日期：{{items.autumnDeadline}}</p>
                  </li>
                  <li>
                     <p v-if="items.winterDeadline">冬季截止日期：{{items.winterDeadline}}</p>
                  </li>

                  <li>
                     <p v-if="items.auditorPeriod">审核期间：{{items.auditorPeriod}}</p>
                  </li>
                  <li>
                     <p v-if="items.proSellPoint">项目卖点：{{items.proSellPoint}}</p>
                  </li>
                  <li>
                     <p v-if="items.rankWay">排名方式：{{items.rankWay}}</p>
                  </li>
                  <li>
                     <p v-if="items.rank">排名：{{items.rank}}</p>
                  </li>
                  <li>
                     <p v-if="items.worldRank">世界排名：{{items.worldRank}}</p>
                  </li>
                  <li>
                     <p v-if="items.state">州：{{items.state}}</p>
                  </li>
                  <li>
                     <p v-if="items.city">城市：{{items.city}}</p>
                  </li>
                  <li>
                     <p v-if="items.cityRemark">城市备注：{{items.cityRemark}}</p>
                  </li>
                  <li>
                     <p v-if="items.publicOrPrivate">公立/私立：{{items.publicOrPrivate}}</p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import {
      urlParse
   } from '../../../../assets/js/urltoJson.js'
   import {
      coopById
   } from '../../../../api.js'
   export default {
      name: 'coodetail',
      data() {
         return {
            items: {},
            detail01: require('../../../../static/images/index/detail-01.png'),
            way_icon: require('../../../../static/images/index/way_icon.png'),
            subject_icon: require('../../../../static/images/index/subject_icon.png'),
            item_icon: require('../../../../static/images/index/item_icon.png'),
            detail03: require('../../../../static/images/index/detail-03.png'),
            detail04: require('../../../../static/images/index/detail-04.png'),
            detail05: require('../../../../static/images/index/detail-05.png'),
            detail06: require('../../../../static/images/index/detail-06.png'),
            detail07: require('../../../../static/images/index/detail-07.png'),
            detail08: require('../../../../static/images/index/detail-08.png'),
            GPA_icon: require('../../../../static/images/index/GPA_icon.png'),
            TOEFL_icon: require('../../../../static/images/index/TOEFL_icon.png'),
            LELTS_icon: require('../../../../static/images/index/LELTS_icon.png'),
            GRE_icon: require('../../../../static/images/index/GRE_icon.png'),
            GMAT_icon: require('../../../../static/images/index/GMAT_icon.png'),
            // way_icon: require('../../../../static/images/index/detail.png'),
         }
      },
      mounted() {
         this.getData();
         // if (window.history && window.history.pushState) {
         //    history.pushState(null, null, document.URL);
         //    window.addEventListener('popstate', this.goBack, false);
         // }
         // pushHistory();
         // window.addEventListener("popstate", function(e) {
         // //       alert("cooproduct");
         // //       window.location.href = 'http://qtmyxx.xdf.cn/cooproduct';
         //          this.$router.push({path: '/cooproduct'});
         //     }, false);
         //     function pushHistory() {
         //       var state = {
         //         title: "title",
         //         url: "#"
         //       };
         //       window.history.pushState(state, "title", "#");
         //     }
      },
      watch: {
         // $route(to, from) {
         //    console.log(to);
         // }
         "$route": "getData"
      },
      methods: {
         // 返回
         goBack() {
            // this.$router.push({path: "/cooproduct"});
            this.$router.replace({path: '/cooproduct'});
            // this.$router.go(-1); //返回上一层
         },
         getData() {
            let idx = urlParse(window.location.href);
            console.log(idx)
            coopById(idx).then(res => {
               console.log(res.status)
               if (res.status === 0) { // 成功
                  this.items = res.datas
               }
            })
         },
      },
      destroyed () {
         window.removeEventListener('popstate', this.goBack, false);
      }
   }
</script>

<style scoped lang="scss">
   .coodetail {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .el-form-item {
         width: 100%;
         .el-form-item__content {
            .el-select {
               width: 100%;
            }
         }
      }
      .header {
         width: 100%;
         height: 3rem;
         line-height: 3rem;
         /*color: #ffffff;*/
         display: flex;
         flex-shrink: 0;
         position: fixed;
         z-index: 99;
         color: rgb(255, 94, 0);
         span {
            position: absolute;
            left: .8rem;
            margin-left: .5rem;
         }
         p {
            margin: 0 auto; // color: #000000;
            font-size: 1.2rem;
         }
      }
      .sections {
         width: 100%;
         flex: 1;
         padding: .8rem; // position: absolute;
         // top: 3rem;
         background: #cccccc;
         background: url(../../../../assets/images/detail_bj.jpg) no-repeat top center;
         background-size: 100% 11rem;
         .zyDetail {
            width: 100%;
            font-size: 1.4rem;
            color: rgb(255, 94, 0);
            text-align: center;
         }
         .wrap {
            margin-top: 7rem;
            background: #ffffff;
            padding: 0.8rem;
            border-radius: .4rem;
         }
         .sec-top {
            padding-bottom: .4rem;
            p {
               line-height: 2rem;
               font-size: 1.2rem;
               padding: 0 0 .6rem 0;
            }
            span {
               display: inline-block;
               line-height: 2rem;
               font-size: .85rem;
            }
         }
         .informa {
            width: 100%;
            border-top: 1px solid #cccccc;
            .txt {
               font-size: 1.2rem;
               line-height: 2.6rem;
            }
            ul {
               font-size: .9rem;
               color: #666666;
               padding: 0 0 .8rem 0;
               li {
                  line-height: 2rem;
                  em {
                     visibility: hidden;
                  }
               }
            }
            .achievement {
               width: 100%;
               display: flex;
               flex-wrap: wrap;
               font-size: .9rem;
               li {
                  width: 100%;
               }
            }
         }
      }
      .icon {
         width: 1rem;
         margin-right: .5rem;
      }
   }
</style>
