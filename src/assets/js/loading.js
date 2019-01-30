import { Loading } from "element-ui";

export const loadingIcon = function (that) {
    let options = {
        body: true,
        fullscreen: true,
        lock: true,
        text: "正在加载...",
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 1)"
    }
    that.loading = Loading.service(options);
}

export const closeLoadingIcon = function (that) {
    that.$nextTick(() => {
        that.loading.close();
    })
}
