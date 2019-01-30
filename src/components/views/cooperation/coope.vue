<template>
   <div class="coope">
      <!-- top -->
      <div class="viewTop">
         <div @click="schNa" class="tops">
            <!-- <input type="text" name="" id="" @focus="searchfocus" @blur="searchblur"> -->
            <!--<mu-row gutter>-->
            <!--<mu-col span="24" lg="4" sm="6">-->
            <mu-auto-complete placeholder="请输入学校名称" :data="optionsSch" v-model="schNaData"></mu-auto-complete>
            <!--</mu-col>-->
            <!--</mu-row>-->
            <p @click="searBtn"><img src="../../../assets/images/index/search_btn.png" alt=""></p>
         </div>
         <div class="bot">
            <img class="img-icon" src="../../../assets/images/index/msg_icon.png">
            <span class="txtTitle">如下选项可进行多选哦</span>
         </div>
      </div>

      <!-- 宫格 -->
      <div class="place">
         <div class="placeWrap">
            <div class="wid100">
               <div class="ViewCont1 one" @click="areaBtn">
                  <div class="view1" v-if="AreaFir">
                     <img class="imgIcon" src="../../../assets/images/index/area_icon.png" alt="">
                     <span>地区</span>
                  </div>
                  <div class="view2" v-if="AreaSec">
                     <span class="txtHeader" :style="{background: '#61B6BB'}">地区</span>
                     <span class="txtContent" :style="{background: '#E5F8FA'}">{{areaInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 two" @click="pmfsBtn">
                  <div class="view1" v-if="pmfsFir">
                     <img class="imgIcon" src="../../../assets/images/index/way_icon.png" alt="">
                     <span>排名方式</span>
                  </div>
                  <div class="view2" v-if="pmfsSec">
                     <span class="txtHeader" :style="{background: '#F1ACAC'}">排名方式</span>
                     <span class="txtContent" :style="{background: '#FEF1EF'}">{{pmfsInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 three" @click="pmmcBtn" :style="{background: '#FAF1FA'}">
                  <div class="view1" v-if="pmmcFir">
                     <img class="imgIcon" src="../../../assets/images/index/rank_icon.png" alt="">
                     <span>排名名次</span>
                  </div>
                  <div class="view2" v-if="pmmcSec">
                     <span class="txtHeader" :style="{background: '#BF67BF'}">排名名次</span>
                     <span class="txtContent" :style="{background: '#FAF1FA'}">{{pmmcInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 four" @click="zyBtn" :style="{background: '#FDF7EC'}">
                  <div class="view1" v-if="zyFir">
                     <img class="imgIcon" src="../../../assets/images/index/pro_icon.png" alt="">
                     <span>专业</span>
                  </div>
                  <div class="view2" v-if="zySec">
                     <span class="txtHeader" :style="{background: '#C9AF7C'}">专业</span>
                     <span class="txtContent" :style="{background: '#FDF7EC'}">{{zyInp}}</span>
                  </div>
               </div>
               <!-- 合作项目 -->
               <div class="ViewCont1 five" @click="hzxmBtn" :style="{background: '#FDF7EC'}">
                  <div class="view1" v-if="hzxmFir">
                     <img class="imgIcon" src="../../../assets/images/index/item_icon.png" alt="">
                     <span>合作项目</span>
                  </div>
                  <div class="view2" v-if="hzxmSec">
                     <span class="txtHeader" :style="{background: '#C9AF7C'}">合作项目</span>
                     <span class="txtContent" :style="{background: '#FDF7EC'}">{{hzxmInp}}</span>
                  </div>
               </div>
               <!-- GPA -->
               <div class="ViewCont1 six" @click="gpaBtn" :style="{background: '#EEFAF4'}">
                  <div class="view1" v-if="gpaFir">
                     <img class="imgIcon" src="../../../assets/images/index/GPA_icon.png" alt="">
                     <span>GPA</span>
                  </div>
                  <div class="view2" v-if="gpaSec">
                     <span class="txtHeader" :style="{background: '#67AD90'}">GPA</span>
                     <span class="txtContent" :style="{background: '#EEFAF4'}">{{gpaInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 seven" @click="toeflBtn" :style="{background: '#FDF1F7'}">
                  <div class="view1" v-if="toeflFir">
                     <img class="imgIcon" src="../../../assets/images/index/TOEFL_icon.png" alt="">
                     <span>TOEFL</span>
                  </div>
                  <div class="view2" v-if="toeflSec">
                     <span class="txtHeader" :style="{background: '#BF6C95'}">TOEFL</span>
                     <span class="txtContent" :style="{background: '#FDF1F7'}">{{toeflInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 eight" @click="ieltsBtn" :style="{background: '#FEF2F4'}">
                  <div class="view1" v-if="ieltsFir">
                     <img class="imgIcon" src="../../../assets/images/index/LELTS_icon.png" alt="">
                     <span>IELTS</span>
                  </div>
                  <div class="view2" v-if="ieltsSec">
                     <span class="txtHeader" :style="{background: '#D6798B'}">IELTS</span>
                     <span class="txtContent" :style="{background: '#FEF2F4'}">{{ieltsInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 nine" @click="zybjBtn" :style="{background: '#FDF7EC'}">
                  <div class="view1" v-if="zybjFir">
                     <img class="imgIcon" src="../../../assets/images/index/background_icon.png" alt="">
                     <span>专业背景要求</span>
                  </div>
                  <div class="view2" v-if="zybjSec">
                     <span class="txtHeader" :style="{background: '#C9AF7C'}">专业背景要求</span>
                     <span class="txtContent" :style="{background: '#FDF7EC'}">{{zybjInp}}</span>
                  </div>
               </div>

               <div class="ViewCont1 ten" @click="greBtn" :style="{background: '#FEF2F4'}">
                  <div class="view1" v-if="greFir">
                     <img class="imgIcon" src="../../../assets/images/index/GRE_icon.png" alt="">
                     <span>GRE</span>
                  </div>
                  <div class="view2" v-if="greSec">
                     <span class="txtHeader" :style="{background: '#D38998'}">GRE</span>
                     <span class="txtContent" :style="{background: '#FEF2F4'}">{{greInp}}</span>
                  </div>
               </div>
               <div class="ViewCont1 eleven" @click="gmatBtn" :style="{background: '#EEF6FD'}">
                  <div class="view1" v-if="gmatFir">
                     <img class="imgIcon" src="../../../assets/images/index/GMAT_icon.png" alt="">
                     <span>GMAT</span>
                  </div>
                  <div class="view2" v-if="gmatSec">
                     <span class="txtHeader" :style="{background: '#89B9D1'}">GMAT</span>
                     <span class="txtContent" :style="{background: '#EEF6FD'}">{{gmatInp}}</span>
                  </div>
               </div>
               <div class="ViewCont1 twele" @click="gzyqBtn" :style="{background: '#F0FCFC'}">
                  <div class="view1" v-if="gzyqFir">
                     <img class="imgIcon" src="../../../assets/images/index/request_icon.png" alt="">
                     <span>工作要求</span>
                  </div>
                  <div class="view2" v-if="gzyqSec">
                     <span class="txtHeader" :style="{background: '#A2E3E3'}">工作要求</span>
                     <span class="txtContent" :style="{background: '#F0FCFC'}">{{gzyqInp}}</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="cover" :style="{display: showCoverModel === true ? 'block' : 'none'}">
            <!-- 地区 -->
            <div v-if="areaState" class="coverModel">
               <div class="all" @click="allArea">全部</div>
               <div class="arealist">
                  <!-- <mt-radio
                      v-model="areaData"
                      align="right"
                      :options="opArea">
                  </mt-radio> -->
                  <mt-checklist
                          align="right"
                          v-model="areaData"
                          :options="opArea"
                          @change="areacheck"
                          :label="opArea"
                          :value="opArea">
                  </mt-checklist>
               </div>
               <p class="areaBtn" @click="allSureBtn">确定</p>
            </div>
            <!-- 排名方式 -->
            <div v-if="pmfsState" class="coverModel">
               <div class="all" @click="pmfsAll">全部</div>
               <div class="arealist">
                  <mt-radio
                          v-model="pmfsData"
                          align="right"
                          :options="opPmfs">
                  </mt-radio>
               </div>
               <p class="areaBtn" @click="pmfsSureBtn">确定</p>
            </div>
            <!-- 合作项目 -->
            <div v-if="hzxmState" class="coverModel">
               <div class="all" @click="allHzxm">全部</div>
               <div class="arealist">
                  <!-- <mt-radio
                      v-model="hzxmData"
                      align="right"
                      :options="opHzxm">
                  </mt-radio> -->
                  <mt-checklist
                          align="right"
                          v-model="hzxmData"
                          :options="opHzxm"
                          @change="areacheck"
                          :label="opHzxm"
                          :value="opHzxm">
                  </mt-checklist>
               </div>
               <p class="areaBtn" @click="hzxmSureBtn">确定</p>
            </div>

            <div v-if="Gpa" class="inputAch"><!-- gpa -->
               <p class="" @click="allgpa">全部</p>
               <div class="inputs">
                  <input type="text" placeholder="请输入GPA(数字)" v-model="gpaInp">
               </div>
               <div class="gpaB sureBtn" @click="gpaSureBtn">确定</div>
            </div>
            <div v-if="Toefl" class="inputAch">
               <p @click="alltoefl">全部</p>
               <div class="inputs">
                  <input type="text" placeholder="请输入TOEFL(数字)" v-model="toeflInp">
               </div>
               <div class="gpaB sureBtn" @click="toeflSureBtn">确定</div>
            </div>
            <div v-if="Ielts" class="inputAch">
               <p @click="allielts">全部</p>
               <div class="inputs">
                  <input type="text" placeholder="请输入IELTS(数字)" v-model="ieltsInp">
               </div>
               <div class="gpaB sureBtn" @click="ieltsSureBtn">确定</div>
            </div>
            <div v-if="ZybjState" class="inputAch">
               <p class="allBtn" @click="zybjallBtn">全部</p>
               <mt-radio
                       v-model="zybjInp"
                       align="right"
                       :options="['需要', '不需要']">
               </mt-radio>
               <div class="gpaB sureBtn" @click="zybjSureBtn">确定</div>
            </div>
            <div v-if="Gre" class="inputAch">
               <p class="allBtn" @click="greallBtn">全部</p>
               <mt-radio
                       v-model="greInp"
                       align="right"
                       :options="['需要', '不需要']">
               </mt-radio>
               <div class="gpaB sureBtn" @click="greSureBtn">确定</div>
            </div>
            <div v-if="Gmat" class="inputAch">
               <p class="allBtn" @click="gmatallBtn">全部</p>
               <mt-radio
                       align="right"
                       v-model="gmatInp"
                       :options="['需要', '不需要']">
               </mt-radio>
               <div class="gpaB sureBtn" @click="gmatSureBtn">确定</div>
            </div>
            <!-- 排名名次 -->
            <div v-if="pmmcState" class="inputAch">
               <p @click="allpmmc">全部</p>
               <div class="inputs">
                  <input type="text" placeholder="请输入名次(数字)" v-model="pmmcInp">
               </div>
               <div class="gpaB sureBtn" @click="pmmcSureBtn">确定</div>
            </div>
            <!-- 专业 -->
            <div v-if="zyState" class="inputMaj">
               <p @click="allzy">全部</p>
               <!-- <div class="inputs">
                   <input type="text" placeholder="请输入专业名称" v-model="zyInp">
               </div> -->
               <!--<mu-row gutter>-->
               <!--<mu-col span="24" lg="4" sm="6">-->
               <mu-auto-complete style="margin:10px auto 0;border:1px solid #a9a9a9" placeholder="请输入专业" :data="optionsMaj" label=" " v-model="zyInp"></mu-auto-complete>
               <!--</mu-col>-->
               <!--</mu-row>-->
               <div class="gpaB sureBtn" @click="zySureBtn">确定</div>
            </div>
            <div v-if="gzyqState" class="inputAch">
               <p class="allBtn" @click="gzyqallBtn">全部</p>
               <mt-radio
                       align="right"
                       v-model="gzyqInp"
                       :options="['需要', '不需要']">
               </mt-radio>
               <div class="gpaB sureBtn" @click="gzyqSureBtn">确定</div>
            </div>
         </div>
         <div class="confirmBtn" @click="confirmBtn">确认</div>
      </div>
      <div class="mark" v-if="mark"></div>
   </div>
</template>

<script>
   // import {  }
   import {cooperation, cooperSchoolInp, cooperArea, cooperPmfs, cooperPro, allApplyResult, allAcademic, cooperMajor} from '../../../api'

   export default {
      name: 'coope',
      data() {
         return {
            mark: false,
            loadingSch: false,      // 学校名称
            loadingArea: false,     // 地区
            loadingMaj: false,      // 专业
            loading3: false,
            loading4: false,
            showCoverModel: false,  // cover---true:显示//false:隐藏
            areaState: false,
            areaData: [],
            dataArea: [],
            optionsArea: [],
            optionsPmfs: [],
            optionsHzxm: [],
            hzxmData: [],
            pmfsInp: '',
            areaScroll: false,
            pmfsScroll: false,
            hzxmScroll: false,
            pmfsState: false,
            hzxmState: false,        // 申请结果---state
            ZybjState: false,
            sqxw: [],
            applyDegree: '',        // 申请专业
            sqxwState: false,           // 申请学位---state
            pmmcState: false,
            zyState: false,
            dataSch: [],        // 学校名称--data
            optionsSchool: [],  // 学校名称
            optionsSch: [],
            pmfsData: '',
            dataMaj: [],
            dataYX: [],
            dataBKZY: [],
            optionsMajor: [],
            optionsGTBG: [],
            optionsBKZY: [],
            areaInp: '',
            pmmcInp: '',
            zyInp: '',
            AreaFir: true,     // 地区的第一个显示
            AreaSec: false,   // 地区的第二个显示
            schNaData: '',
            pmfsFir: true,
            pmfsSec: false,
            pmmcFir: true,
            pmmcSec: false,
            zyFir: true,
            zySec: false,
            hzxmFir: true,
            hzxmSec: false,
            gpaFir: true,
            gpaSec: false,
            toeflFir: true,
            toeflSec: false,
            ieltsFir: true,
            ieltsSec: false,
            zybjFir: true,
            zybjSec: false,
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
            gzyqFir: true,
            gzyqSec: false,
            hzxmInp: '',
            zybjInp: '',
            gpaInp: '',
            Gpa: false,
            Toefl: false,
            Ielts: false,
            Gre: false,
            Gmat: false,
            toeflInp: '',
            ieltsInp: '',
            greInp: '',
            gmatInp: '',
            byyxData: '',
            bkzyData: '',
            gzyqState: false,
            nfinput: '',
            gzyqInp: '',
            pageNo: 1,
            pageSize: 10,
            zybjOptions: [],
            opArea: [],
            opPmfs: [],
            opHzxm: [],
            optionsMaj: [],
         }
      },
      methods: {
         schNa() {
            cooperSchoolInp().then(res => {
               console.log(res)
               this.dataSch = res.datas
               if (this.dataSch) {
                  for (let i = 0; i < this.dataSch.length; i++) {
                     this.optionsSch.push(this.dataSch[i].schoolName)
                  }
               }
            })
         },
         // searBtn
         searBtn() {
            // console.log("as");
            let cooSchoolName = this.schNaData;
            sessionStorage.setItem('cooSchoolName', JSON.stringify(cooSchoolName));
            this.$router.push({path: '/cooBuSchool'});
            console.log(cooSchoolName);
         },
         // 地区按钮
         areaBtn() {
            console.log('地区');
            this.areaScroll = true;
            if (this.optionsArea.length != 0) {
               this.optionsArea
            } else {
               cooperArea().then(res => {
                  this.optionsArea = res.datas
                  // console.log(this.optionsArea);
                  for (let i = 0; i < this.optionsArea.length; i++) {
                     this.opArea.push(this.optionsArea[i].state)
                  }
               }).catch(err => {
                  console.log(err)
               })
            }
            
            this.showCoverModel = true     // cover---显示
            this.areaState = true
            this.pmfsState = false
            this.hzxmState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.pmmcState = false
            this.zyState = false
            this.gzyqState = false
            this.ZybjState = false
         },
         areacheck() {},
         // 地区--all
         allArea() {
            this.areaData = [];
            this.areaInp = '';
            this.AreaFir = true;
            this.AreaSec = false;
            this.areaState = false;
            this.showCoverModel = false;
         },
         // 地区 --- 确定
         allSureBtn() {
            console.log(this.areaData);
            if (this.areaData.length != 0) {
               this.areaInp = JSON.stringify(this.areaData).replace(/"|\[|\]/g, '')
               this.AreaFir = false
               this.AreaSec = true
               this.areaState = false
               this.showCoverModel = false
            } else {
               this.areaState = false
               this.showCoverModel = false
               this.AreaFir = true
               this.AreaSec = false
            }
         },
         // 排名方式
         pmfsBtn() {
            console.log('排名方式');
            this.pmfsScroll = true;
            if (this.optionsPmfs.length != 0) {
               this.optionsPmfs
            } else {
               cooperPmfs().then(res => {
                  console.log(res.datas);
                  this.optionsPmfs = res.datas;
                  for (let j = 0; j < this.optionsPmfs.length; j++) {
                     this.opPmfs.push(this.optionsPmfs[j].rankWay);
                  }
               }).catch(err => {
                  console.log(err);
               })
            }
            
            this.showCoverModel = true;     // cover---显示
            this.areaState = false;
            this.pmfsState = true;
            this.hzxmState = false;
            this.sqxwState = false;
            this.Gpa = false;
            this.Toefl = false;
            this.Ielts = false;
            this.Gre = false;
            this.Gmat = false;
            this.pmmcState = false;
            this.zyState = false;
            this.gzyqState = false;
            this.ZybjState = false;
         },
         // 排名方式--全部
         pmfsAll() {
            this.pmfsData = '';
            this.pmfsInp = '';
            this.pmfsFir = true;
            this.pmfsSec = false;
            this.pmfsState = false;
            this.showCoverModel = false;
         },
         // 排名方式--- 确定
         pmfsSureBtn() {
            if (this.pmfsData != '') {
               this.pmfsInp = this.pmfsData;
               this.pmfsFir = false;
               this.pmfsSec = true;
               this.showCoverModel = false;
            } else {
               this.pmfsFir = true;
               this.pmfsSec = false;
               this.showCoverModel = false;
            }
         },
         // 排名名次
         pmmcBtn() {
            console.log('排名名次');
            this.showCoverModel = true;     // cover---显示
            this.areaState = false;
            this.pmfsState = false;
            this.hzxmState = false;
            this.sqxwState = false;
            this.Gpa = false;
            this.Toefl = false;
            this.Ielts = false;
            this.Gre = false;
            this.Gmat = false;
            this.pmmcState = true;
            this.zyState = false;
            this.gzyqState = false;
            this.ZybjState = false;
         },
         allpmmc() {
            this.pmmcInp = '';
            this.pmmcFir = true;
            this.pmmcSec = false;
            this.showCoverModel = false;
         },
         // 排名名次 --- 确定
         pmmcSureBtn() {
            if (this.pmmcInp != '') {
               this.pmmcInp = this.pmmcInp;
               this.pmmcFir = false;
               this.pmmcSec = true;
               this.showCoverModel = false;
            } else {
               this.pmmcFir = true;
               this.pmmcSec = false;
               this.showCoverModel = false;
            }

         },
         // 专业
         zyBtn() {
            console.log('申请学位');
            if (this.optionsMaj.length != 0) {
               this.optionsMaj
            } else {
               cooperMajor().then((res) => {
                  for (let i = 0; i < res.datas.length; i++) {
                     this.optionsMaj.push(res.datas[i].major);
                  }
               }).catch((err) => {
                  console.log(err);
               })
            }
            
            this.showCoverModel = true;     // cover---显示
            this.areaState = false;
            this.pmfsState = false;
            this.hzxmState = false;
            this.sqxwState = false;
            this.Gpa = false;
            this.Toefl = false;
            this.Ielts = false;
            this.Gre = false;
            this.Gmat = false;
            this.pmmcState = false;
            this.zyState = true;
            this.gzyqState = false;
            this.ZybjState = false;
         },
         allzy() {
            this.zyInp = '';
            this.zyFir = true;
            this.zySec = false;
            this.showCoverModel = false;
         },
         // 专业 -- 确定
         zySureBtn() {
            if (this.zyInp != '') {
               this.zyInp = this.zyInp;
               this.zyFir = false;
               this.zySec = true;
               this.showCoverModel = false;
            } else {
               this.zyFir = true;
               this.zySec = false;
               this.showCoverModel = false;
            }
         },
         sqxwTop() {},
         // 申请学位----确定
         sqxwSureBtn() {
            this.sqxwInp = JSON.stringify(this.applyDegree).replace(/"|\[|\]/g, '');
            console.log(this.sqxwInp);
            this.zyFir = false;
            this.zySec = true;
            this.showCoverModel = false;
         },
         // hzxmBtn
         hzxmBtn() {
            console.log('hzxm');
            this.hzxmScroll = true;
            if (this.optionsHzxm.length != 0) {
               this.optionsHzxm
            } else {
               cooperPro().then(res => {
                  console.log(res.datas);
                  this.optionsHzxm = res.datas;
                  for (let n = 0; n < this.optionsHzxm.length; n++) {
                     this.opHzxm.push(this.optionsHzxm[n].cooperatePro);
                  }
               }).catch(err => {
                  console.log(err);
               })
            }
            
            this.showCoverModel = true;     // cover---显示
            this.areaState = false;
            this.pmfsState = false;
            this.hzxmState = true;
            this.sqxwState = false;
            this.Gpa = false;
            this.Toefl = false;
            this.Ielts = false;
            this.Gre = false;
            this.Gmat = false;
            this.pmmcState = false;
            this.zyState = false;
            this.gzyqState = false;
            this.ZybjState = false;

         },
         allHzxm() {
            this.hzxmData = [];
            this.hzxmInp = '';
            this.hzxmFir = true;
            this.hzxmSec = false;
            this.showCoverModel = false;     // cover---隐藏
         },
         // 合作项目 - --确定
         hzxmSureBtn() {
            if (this.hzxmData != '') {
               this.hzxmInp = JSON.stringify(this.hzxmData).replace(/"|\[|\]/g, '')
               this.hzxmFir = false
               this.hzxmSec = true
               this.showCoverModel = false     // cover---隐藏
            } else {
               this.hzxmFir = true
               this.hzxmSec = false
               this.showCoverModel = false     // cover---隐藏
            }
         },
         // gpaBtn
         gpaBtn() {
            this.showCoverModel = true     // cover---显示
            this.areaState = false
            this.pmfsState = false
            this.hzxmState = false
            this.sqxwState = false
            this.Gpa = true
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.pmmcState = false
            this.zyState = false
            this.gzyqState = false
            this.ZybjState = false
         },
         allgpa() {
            this.gpaInp = ''
            this.showCoverModel = false     // cover---隐藏
            this.gpaFir = true
            this.gpaSec = false
         },
         gpaSureBtn() {
            if (this.gpaInp != '') {
               this.showCoverModel = false     // cover---隐藏
               this.gpaFir = false
               this.gpaSec = true
            } else {
               this.showCoverModel = false     // cover---隐藏
               this.gpaFir = true
               this.gpaSec = false
            }

         },
         // toeflBtn
         toeflBtn() {
            console.log('toefl');
            this.showCoverModel = true;     // cover---显示
            this.areaState = false;
            this.pmfsState = false;
            this.hzxmState = false;
            this.sqxwState = false;
            this.Gpa = false;
            this.Toefl = true;
            this.Ielts = false;
            this.Gre = false;
            this.Gmat = false;
            this.pmmcState = false;
            this.zyState = false;
            this.gzyqState = false;
            this.ZybjState = false;
         },
         alltoefl() {
            this.toeflInp = '';
            this.showCoverModel = false;     // cover---隐藏
            this.toeflFir = true;
            this.toeflSec = false;
         },
         // toefl---确定
         toeflSureBtn() {
            if (this.toeflInp != '') {
               this.showCoverModel = false;     // cover---隐藏
               this.toeflFir = false;
               this.toeflSec = true;
            } else {
               this.showCoverModel = false;     // cover---隐藏
               this.toeflFir = true;
               this.toeflSec = false;
            }

         },
         // ieltsBtn
         ieltsBtn() {
            console.log('ielts')
            this.showCoverModel = true     // cover---显示
            this.areaState = false
            this.pmfsState = false
            this.hzxmState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = true
            this.Gre = false
            this.Gmat = false
            this.pmmcState = false
            this.zyState = false
            this.gzyqState = false
            this.ZybjState = false

         },
         allielts() {
            this.ieltsInp = ''
            this.showCoverModel = false     // cover---隐藏
            this.ieltsFir = true
            this.ieltsSec = false
         },
         // ielts---确定
         ieltsSureBtn() {
            if (this.ieltsInp != '') {
               this.showCoverModel = false     // cover---隐藏
               this.ieltsFir = false
               this.ieltsSec = true
            } else {
               this.showCoverModel = false     // cover---隐藏
               this.ieltsFir = true
               this.ieltsSec = false
            }
         },
         // 专业背景要求 ---Btn
         zybjBtn() {
            console.log('专业背景要求');
            this.showCoverModel = true;     // cover---显示
            this.areaState = false;
            this.pmfsState = false;
            this.hzxmState = false;
            this.sqxwState = false;
            this.Gpa = false;
            this.Toefl = false;
            this.Ielts = false;
            this.Gre = false;
            this.Gmat = false;
            this.pmmcState = false;
            this.zyState = false;
            this.gzyqState = false;
            this.ZybjState = true;
         },
         // 专业背景---确定
         zybjSureBtn() {
            if (this.zybjInp != '') {
               this.showCoverModel = false;     // cover---隐藏
               this.zybjFir = false;
               this.zybjSec = true;
            } else {
               this.showCoverModel = false;     // cover---隐藏
               this.zybjFir = true;
               this.zybjSec = false;
            }
         },
         zybjallBtn() {
            this.zybjInp = '';
            this.showCoverModel = false;     // cover---隐藏
            this.zybjFir = true;
            this.zybjSec = false;
         },
         // greBtn
         greBtn() {
            console.log('gre')
            this.showCoverModel = true     // cover---显示
            this.areaState = false
            this.pmfsState = false
            this.hzxmState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = true
            this.Gmat = false
            this.pmmcState = false
            this.zyState = false
            this.gzyqState = false
            this.ZybjState = false
         },
         // gre---确定
         greSureBtn() {
            if (this.greInp != '') {
               this.showCoverModel = false;     // cover---隐藏
               this.greFir = false;
               this.greSec = true;
            } else {
               this.showCoverModel = false;     // cover---隐藏
               this.greFir = true;
               this.greSec = false;
            }
         },
         greallBtn() {
            this.greInp = '';;
            this.showCoverModel = false;     // cover---隐藏
            this.greFir = true;
            this.greSec = false;
         },
         // gmatBtn
         gmatBtn() {
            console.log('gmat')
            this.showCoverModel = true;     // cover---显示
            this.areaState = false;
            this.pmfsState = false;
            this.hzxmState = false;
            this.sqxwState = false;
            this.Gpa = false;
            this.Toefl = false;
            this.Ielts = false;
            this.Gre = false;
            this.Gmat = true;
            this.pmmcState = false;
            this.zyState = false;
            this.gzyqState = false;
            this.ZybjState = false;
         },
         // gamt---确定
         gmatSureBtn() {
            if (this.gmatInp != '') {
               this.showCoverModel = false;     // cover---隐藏
               this.gmatFir = false;
               this.gmatSec = true;
            } else {
               this.showCoverModel = false;     // cover---隐藏
               this.gmatFir = true;
               this.gmatSec = false;
            }
         },
         gmatallBtn() {
            this.gmatInp = '';
            this.showCoverModel = false;     // cover---隐藏
            this.gmatFir = true;
            this.gmatSec = false;
         },
         // 工作要求 --- Btn
         gzyqBtn() {
            console.log('工作要求')
            this.showCoverModel = true     // cover---显示
            this.areaState = false
            this.pmfsState = false
            this.hzxmState = false
            this.sqxwState = false
            this.Gpa = false
            this.Toefl = false
            this.Ielts = false
            this.Gre = false
            this.Gmat = false
            this.pmmcState = false
            this.zyState = false
            this.gzyqState = true
            this.ZybjState = false
         },

         // 工作要求---确定
         gzyqSureBtn() {
            if (this.gzyqInp != '') {
               this.showCoverModel = false;     // cover---隐藏
               this.gzyqFir = false;
               this.gzyqSec = true;
            } else {
               this.showCoverModel = false;     // cover---隐藏
               this.gzyqFir = true;
               this.gzyqSec = false;
            }
         },
         gzyqallBtn() {
            this.gzyqInp = '';
            this.showCoverModel = false;     // cover---隐藏
            this.gzyqFir = true;
            this.gzyqSec = false;
         },
         confirmBtn() {
            let params = {
               pageNo: this.pageNo,
               pageSize: this.pageSize,
            }

            this.areaInp ? (params.v_state = this.areaInp) : '';
            this.pmfsInp ? (params.rankWay = this.pmfsInp) : '';
            this.pmmcInp ? (params.rank = this.pmmcInp) : '';
            this.zyInp ? (params.major = this.zyInp) : '';
            this.hzxmInp ? (params.v_cooperatePro = this.hzxmInp) : '';
            this.gpaInp ? (params.gpa = this.gpaInp) : '';
            this.toeflInp ? (params.toefl = this.toeflInp) : '';
            this.ieltsInp ? (params.ielts = this.ieltsInp) : '';
            this.zybjInp ? (params.majorBground = this.zybjInp) : '';
            this.greInp ? (params.gre = this.greInp) : '';
            this.gmatInp ? (params.gmat = this.gmatInp) : '';
            this.gzyqInp ? (params.jobRequire = this.gzyqInp) : '';
            console.log(params);
            sessionStorage.setItem('cooFilter', JSON.stringify(params));
            this.$router.push({path: '/coomajors'});
         },
         // 学校名称
         remoteSchool(query) {
            if (query !== '') {
               this.loadingSch = true;
               setTimeout(() => {
                  this.loadingSch = false;
                  this.optionsSchool = this.dataSch.filter(item => item.schoolName.toLowerCase().indexOf(query.toLowerCase()) > -1)
               }, 200)
            } else {
               this.optionsSchool = [];
            }
         },
         // 申请专业
         remoteMajor(query) {
            if (query !== '') {
               this.loadingMaj = true;
               setTimeout(() => {
                  this.loadingMaj = false;
                  console.log(this.statesMA);
                  this.optionsMajor = this.dataMaj.filter(item => item.majorName.toLowerCase().indexOf(query.toLowerCase()) > -1)
               }, 200)
            } else {
               this.optionsMajor = [];
            }
         },
         // 毕业院校
         remotegtschool(query) {
            if (query !== '') {
               this.loading3 = true;
               setTimeout(() => {
                  this.loading3 = false;
                  this.optionsGTBG = this.dataYX.filter(item => item.graduateSchool.toLowerCase().indexOf(query.toLowerCase()) > -1)
               }, 200)
            } else {
               this.optionsGTBG = [];
            }
         },
         // 本科专业
         remotebgStudent(query) {
            if (query !== '') {
               this.loading4 = true;
               setTimeout(() => {
                  this.loading4 = false;
                  this.optionsBKZY = this.dataBKZY.filter(item => item.bgStudent.toLowerCase().indexOf(query.toLowerCase()) > -1)
               }, 200)
            } else {
               this.optionsBKZY = [];
            }
         },
      },
   }
</script>

<style lang="scss">
   .coope {
      width: 100%;
      /*height: 100%;*/
      padding: .3rem;
      display: flex;
      flex-direction: column;
      position: relative;
      // .mu-input{
      //    width: 40rem;
      // }
      .viewTop {
         width: 100%;
         /*height: 6.8rem;*/
         /*padding: 1rem 0 1rem 0;*/
         padding: 1rem 0 0 0;

         .tops {
            position: relative;
            width: 100%;
            height: 2rem;
            padding: 0 0.1rem 0 .8rem;
            border: 1px solid #51C5D2;
            border-radius: 4px;

            p {
               position: absolute;
               top: .2rem;
               right: 0;
               width: 2rem;
               height: 2rem;
               z-index: 999;

               img {
                  width: 1.4rem;
                  height: 1.4rem;
                  right: 0;
                  top: 0;
               }
            }

            .row {
               width: 100%;
               height: 2rem;

               .col {
                  width: 100%;
                  height: 100%;
                  position: relative;

                  .mu-input {
                     position: absolute;
                     top: -.6rem;
                     left: 0;
                     width: 500%;
                     height: 100%;

                     .mu-input-content {
                        width: 100%;
                        height: 61%;
                     }
                  }

                  .has-label {
                     padding-top: 0px;
                     padding-bottom: 0px;
                  }
               }
            }
         }

         .bot {
            /*height: 1rem;*/
            /*line-height: 1rem;*/
            /*margin-top: 1.5rem;*/
            /*font-size: 1rem;*/
            height: 20px;
            line-height: 20px;
            margin: 10px 0 5px 5px;

            .txtTitle {
               font-size: 12px;
               color: #deb54a;
            }
         }
      }

      .img-icon {
         /*width: .6rem;*/
         /*margin-right: .4rem;*/
         width: 13px;
         margin-right: 10px;
         vertical-align: middle;
      }

      .place {
         width: 100%;
         /*height: 100%;*/

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
                  /*margin: 0 0.3rem;*/
                  margin: 1%;

                  .view1 {
                     width: 100%;
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
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        text-overflow: ellipsis;
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
         height: 100%;
         z-index: 2;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.3);
         display: none;

         .coverModel {
            width: 80%;
            height: 20rem;
            background: #ffffff;
            margin: 40% auto;
            border-radius: .4rem;
            position: relative;

            .arealist {
               width: 100%;
               height: 17rem;
               overflow: hidden;
               overflow-y: scroll;
            }

            .areaBtn {
               width: 100%;
               height: 2.5rem;
               line-height: 2.5rem;
               border-top: 1px solid #cccccc;
               background: #ffffff;
               color: #51C5D2;
               text-align: center;
               border-radius: 0 0 .4rem .4rem;
            }

            .all {
               width: 100%;
               height: 2.2rem;
               line-height: 2.2rem;
               text-align: center;
               background: #d3c695;
               color: #ffffff;
               border-radius: .4rem .4rem 0 0;
            }

            .ivu-row {
               width: 100%;
               position: absolute;
               top: .4rem;
               left: 0;
               outline: none;
               border: none;
            }

            .schSureBtn {
               position: absolute;
               width: 100%;
               height: 2rem;
               line-height: 2rem;
               text-align: center;
               border-top: 1px solid #cccccc;
               color: #51C5D2;
               bottom: 0;
               left: 0;
            }
         }

         .inputAch {
            width: 17rem;
            /*height: 11rem;*/
            margin: 40% auto;
            background: #ffffff;
            border-radius: .4rem;
            position: relative;

            p {
               width: 100%;
               height: 2rem;
               line-height: 2rem;
               text-align: center;
               background: #d3c695;
               color: #ffffff;
               border-radius: .4rem .4rem 0 0;
            }

            .allBtn {
               width: 100%;
               height: 1.8rem;
               line-height: 2.2rem;
               font-size: 1rem;
               text-align: center;
               background: #d3c695;
               color: #ffffff;
               border-radius: .4rem .4rem 0 0;
            }

            .inputs {
               width: 100%;
               height: 5.5rem;
               display: flex;
               justify-content: center;
               align-items: center;

               input {
                  width: 80%;
                  height: 32px;
                  padding: 0 0 0 5px;
                  margin: auto;
               }
            }

            .sureBtn {
               width: 100%;
               height: 2rem;
               line-height: 2rem;
               text-align: center;
               color: #51C5D2;
               z-index: inherit;
            }
         }

         .inputMaj {
            width: 17rem;
            height: 15rem;
            margin: 40% auto;
            background: #ffffff;
            border-radius: .4rem;
            position: relative;
            text-align: center;

            p {
               width: 100%;
               height: 2rem;
               line-height: 2rem;
               text-align: center;
               background: #d3c695;
               color: #ffffff;
               border-radius: .4rem .4rem 0 0;
            }

            .allBtn {
               width: 100%;
               height: 1.8rem;
               line-height: 2.2rem;
               font-size: 1rem;
               text-align: center;
               background: #d3c695;
               color: #ffffff;
               border-radius: .4rem .4rem 0 0;
            }

            .inputs {
               width: 100%;
               height: 5.5rem;
               display: flex;
               justify-content: center;
               align-items: center;

               input {
                  width: 80%;
                  margin: auto;
               }
            }

            .sureBtn {
               width: 100%;
               height: 3rem;
               line-height: 3rem;
               text-align: center;
               color: #51C5D2;
               z-index: inherit;
               position: absolute;
               bottom: 0;
            }
         }

         .selectbb {
            width: 18rem;
            height: 6rem;
            background: #ffffff;
            margin: 40% auto;

            .checktop {
               text-align: center;
            }

            .sureBtn {
               width: 100%;
               color: #51C5D2;
               text-align: center;
            }
         }
      }

      /* 覆盖框架样式 */

      a:hover {
         color: #515a6e
      }

      .mu-dialog {
         height: 10rem;
      }

      .mark {
         width: 100%;
         height: 100%;
         position: absolute;
         top: 0;
         left: 0;
         background: rgba(0, 0, 0, .2)
      }

      .mu-dialog-title {
         text-align: center;
         color: #ffffff;
      }

      .mu-popover {
         position: absolute;
         left: 60px;
         top: 3rem;
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

      .mu-secondary-text-color {
         color: #51C5D2;
      }
   }
</style>
