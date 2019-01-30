<template>
    <div class="index">
        <div class="section">
        <div class="radio-wrap">
            <div class="radio-group">
            <span
                v-for="(tab ,index) in tabs"
                :key="index"
                :class="{cur:iscur===index}"
                @click="iscur=index,tabChange('select' + (index + 1))"
            >{{tab.name}}</span>
            </div>
        </div>
        <!-- <keep-alive> -->
            <component v-bind:is="tabView"></component>
        <!-- </keep-alive> -->
        <!-- <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="合作院校" name="first">
                        <select1 />
                    </el-tab-pane>
                    <el-tab-pane label="全部院校" name="second">
                        <select2 />
                    </el-tab-pane>
                </el-tabs>
        </template>-->
        <!-- <mt-navbar v-model="selected">
                <mt-tab-item id="1">
                    合作院校
                </mt-tab-item>
                <mt-tab-item id="2">
                    全部院校
                </mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <select1 />
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <select2 />
                </mt-tab-container-item>
        </mt-tab-container>-->
        </div>
    </div>
</template>

<script>
// import select1 from "../cooperation/cooperation";   // 合作院校
import select1 from "../cooperation/coope";
// import select2 from "../alls/alls";                     // 全部院校
// import select2 from "../alls/allschool";
import select2 from "../alls/schAll";

export default {
    name: "index",
    data() {
        return {
            selected: "1",
            // selected: false,
            activeName: "first",
            tabView: "select1",
            tabs: [{ name: "合作院校" }, { name: "全部院校" }],
            iscur: 0
        };
    },
    computed: {
        count() {
            // return this.$store.state.count
            // action分发
            return this.$store.dispatch("increment").then(() => {
                console.log("qwewwqeeqweqweqweqwewqeqweqwqw");
            });
        }
    },
    components: {
        select1,
        select2
    },
    methods: {
        tabChange(tab) {
            this.tabView = tab;
            sessionStorage.setItem("whichName", this.iscur);
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    created () {
        // console.log("回来----"+sessionStorage.getItem("whichName"));
        if (sessionStorage.getItem("whichName") == '0') {
            this.iscur = 0;
            this.tabView = "select1";
        } else if (sessionStorage.getItem("whichName") == '1') {
            this.iscur = 1;
            this.tabView = "select2";
        }
    },
    mounted() {
        // this.tabChange();
    }
};
</script>

<style lang="scss">
.index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: scroll;

    .section {
        width: 100%;
        height: 100%;
        overflow: auto;
        // top: 0;
        // position: absolute;
        // z-index: 10;
        .el-tabs {
            width: 100%;
            height: 100%;

            .el-tabs__header {
                width: 100%;
                height: 2%;
                margin: 0;
                flex-shrink: 0;
                cursor: default;

                .el-tabs__nav-wrap {
                    width: 100%;
                    height: 100%;

                .el-tabs__nav-scroll {
                    width: 100%;
                    height: 100%;

                    .el-tabs__nav {
                        width: 100%;
                        height: 100%;
                        // div{
                        //     width: 50%;
                        //     height: 100%;
                        //     text-align: center;
                        // }
                    .el-tabs__item {
                        width: 50%;
                        height: 100%;
                        text-align: center;
                    }
                    }
                }
                }
            }

            .el-tabs__content {
                width: 100%;
                height: 98%;
            }
        }

        .radio-wrap {
            width: 100%;
            height: 2.5rem;
            line-height: 2.5rem;
            font-size: 1rem;

            .radio-group {
                width: 100%;
                height: 100%;

                span {
                display: inline-block;
                width: 50%;
                text-align: center;
                border: 1px solid #e6e6e6;
                }
            }
        }

        .mint-navbar {
            width: 100%;
            height: 5%;
        }

        .mint-tab-container {
            width: 100%;
            flex: 95%;

            .mint-tab-container-wrap {
                width: 100%;
                height: 100%;
            }
        }
    }

    .cur {
        /*color: rgb(77, 77, 240);*/
        /*border-bottom: 2px solid rgb(77, 77, 240);*/
        background-color: #e6e6e6;
        /*color: #333333;*/
        font-size: 16px;
    }
}
</style>
