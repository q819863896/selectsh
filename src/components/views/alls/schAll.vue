<template>
   <div class="schAll">
      <!-- top -->
      <div class="viewTop">
         <img class="img-icon" src="../../../assets/images/index/msg_icon.png">
         <span class="txtTitle">如下选项可进行多选哦</span>
      </div>

      <!-- 宫格 -->
      <div class="place">
         <div class="placeWrap">
            <div class="wid100">
               <div class="ViewCont1 one" @click="schNaBtn">
                  <div class="view1" v-if="schNaFir">
                     <img class="imgIcon" src="../../../assets/images/index/school_icon.png" alt="">
                     <span>申请学校(英文)</span>
                  </div>
                  <div class="view2" v-if="schNaSec">
                     <span class="txtHeader" :style="{background: '#61B6BB'}">学校名称</span>
                     <span class="txtContent" :style="{background: '#E5F8FA'}">{{schNaInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 two" @click="majBtn">
                  <div class="view1" v-if="majFir">
                     <img class="imgIcon" src="../../../assets/images/index/subject_icon.png" alt="">
                     <span>申请专业(中文)</span>
                  </div>
                  <div class="view2" v-if="majSec">
                     <span class="txtHeader" :style="{background: '#F1ACAC'}">申请专业</span>
                     <span class="txtContent" :style="{background: '#FEF1EF'}">{{majorInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 three" @click="resultBtn" :style="{background: '#FAF1FA'}">
                  <div class="view1" v-if="resuFir">
                     <img class="imgIcon" src="../../../assets/images/index/result_icon.png" alt="">
                     <span>申请结果</span>
                  </div>
                  <div class="view2" v-if="resuSec">
                     <span class="txtHeader" :style="{background: '#BF67BF'}">申请结果</span>
                     <span class="txtContent" :style="{background: '#FAF1FA'}">{{resultInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 four" @click="xwBtn" :style="{background: '#FDF7EC'}">
                  <div class="view1" v-if="xwFir">
                     <img class="imgIcon" src="../../../assets/images/index/degree_icon.png" alt="">
                     <span>申请学位</span>
                  </div>
                  <div class="view2" v-if="xwSec">
                     <span class="txtHeader" :style="{background: '#C9AF7C'}">申请学位</span>
                     <span class="txtContent" :style="{background: '#FDF7EC'}">{{sqxwInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 five" @click="gpaBtn" :style="{background: '#F0F9F8'}">
                  <div class="view1" v-if="gpaFir">
                     <img class="imgIcon" src="../../../assets/images/index/GPA_icon.png" alt="">
                     <span>GPA</span>
                  </div>
                  <div class="view2" v-if="gpaSec">
                     <span class="txtHeader" :style="{background: '#7EC4B4'}">GPA</span>
                     <span class="txtContent" :style="{background: '#F0F9F8'}">{{gpaleft}}-{{gparight}}</span>
                  </div>
               </div>

               <div class="ViewCont1 six" @click="toeflBtn" :style="{background: '#EEFAF4'}">
                  <div class="view1" v-if="toeflFir">
                     <img class="imgIcon" src="../../../assets/images/index/TOEFL_icon.png" alt="">
                     <span>TOEFL</span>
                  </div>
                  <div class="view2" v-if="toeflSec">
                     <span class="txtHeader" :style="{background: '#67AD90'}">TOEFL</span>
                     <span class="txtContent" :style="{background: '#EEFAF4'}">{{toeflleft}}-{{toeflright}}</span>
                  </div>
               </div>

               <div class="ViewCont1 seven" @click="ieltsBtn" :style="{background: '#FDF1F7'}">
                  <div class="view1" v-if="ieltsFir">
                     <img class="imgIcon" src="../../../assets/images/index/LELTS_icon.png" alt="">
                     <span>IELTS</span>
                  </div>
                  <div class="view2" v-if="ieltsSec">
                     <span class="txtHeader" :style="{background: '#BF6C95'}">IELTS</span>
                     <span class="txtContent" :style="{background: '#FDF1F7'}">{{ieltsleft}}-{{ieltsright}}</span>
                  </div>
               </div>

               <div class="ViewCont1 eight" @click="greBtn" :style="{background: '#FEF2F4'}">
                  <div class="view1" v-if="greFir">
                     <img class="imgIcon" src="../../../assets/images/index/GRE_icon.png" alt="">
                     <span>GRE</span>
                  </div>
                  <div class="view2" v-if="greSec">
                     <span class="txtHeader" :style="{background: '#D6798B'}">GRE</span>
                     <span class="txtContent" :style="{background: '#FEF2F4'}">{{greleft}}-{{greright}}</span>
                  </div>
               </div>

               <div class="ViewCont1 nine" @click="gmatBtn" :style="{background: '#F5F2FB'}">
                  <div class="view1" v-if="gmatFir">
                     <img class="imgIcon" src="../../../assets/images/index/GMAT_icon.png" alt="">
                     <span>GMAT</span>
                  </div>
                  <div class="view2" v-if="gmatSec">
                     <span class="txtHeader" :style="{background: '#A083D8'}">GMAT</span>
                     <span class="txtContent" :style="{background: '#F5F2FB'}">{{gmatleft}}-{{gmatright}}</span>
                  </div>
               </div>

               <div class="ViewCont1 ten" @click="byyyBtn" :style="{background: '#FEF2F4'}">
                  <div class="view1" v-if="byyxFir">
                     <img class="imgIcon" src="../../../assets/images/index/college_icon.png" alt="">
                     <span>毕业院校</span>
                  </div>
                  <div class="view2" v-if="byyxSec">
                     <span class="txtHeader" :style="{background: '#D38998'}">毕业院校</span>
                     <span class="txtContent" :style="{background: '#FEF2F4'}">{{byyxInp}}</span>
                  </div>
               </div>
               <div class="ViewCont1 eleven" @click="bkzyBtn" :style="{background: '#EEF6FD'}">
                  <div class="view1" v-if="bkzyFir">
                     <img class="imgIcon" src="../../../assets/images/index/attribute_icon.png" alt="">
                     <span>本科专业</span>
                  </div>
                  <div class="view2" v-if="bkzySec">
                     <span class="txtHeader" :style="{background: '#89B9D1'}">本科专业</span>
                     <span class="txtContent" :style="{background: '#EEF6FD'}">{{bkzyInp}}</span>
                  </div>
               </div>
               <div class="ViewCont1 twele" @click="nfBtn" :style="{background: '#F0FCFC'}">
                  <div class="view1" v-if="nfFir">
                     <img class="imgIcon" src="../../../assets/images/index/niandu.png" alt="">
                     <span>年份</span>
                  </div>
                  <div class="view2" v-if="nfSec">
                     <span class="txtHeader" :style="{background: '#A2E3E3'}">年份</span>
                     <span class="txtContent" :style="{background: '#F0FCFC'}">{{nfInp}}</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="cover" :style="{display: showCoverModel === true ? 'block' : 'none'}" @click="cover">
            <!-- 学校名称 -->
            <div v-if="schNaState" class="coverModel">

               <!--<mu-row gutter>-->
               <!--<mu-col span="24" lg="4" sm="6">-->
               <mu-auto-complete placeholder="请输入学校名称" :data="optionsSch" v-model="schNaData"></mu-auto-complete>
               <p class="close" @click="schClose">×</p>
               <!--</mu-col>-->
               <!--</mu-row>-->
               <div class="schSureBtn" @click="schSureBtn">确定</div>
            </div>
            <!-- 申请专业 -->
            <div v-if="majNaState" class="coverModel">
               <!--<mu-row gutter>-->
               <!--<mu-col span="24" lg="4" sm="6">-->
               <mu-auto-complete placeholder="请输入申请专业" :data="optionsMaj" v-model="majorData"></mu-auto-complete>
               <!--</mu-col>-->
               <!--</mu-row>-->
               <p class="close" @click="majClose">×</p>
               <div class="schSureBtn" @click="majSureBtn">确定</div>
            </div>
            <!-- 申请结果 -->
            <div v-if="sqjgState" class="selectbb">
               <div class="dataList">
                  <div class="checktop" @click="sqjgTop">全部</div>
                  <mt-checklist
                          align="right"
                          v-model="applyresults"
                          :options="sqjgOPtions"
                          @change="sqjgcheck"
                          :label="sqjgOPtions"
                          :value="sqjgOPtions">
                  </mt-checklist>
                  <div class="sureBtn" @click="sqjgSureBtn">确定</div>
               </div>
            </div>
            <!-- 申请学位 -->
            <div v-if="sqxwState" class="selectbb">
               <div class="dataList">
                  <div class="checktop" @click="sqxwTop">全部</div>
                  <mt-checklist
                          align="right"
                          v-model="applyDegree"
                          :options="sqxeOptions">
                  </mt-checklist>
                  <div class="sureBtn" @click="sqxwSureBtn">确定</div>
               </div>
            </div>
            <div v-if="Gpa" class="inputAch"><!-- gpa -->
               <p @click="allgpa">全部</p>
               <div class="inputs">
                  <input type="text" placeholder="请输入GPA成绩" v-model="gpaleft">-
                  <input type="text" placeholder="请输入GPA成绩" v-model="gparight">
               </div>
               <div class="gpaB sureBtn" @click="gpaSureBtn">确定</div>
            </div>
            <div v-if="Toefl" class="inputAch">
               <p @click="alltoefl">全部</p>
               <div class="inputs">
                  <input type="text" placeholder="请输入TOEFL成绩" v-model="toeflleft">-
                  <input type="text" placeholder="请输入TOEFL成绩" v-model="toeflright">
               </div>
               <div class="gpaB sureBtn" @click="toeflSureBtn">确定</div>
            </div>
            <div v-if="Ielts" class="inputAch">
               <p @click="allielts">全部</p>
               <div class="inputs">
                  <input type="text" placeholder="请输入IELTS成绩" v-model="ieltsleft">-
                  <input type="text" placeholder="请输入IELTS成绩" v-model="ieltsright">
               </div>
               <div class="gpaB sureBtn" @click="ieltsSureBtn">确定</div>
            </div>
            <div v-if="Gre" class="inputAch">
               <p @click="allgre">全部</p>
               <div class="inputs">
                  <input type="text" placeholder="请输入GRE成绩" v-model="greleft">-
                  <input type="text" placeholder="请输入GRE成绩" v-model="greright">
               </div>
               <div class="gpaB sureBtn" @click="greSureBtn">确定</div>
            </div>
            <div v-if="Gmat" class="inputAch">
               <p @click="allgmat">全部</p>
               <div class="inputs">
                  <input type="text" placeholder="请输入GMAT成绩" v-model="gmatleft">-
                  <input type="text" placeholder="请输入GMAT成绩" v-model="gmatright">
               </div>
               <div class="gpaB sureBtn" @click="gmatSureBtn">确定</div>
            </div>
            <!-- 毕业院校 -->
            <div v-if="byyxState" class="coverModel">
               <!--<mu-row gutter>-->
               <!--<mu-col span="24" lg="4" sm="6">-->
               <mu-auto-complete placeholder="请输入毕业院校" :data="optionsByyx" v-model="byyxData"></mu-auto-complete>
               <!--</mu-col>-->
               <!--</mu-row>-->
               <p class="close" @click="byyxClose">×</p>
               <div class="schSureBtn sureBtn" @click="byyxSureBtn">确定</div>
            </div>
            <!-- 本科专业 -->
            <div v-if="bkzyState" class="coverModel">
               <!--<mu-row gutter>-->
               <!--<mu-col span="24" lg="4" sm="6">-->
               <mu-auto-complete placeholder="请输入本科专业" :data="optionsBenke" v-model="bkzyData"></mu-auto-complete>
               <!--</mu-col>-->
               <!--</mu-row>-->
               <p class="close" @click="bkzyClose">×</p>
               <div class="schSureBtn sureBtn" @click="bkzySureBtn">确定</div>
            </div>
            <div v-if="NfState" class="inputAch">
               <p @click="allnf">全部</p>
               <el-date-picker size="mini" v-model="nfinput" type="year" placeholder="选择年" popper-class="date_popper" :editable="false"></el-date-picker>
               <div class="gpaB sureBtn" @click="nfSureBtn">确定</div>
            </div>
         </div>
         <div class="confirmBtn" @click="confirmBtn">确认</div>
      </div>
   </div>
</template>

<script>
   import {
      alls,
      allSchoolName,
      allMajor,
      allBgStudent,
      allGraduateSchool,
      allApplyResult,
      allAcademic,
   } from '../../../api'

   export default {
      name: 'schAll',
      data() {
         return {
            disabledEdit: false,
            loading1: false,
            loading2: false,
            loading3: false,
            loading4: false,
            showCoverModel: false, // cover---true:显示//false:隐藏
            schNaState: false,
            majNaState: false,
            sqjgState: false, // 申请结果---state
            sqjg: [],
            sqxw: [],
            sqjgOPtions: [],
            sqxeOptions: [],
            applyresults: [], // 申请结果
            applyDegree: [], // 申请专业
            sqxwState: false, // 申请学位---state
            byyxState: false,
            bkzyState: false,
            dataSch: [], // 学校名称--data
            optionsSchool: [], // 学校名称
            dataMaj: [],
            dataYX: [],
            dataBKZY: [],
            optionsMajor: [],
            optionsGTBG: [],
            optionsBKZY: [],
            schNaInp: '',
            schNaFir: true, // 学校的第一个显示
            schNaSec: false, // 学校的第二个显示
            schNaData: '',
            majorData: '',
            majFir: true,
            majSec: false,
            resuFir: true,
            resuSec: false,
            xwFir: true,
            xwSec: false,
            gpaFir: true,
            gpaSec: false,
            toeflFir: true,
            toeflSec: false,
            ieltsFir: true,
            ieltsSec: false,
            greFir: true,
            greSec: false,
            byyxFir: true,
            byyxSec: false,
            bkzyFir: true,
            bkzySec: false,
            nfFir: true,
            nfSec: false,
            gmatFir: true,
            gmatSec: false,
            gpaleft: '',
            gparight: '',
            Gpa: false,
            Toefl: false,
            Ielts: false,
            Gre: false,
            Gmat: false,
            toeflleft: '',
            toeflright: '',
            ieltsleft: '',
            ieltsright: '',
            greleft: '',
            greright: '',
            gmatleft: '',
            gmatright: '',
            byyxData: '',
            bkzyData: '',
            NfState: false,
            nfinput: '',
            nfInp: '',
            pageNo: 1,
            pageSize: 10,
            slots: [
               {
                  flex: 1,
                  values: ['2015', '2016', '2016', '2017', '2018', '2019'],
                  className: 'slot1',
                  textAlign: 'center',
               },
            ],
            optionsSch: [],
            optionsMaj: [],
            optionsByyx: [],
            optionsBenke: [],
         }
      },
      watch: {
         value: function (val, oldvalue) {
            console.log(val)
         },
      },
      mounted() {
         this.getAllList()
      },
      methods: {
         // 学校按钮
         schNaBtn() {
            if (this.dataSch.length != 0) {
               this.dataSch
            } else {
               allSchoolName().then(res => {
                   this.dataSch = res.datas
                   //   console.log(this.dataSch);
                   for (let a = 0; a < this.dataSch.length; a++) {
                      // console.log(this.dataSch[a]);
                      this.optionsSch.push(this.dataSch[a].schoolName)

                   }
                   // console.log(this.optionsSch);
                   //   this.optionsSchool = this.dataSch;
                })
                .catch(err => {
                   console.log(err)
                })
            }
            
            this.showCoverModel = true // cover---显示
            this.schNaState = true
            this.majNaState = false
            this.sqjgState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.byyxState = false
            this.bkzyState = false
            this.NfState = false
         },
         schClose() {
            this.schNaData = ''
         },
         schSureBtn() {
            // console.log(this.schNaData);
            if (this.schNaData !== '' && this.schNaData != undefined) {
               this.schNaInp = this.schNaData
               this.schNaFir = false
               this.schNaSec = true
               this.showCoverModel = false
            } else {
               this.schNaInp = this.schNaData
               this.schNaFir = true
               this.schNaSec = false
               this.showCoverModel = false
            }
         },
         // 申请专业
         majBtn() {
            if (this.dataMaj.length != 0) {
               this.dataMaj
            } else {
               allMajor().then(res => {
                   this.dataMaj = res.datas
                   // console.log(this.dataMaj);
                   for (let i = 0; i < this.dataMaj.length; i++) {
                      this.optionsMaj.push(this.dataMaj[i].majorName)
                   }
                })
                .catch(err => {
                   console.log(err)
                })
            }
            
            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = true
            this.sqjgState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.byyxState = false
            this.bkzyState = false
            this.NfState = false
         },
         // 专业----×
         majClose() {
            this.majorData = ''
         },
         // 专业的确定按钮
         majSureBtn() {
            if (this.majorData !== '' && this.majorData !== undefined) {
               this.majorInp = this.majorData
               this.majFir = false
               this.majSec = true
               this.showCoverModel = false
            } else {
               this.majFir = true
               this.majSec = false
               this.showCoverModel = false
            }
         },
         sqjgTop() {
            this.resuFir = true
            this.resuSec = false
            this.showCoverModel = false
         },
         sqjgcheck() {
            // console.log(this.value);
         },
         // 申请结果----确定
         sqjgSureBtn() {
            // console.log(typeof JSON.stringify(this.applyresults));
            if (this.applyresults !== '') {
               this.resultInp = JSON.stringify(this.applyresults).replace(/"|\[|\]/g, '')
               this.resuFir = false
               this.resuSec = true
               this.showCoverModel = false
            } else {
               this.resuFir = true
               this.resuSec = false
               this.showCoverModel = false
            }
         },
         // 申请结果
         resultBtn() {
            //   console.log("申请结果");
            if (this.sqjg.length != 0) {
               this.sqjg
            } else {
               allApplyResult().then(res => {
                   this.sqjg = res.datas
                   // console.log(this.sqjg);
                   for (let i = 0; i < this.sqjg.length; i++) {
                      // this.sqjg[i].applyResult;
                      this.sqjgOPtions.push(this.sqjg[i].applyResult)
                   }
                })
                .catch(err => {
                   console.log(err)
                })

            }
            
            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = false
            this.sqjgState = true
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.byyxState = false
            this.bkzyState = false
            this.NfState = false
         },
         // 学位
         xwBtn() {
            if (this.sqxw.length != 0) {
               this.sqxw
            } else {
               allAcademic().then(res => {
                   //   console.log(res.datas);
                   this.sqxw = res.datas
                   for (let i = 0; i < this.sqxw.length; i++) {
                      this.sqxeOptions.push(this.sqxw[i].academicName)
                   }
                })
                .catch(err => {
                   console.log(err)
                })
            }
            
            //   console.log("申请学位");
            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = false
            this.sqjgState = false
            this.sqxwState = true
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.byyxState = false
            this.bkzyState = false
            this.NfState = false
         },
         sqxwTop() {
            this.xwFir = true
            this.xwSec = false
            this.showCoverModel = false
         },
         // 申请学位----确定
         sqxwSureBtn() {
            if (this.applyDegree !== '') {
               this.sqxwInp = JSON.stringify(this.applyDegree).replace(/"|\[|\]/g, '')
               // console.log(this.sqxwInp);
               this.xwFir = false
               this.xwSec = true
               this.showCoverModel = false
            } else {
               this.xwFir = true
               this.xwSec = false
               this.showCoverModel = false
            }

         },
         // gpaBtn
         gpaBtn() {
            //   console.log("gpa");
            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = false
            this.sqjgState = false
            this.sqxwState = false
            this.Gpa = true
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.byyxState = false
            this.bkzyState = false
            this.NfState = false
         },
         allgpa() {
            this.gpaleft = '';
            this.gparight = '';
            this.showCoverModel = false; // cover---隐藏
            this.gpaFir = true;
            this.gpaSec = false;
         },
         gpaSureBtn() {
            if (this.gpaleft !== '' && this.gparight !== '') {
               this.showCoverModel = false // cover---隐藏
               this.gpaFir = false
               this.gpaSec = true
            } else {
               this.showCoverModel = false // cover---隐藏
               this.gpaFir = true
               this.gpaSec = false
            }
         },
         // toeflBtn
         toeflBtn() {
            //   console.log("toefl");
            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = false
            this.sqjgState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = true
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.byyxState = false
            this.bkzyState = false
            this.NfState = false
         },
         alltoefl() {
            this.showCoverModel = false // cover---隐藏
            this.toeflFir = true
            this.toeflSec = false
            this.toeflleft = ''
            this.toeflright = ''
         },
         // toefl---确定
         toeflSureBtn() {
            if (this.toeflleft !== '' && this.toeflright !== '') {
               this.showCoverModel = false // cover---隐藏
               this.toeflFir = false
               this.toeflSec = true
            } else {
               this.showCoverModel = false // cover---隐藏
               this.toeflFir = true
               this.toeflSec = false
            }
         },
         // ieltsBtn
         ieltsBtn() {
            //   console.log("ielts");
            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = false
            this.sqjgState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = true
            this.Gre = false
            this.Gmat = false
            this.byyxState = false
            this.bkzyState = false
            this.NfState = false
         },
         allielts() {
            this.showCoverModel = false // cover---隐藏
            this.ieltsFir = true
            this.ieltsSec = false
            this.ieltsleft = ''
            this.ieltsright = ''
         },
         // ielts---确定
         ieltsSureBtn() {
            if (this.ieltsleft !== '' && this.ieltsright !== '') {
               this.showCoverModel = false // cover---隐藏
               this.ieltsFir = false
               this.ieltsSec = true
            } else {
               this.showCoverModel = false // cover---隐藏
               this.ieltsFir = true
               this.ieltsSec = false
            }
         },
         // greBtn
         greBtn() {
            //   console.log("gre");
            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = false
            this.sqjgState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = true
            this.Gmat = false
            this.byyxState = false
            this.bkzyState = false
            this.NfState = false
         },
         allgre() {
            this.showCoverModel = false // cover---隐藏
            this.greFir = true
            this.greSec = false
            this.greleft = ''
            this.greright = ''
         },
         // gre---确定
         greSureBtn() {
            if (this.greleft !== '' && this.greright !== '') {
               this.showCoverModel = false // cover---隐藏
               this.greFir = false
               this.greSec = true
            } else {
               this.showCoverModel = false // cover---隐藏
               this.greFir = true
               this.greSec = false
            }
         },
         // gmatBtn
         gmatBtn() {
            //   console.log("gmat");
            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = false
            this.sqjgState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = true
            this.byyxState = false
            this.bkzyState = false
            this.NfState = false
         },
         allgmat() {
            this.showCoverModel = false // cover---隐藏
            this.gmatFir = true
            this.gmatSec = false
            this.gmatleft = ''
            this.gmatright = ''
         },
         // gamt---确定
         gmatSureBtn() {
            if (this.gmatleft !== '' && this.gmatright !== '') {
               this.showCoverModel = false // cover---隐藏
               this.gmatFir = false
               this.gmatSec = true
            } else {
               this.showCoverModel = false // cover---隐藏
               this.gmatFir = true
               this.gmatSec = false
            }
         },
         // 毕业院校
         byyyBtn() {
            // console.log("毕业院校");
            if (this.dataYX.length != 0) {
               this.dataYX
            } else {
               allGraduateSchool().then(res => {
                   this.dataYX = res.datas
                   //   console.log();
                   for (let i = 0; i < this.dataYX.length; i++) {
                      this.optionsByyx.push(this.dataYX[i].graduateSchool)
                   }
                })
                .catch(err => {
                   console.log(err)
                })
            }
            

            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = false
            this.sqjgState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.byyxState = true
            this.bkzyState = false
            this.NfState = false
         },
         byyxClose() {
            this.byyxData = ''
         },
         // 毕业院校----确定
         byyxSureBtn() {
            if (this.byyxData !== '' && this.byyxData !== undefined) {
               this.byyxInp = this.byyxData
               this.byyxFir = false
               this.byyxSec = true
               this.showCoverModel = false
            } else {
               this.byyxFir = true
               this.byyxSec = false
               this.showCoverModel = false
            }
         },
         // 本科专业
         bkzyBtn() {
            // console.log("本科专业");
            if (this.dataBKZY.length != 0) {
               this.dataBKZY
            } else {
               allBgStudent().then(res => {
                   this.dataBKZY = res.datas
                   for (let i = 0; i < this.dataBKZY.length; i++) {
                      this.optionsBenke.push(this.dataBKZY[i].bgStudent)
                   }
                })
                .catch(err => {
                   console.log(err)
                })
            }
            
            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = false
            this.sqjgState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.byyxState = false
            this.bkzyState = true
            this.NfState = false
         },
         bkzyClose() {
            this.bkzyData = ''
         },
         // 本科专业----确定
         bkzySureBtn() {
            if (this.bkzyData !== '' && this.bkzyData !== undefined) {
               this.bkzyInp = this.bkzyData
               this.bkzyFir = false
               this.bkzySec = true
               this.showCoverModel = false
            } else {
               this.bkzyFir = true
               this.bkzySec = false
               this.showCoverModel = false
            }

         },
         // 年份
         nfBtn() {
            //   console.log("年份");
            this.showCoverModel = true // cover---显示
            this.schNaState = false
            this.majNaState = false
            this.sqjgState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.byyxState = false
            this.bkzyState = false
            this.NfState = true
         },
         onValuesChange(picker, values) {
            if (values[0] > values[1]) {
               this.nfinput = picker.setSlotValue(1, values[0])
               console.log(this.nfinput)
            }
         },
         cover() {
            // this.showCoverModel = false;
            // if (this.sqjgState == true) {
            //     this.sqjgState = false;
            //     this.showCoverModel = false;
            // }
         },
         allnf() {
            this.showCoverModel = false;
            this.nfFir = true;
            this.nfSec = false;
            this.nfinput = '';
            this.nfInp = '';
         },
         // 年份----确定
         nfSureBtn() {
            if (this.nfinput !== '') {
               this.nfInp = this.nfinput.toString().substring(11).substring(0, 4);
               this.nfFir = false;
               this.nfSec = true;
               this.showCoverModel = false;
            } else {
               this.nfFir = true;
               this.nfSec = false;
               this.showCoverModel = false;
            }
         },
         confirmBtn() {
            let params = {
               pageNo: this.pageNo,
               pageSize: this.pageSize,
            }

            this.schNaInp ? (params.schoolName = this.schNaInp) : '', // 学校名称
                this.majorInp ? (params.applyMajor = this.majorInp) : '', // 申请专业
                this.resultInp ? (params.v_applyResult = this.resultInp) : '', // 申请结果
                this.sqxwInp ? (params.v_applyDegree = this.sqxwInp) : '', // 申请学位
                this.gpaleft ? (params.gpal = this.gpaleft) : '',
                this.gparight ? (params.gpar = this.gparight) : '',
                this.toeflleft ? (params.toefll = this.toeflleft) : '',
                this.toeflright ? (params.toeflr = this.toeflright) : '',
                this.ieltsleft ? (params.ieltsl = this.ieltsleft) : '',
                this.ieltsright ? (params.ieltsr = this.ieltsright) : '',
                this.greleft ? (params.grel = this.greleft) : '',
                this.greright ? (params.grer = this.greright) : '',
                this.gmatleft ? (params.gmatl = this.gmatleft) : '',
                this.gmatright ? (params.gmatr = this.gmatright) : '',
                this.byyxInp ? (params.graduateSchool = this.byyxInp) : '', // 毕业院校
                this.bkzyInp ? (params.studentBground = this.bkzyInp) : '', // 本科专业
                this.nfInp ? (params.year = this.nfInp) : ''
            console.log(params)
            sessionStorage.setItem('allList', JSON.stringify(params))
            this.$router.push({path: '/allproduct'})
         },
         // getallList
         getAllList() {
            if (sessionStorage.getItem('allList')) {
               let allList = JSON.parse(sessionStorage.getItem('allList'))
               console.log(allList)

               // 学校名称----开头
               if (allList.schoolName) {
                  // 学校名称
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  this.showCoverModel = false
               } else if (allList.schoolName && allList.applyMajor) {
                  // 学校名称
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  this.showCoverModel = false
               } else if (allList.schoolName && allList.applyMajor && allList.v_applyResult) {
                  // 学校名称
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName

                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // this.showCoverModel = false;
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  // console.log(this.resultInp);
                  this.resuFir = false
                  this.resuSec = true
                  this.showCoverModel = false
               } else if (allList.schoolName && allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis) {
                  // 学校名称
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  // this.showCoverModel = false;
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // this.showCoverModel = false;
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  // console.log(this.resultInp);
                  this.resuFir = false
                  this.resuSec = true

                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
               } else if (allList.schoolName && allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar) {
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  // this.showCoverModel = false;
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // this.showCoverModel = false;
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  // console.log(this.resultInp);
                  this.resuFir = false
                  this.resuSec = true
                  // this.showCoverModel = false;
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true

                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  this.showCoverModel = false
               } else if (allList.schoolName && allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr) {
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  // this.showCoverModel = false;
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // this.showCoverModel = false;
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  // console.log(this.resultInp);
                  this.resuFir = false
                  this.resuSec = true
                  // this.showCoverModel = false;
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // this.showCoverModel = false;
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar

                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  this.showCoverModel = false // cover---隐藏
               } else if (allList.schoolName && allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr) {
                  // 学校名称
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  // this.showCoverModel = false;
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // this.showCoverModel = false;
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  // console.log(this.resultInp);
                  this.resuFir = false
                  this.resuSec = true
                  // this.showCoverModel = false;
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // this.showCoverModel = false;
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // this.showCoverModel = false; // cover---隐藏
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // this.showCoverModel = false; // cover---隐藏
                  // ielts

                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  this.showCoverModel = false // cover---隐藏
               } else if (allList.schoolName && allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer) {
                  // 学校名称
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  // this.showCoverModel = false;
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // this.showCoverModel = false;
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  // console.log(this.resultInp);
                  this.resuFir = false
                  this.resuSec = true
                  // this.showCoverModel = false;
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // this.showCoverModel = false;
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // this.showCoverModel = false; // cover---隐藏
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // this.showCoverModel = false; // cover---隐藏
                  // ielts
                  // this.showCoverModel = false; // cover---隐藏
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre

                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  this.showCoverModel = false // cover---隐藏/
               } else if (allList.schoolName && allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr) {
                  // 学校名称
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  // this.showCoverModel = false;
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // this.showCoverModel = false;
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  // console.log(this.resultInp);
                  this.resuFir = false
                  this.resuSec = true
                  // this.showCoverModel = false;
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // this.showCoverModel = false;
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // this.showCoverModel = false; // cover---隐藏
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // this.showCoverModel = false; // cover---隐藏
                  // ielts
                  // this.showCoverModel = false; // cover---隐藏
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  // this.showCoverModel = false; // cover---隐藏
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat

                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  this.showCoverModel = false // cover---隐藏
               } else if (allList.schoolName && allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool) {
                  // 学校名称
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  // console.log(this.resultInp);
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  // this.showCoverModel = false; // cover---隐藏
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat

                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  this.showCoverModel = false // cover---隐藏
               } else if (allList.schoolName && allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground) {
                  // 学校名称
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // this.showCoverModel = false;
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // this.showCoverModel = false; // cover---隐藏
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // this.showCoverModel = false; // cover---隐藏
                  // ielts
                  // this.showCoverModel = false; // cover---隐藏
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  // this.showCoverModel = false; // cover---隐藏
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  // this.showCoverModel = false; // cover---隐藏
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true

                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  this.showCoverModel = false
               } else if (allList.schoolName && allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground && allList.year) {
                  // 学校名称
                  this.schNaFir = false
                  this.schNaSec = true
                  this.schNaInp = allList.schoolName
                  // this.showCoverModel = false;
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // this.showCoverModel = false;
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  // console.log(this.resultInp);
                  this.resuFir = false
                  this.resuSec = true
                  // this.showCoverModel = false;
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // this.showCoverModel = false;
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // this.showCoverModel = false; // cover---隐藏
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // this.showCoverModel = false; // cover---隐藏
                  // ielts
                  // this.showCoverModel = false; // cover---隐藏
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  // this.showCoverModel = false; // cover---隐藏
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  // this.showCoverModel = false; // cover---隐藏
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // this.showCoverModel = false;
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true

                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
                  this.showCoverModel = false
                  this.showCoverModel = false
               }
               // 申请专业 --- 开头
               if (allList.applyMajor && allList.v_applyResult) {
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
               } else if (allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis) {
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
               } else if (allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar) {
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
               } else if (allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr) {
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
               } else if (allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr) {
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
               } else if (allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer) {
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
               } else if (allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr) {
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
               } else if (allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool) {
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
               } else if (allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground) {
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  this.showCoverModel = false
               } else if (allList.applyMajor && allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground && allList.year) {
                  // 申请专业
                  this.majFir = false
                  this.majSec = true
                  this.majorInp = allList.applyMajor
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  this.showCoverModel = false
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
                  this.showCoverModel = false
               }
               // 申请结果--- 开头
               if (allList.v_applyResult) {
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  this.showCoverModel = false
               } else if (allList.v_applyResult && allList.v_applyDegreethis) {
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
               } else if (allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar) {
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
               } else if (allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr) {
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
               } else if (allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr) {
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
               } else if (allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer) {
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
               } else if (allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr) {
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
               } else if (allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool) {
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
               } else if (allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground) {
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
               } else if (allList.v_applyResult && allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground && allList.year) {
                  // 申请结果
                  this.resultInp = JSON.stringify(allList.v_applyResult).replace(/"|\[|\]/g, '')
                  this.resuFir = false
                  this.resuSec = true
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
               }
               // 申请学位---开头
               if (allList.v_applyDegreethis) {
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  this.showCoverModel = false
               } else if (allList.v_applyDegreethis && allList.gpal && allList.gpar) {
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
               } else if (allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr) {
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
               } else if (allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr) {
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // /ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
               } else if (allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer) {
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // /ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
               } else if (allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr) {
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // /ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
               } else if (allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool) {
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // /ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
               } else if (allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground) {
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // /ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
               } else if (allList.v_applyDegreethis && allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground && allList.year) {
                  // 申请学位
                  this.sqxwInp = JSON.stringify(allList.v_applyDegreethis).replace(/"|\[|\]/g, '')
                  this.xwFir = false
                  this.xwSec = true
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // /ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
               }
               // gpa----开头
               if (allList.gpal && allList.gpar) {
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  this.showCoverModel = false
               } else if (allList.gpal && allList.gpar && allList.toefll && allList.toeflr) {
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
               } else if (allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr) {
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
               } else if (allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer) {
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
               } else if (allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr) {
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
               } else if (allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool) {
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
               } else if (allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground) {
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
               } else if (allList.gpal && allList.gpar && allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground && allList.year) {
                  // gpa
                  this.gpaFir = false
                  this.gpaSec = true
                  this.gpaleft = allList.gpal
                  this.gparight = allList.gpar
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
               }

               // toefl-----开头
               if (allList.toefll && allList.toeflr) {
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
               } else if (allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr) {
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
               } else if (allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer) {
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
               } else if (allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr) {
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
               } else if (allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool) {
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
               } else if (allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground) {
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
               } else if (allList.toefll && allList.toeflr && allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground && allList.year) {
                  // toefl
                  this.toeflFir = false
                  this.toeflSec = true
                  this.toeflleft = allList.toefll
                  this.toeflright = allList.toeflr
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
               }

               // ielts-----开头
               if (allList.ieltsl && allList.ieltsr) {
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  this.showCoverModel = false // cover---隐藏
               } else if (allList.ieltsl && allList.ieltsr && allList.grel && allList.grer) {
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
               } else if (allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr) {
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
               } else if (allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool) {
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
               } else if (allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground) {
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
               } else if (allList.ieltsl && allList.ieltsr && allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground && allList.year) {
                  // ielts
                  this.ieltsFir = false
                  this.ieltsSec = true
                  this.ieltsleft = allList.ieltsl
                  this.ieltsright = allList.ieltsr
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
               }

               // gre----开头
               if (allList.grel && allList.grer) {
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  this.showCoverModel = false // cover---隐藏/
               } else if (allList.grel && allList.grer && allList.gmatl && allList.gmatr) {
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
               } else if (allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool) {
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
               } else if (allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground) {
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
               } else if (allList.grel && allList.grer && allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground && allList.year) {
                  // gre
                  this.greFir = false
                  this.greSec = true
                  this.greleft = allList.grel
                  this.greright = allList.grer
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
               }

               // gmat ---- 开头
               if (allList.gmatl && allList.gmatr) {
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  this.showCoverModel = false // cover---隐藏
               } else if (allList.gmatl && allList.gmatr && allList.graduateSchool) {
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
               } else if (allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground) {
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
               } else if (allList.gmatl && allList.gmatr && allList.graduateSchool && allList.studentBground && allList.year) {
                  // gmat
                  this.gmatFir = false
                  this.gmatSec = true
                  this.gmatleft = allList.gmatl
                  this.gmatright = allList.gmatr
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
               }

               // 毕业院校 ---- 开头
               if (allList.graduateSchool) {
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  this.showCoverModel = false // cover---隐藏
               } else if (allList.graduateSchool && allList.studentBground) {
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
               } else if (allList.graduateSchool && allList.studentBground && allList.year) {
                  // 毕业院校
                  this.byyxInp = allList.graduateSchool
                  this.byyxFir = false
                  this.byyxSec = true
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
               }
               // 本科专业 ---- 开头
               if (allList.studentBground) {
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  this.showCoverModel = false
               } else if (allList.studentBground && allList.year) {
                  // 本科专业
                  this.bkzyInp = allList.studentBground
                  this.bkzyFir = false
                  this.bkzySec = true
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
               }
               if (allList.year) {
                  // 年份
                  this.nfInp = allList.year
                  this.nfFir = false
                  this.nfSec = true
                  this.showCoverModel = false
               }
            }
            // console.log(sessionStorage.getItem("allList"));
         },
      },
      // destroyed () {
      //    this.confirmBtn=null;
      // }
   }
</script>

<style lang="scss">
   .schAll {
      width: 100%;
      /*height: 100%;*/
      padding: 0.3rem;
      display: flex;
      flex-direction: column;
      position: relative;

      .viewTop {
         /*  height: 3rem;
           line-height: 3rem;
           font-size: 1rem;*/
         height: 20px;
         line-height: 20px;
         margin: 10px 0 0 5px;

         .img-icon {
            width: 13px;
            margin-right: 10px;
            vertical-align: middle;
         }

         .txtTitle {
            font-size: 12px;
            color: #deb54a;
         }
      }


      .place {
         width: 100%;
         /*height: 100%;*/
         padding-top: 0.5rem;

         .placeWrap {
            width: 100%;
            /*height: 100%;*/
            margin-bottom: 1rem;

            .wid100 {
               width: 100%;
               /*height: 100%;*/
               display: flex;
               flex-wrap: wrap;

               .one {
                  background: #e5f8fa;
               }

               .two {
                  background: #fef1ef;
               }

               .ViewCont1 {
                  width: 31.33%;
                  height: 6rem;
                  margin: 1%;

                  .view1 {
                     width: 98%;
                     height: 100%;
                     display: flex;
                     flex-direction: column;

                     .imgIcon {
                        width: 2rem;
                        height: 1.8rem;
                        // margin: 1rem;
                        margin: auto;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                     }

                     span {
                        text-align: center;
                        margin-bottom: 0.8rem;
                     }
                  }

                  .view2 {
                     width: 100%;
                     height: 100%;
                     display: flex;
                     flex-direction: column;

                     .txtHeader {
                        display: inline-block;
                        width: 100%;
                        height: 1.4rem;
                        line-height: 1.4rem;
                        text-align: center;
                        color: #ffffff;
                     }

                     .txtContent {
                        width: 100%;
                        flex: 1;
                        padding: 0 0.4rem;
                        display: flex;
                        text-align: center;
                        justify-content: center;
                        align-items: center;
                        word-break: break-all;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        // display: -webkit-box;
                        // -webkit-line-clamp: 2;
                        // -webkit-box-orient: vertical;
                        white-space: normal !important;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                     }
                  }
               }
            }
         }

         .confirmBtn {
            width: 96%;
            height: 2.6rem;
            line-height: 2.6rem;
            margin: 0 2% 20px;
            text-align: center;
            border-radius: 5px;
            background: #51C5D2;
            color: #ffffff;
            font-size: 16px;
         }
      }

      .cover {
         position: absolute;
         left: 0;
         top: 0;
         width: 100%;
         height: 125%;
         z-index: 2;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.3);
         display: none;

         .coverModel {
            width: 90%;
            height: 13rem;
            background: #ffffff;
            margin: 24% auto;
            border-radius: 0.4rem;
            position: relative;

            .close {
               /*position: absolute;
               top: 1.8rem;
               right: 1.2rem;
               width: 2rem;
               height: 2rem;
               display: flex;
               justify-content: center;
               align-items: center;
               z-index: 9;*/
               width: 20px;
               height: 32px;
               position: absolute;
               top: 20px;
               right: 10px;
               font-size: 20px;
            }

            .ivu-row {
               width: 90%;
               position: absolute;
               top: 2.6rem;
               left: 5%;
               outline: none;
               border: none;
            }

            // .row{
            // 	width: 90%;
            // 	position: absolute;
            // 	top: 0;
            // 	left: 5%;
            // 	outline: none;
            // 	border: none;
            // }
            .mu-input {
               width: calc(100% - 20px);
               height: 32px;
               border: 1px solid #a9a9a9;
               position: absolute;
               left: 10px;
               top: 20px;
               font-size: 12px;
            }

            .schSureBtn {
               position: absolute;
               width: 100%;
               height: 3rem;
               line-height: 3rem;
               text-align: center;
               border-top: 1px solid #cccccc;
               color: #51C5D2;
               bottom: 0;
               left: 0;
               font-size: 14px;
            }
         }

         .inputAch {
            width: 18rem;
            height: 10rem;
            margin: 10rem auto;
            overflow: hidden;
            background: #ffffff;
            border-radius: 0.4rem;
            position: relative;
            // display: flex;
            justify-content: center;
            align-items: center;

            p {
               line-height: 2rem;
               text-align: center;
               background: #e8d8b4;
               color: #ffffff;
               border-radius: .4rem .4rem 0 0;
            }

            .el-date-editor {
               /* position: absolute;
                top: 3.3rem;
                left: 50%;
                margin-left: -7.5rem;
                width: 15rem;*/
               width: calc(100% - 20px);
               height: 32px;
               margin: 20px 10px;

               .el-input__inner {
                  width: 100%;
                  height: 32px;
                  //   pointer-events: none;
               }

               .el-input__icon {
                  line-height: 32px;
               }
            }

            .picker {
               width: 100%;
               height: 6rem;
               margin-bottom: 1rem;
            }

            .inputs {
               width: calc(100% - 20px);
               margin: 20px 10px;
               /*padding: 1.4rem;*/
               display: flex;
               justify-content: space-between;
               align-items: center;

               input {
                  width: 45%;
                  margin: auto;
                  font-size: 12px;
                  text-align: center;
               }
            }

            input {
               width: 8rem;
            }

            .sureBtn {
               position: absolute;
               bottom: 0;
               left: 0;
               width: 100%;
               height: 2rem;
               text-align: center;
               color: #51C5D2;
            }
         }

         .selectbb {
            width: 18rem;
            height: 18rem;
            background: #ffffff;
            border-radius: .4rem;
            margin: 40% auto;
            position: relative;

            .checktop {
               line-height: 2rem;
               text-align: center;
               background: #e8d8b4;
               color: #ffffff;
               border-radius: .4rem .4rem 0 0;
            }

            .mint-checklist {
               width: 100%;
               height: 14rem;
               overflow: hidden;
               overflow-y: scroll;
            }

            .reselect {
               width: 100%;
               height: 6rem;
               overflow: hidden;
               overflow-y: scroll;

               input {
                  z-index: 1000;
               }
            }

            .container {
               width: 100%;
               height: 2rem;
               overflow: hidden;
            }

            .sureBtn {
               position: absolute;
               bottom: 0;
               left: 0;
               width: 100%;
               height: 2rem;
               line-height: 2rem;
               color: #51C5D2;
               text-align: center;
               border-top: 1px solid #cccccc;
            }
         }
      }

      /* 覆盖框架样式 */

      a:hover {
         color: #515a6e
      }

      .el-picker-panel {
         width: 280px;
      }

      .ivu-select-dropdown {
         width: 18rem;
         height: 8rem;
         overflow: hidden;
         overflow-y: scroll;
      }

      .mu-popover {
         position: absolute;
         top: 5rem;
         left: 0;
         height: 6rem;
         width: 240px;
      }

      .mu-text-field-input {
         padding-left: 5px;
      }

      .el-popper {
         width: 18rem;
      }

      .el-date-picker {
         width: 12rem;
      }

      .mu-input-line, .mu-input-focus-line {
         height: 0
      }

      .mu-input {
         font-size: 16px;
         width: 256px;
         min-height: 30px;
         display: inline-block;
         position: relative;
         color: rgba(0, 0, 0, .54);
         margin-bottom: 0;
         padding-bottom: 0;
         padding-top: 0;
      }

      .mu-input.has-label {
         width: 256px;
         min-height: 30px;
         display: inline-block;
         position: relative;
         color: rgba(0, 0, 0, .54);
         margin-bottom: 0;
         padding: 0 0 0 5px;
         font-size: 12px;
      }

      .mint-checkbox-input:checked + .mint-checkbox-core {
         background-color: #51C5D2;
         border-color: #51C5D2;
      }

      .mint-radio-input:checked + .mint-radio-core {
         background-color: #51C5D2;
         border-color: #51C5D2;
      }
   }

   .mu-item-wrapper .mu-secondary-text-color {
      color: #51C5D2;
   }

   .el-picker-panel.el-date-picker.el-popper.date_popper {
      width: 268px;
   }

   .el-picker-panel.el-date-picker.el-popper.date_popper .el-picker-panel__content {
      width: 238px;
   }
</style>
