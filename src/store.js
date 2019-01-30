import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
        doubleCount (state) {
            return state.count * 2
        }
    },
    actions: {
        increment (context) {
            context.commit("increment");
        },
        async actionA ({commit}) {
            commit("getData", await getData())
        },
        async actionB ({dispath, commit}) {
            await dispath("actionA")        // 等待actionA完成
            commit("getOtherData", await getOtherData())
        }
    }
})
