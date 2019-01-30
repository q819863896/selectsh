import {stringify} from 'qs'
import axios from 'axios'

axios.defaults.validateStatus = status => {
   return status < 500
}

// 设置请求token
axios.interceptors.request.use(config => {
   var token = sessionStorage.getItem('token')
   config.headers['Authorization'] = 'Bearer ' + token
   return config
})

// 接口错误拦截
axios.interceptors.response.use(res => {
   if (res.status === 401) {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
      window.router.push({path: '/e2login'});
      return res;
   } else {
      return res;
   }
}, err => {
   return Promise.reject(err);
})

// axios.defaults.baseURL = 'http://10.202.203.55:8081';
// axios.defaults.baseURL = "http://10.149.0.173:8081";
axios.defaults.baseURL = 'http://qtmyxx.xdf.cn';

axios.defaults.timeout = 1000 * 30;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.headers.get['Content-Type'] = 'application/json';

export const E2Login = params => {
   return axios.post('/yxyy/company/e2Login', params).then(res => res.data)
}

export const login = params => {
   return axios.post('/login', stringify(params)).then(res => res.data)
}

export const requestToken = params => {
   return axios.post('/oauth/token', stringify(params)).then(res => res.data)
}
export const requestUser = params => {
   return axios.post('/auth/getUserInfo', params).then(res => res.data)
}

//获取验证码 token
export const loginVerify = () => {
   return axios.post('/auth/captcha').then(res => res.data)
}

// 合作院校
export const cooperation = params => {
   return axios.post('/xxb/cooperate/getServiceByParam', stringify(params)).then(res => res.data)
}

// 合作院校
export const cooperByParam = params => {
   return axios.post('/xxb/cooperate/getCooperateByParam', stringify(params)).then(res => res.data)
}

// 合作院校的----根据学校名---搜索
export const CooperateBySchoolEngName = params => {
   return axios.post('/xxb/cooperate/getCooperateBySchoolEngName', stringify(params)).then(res => res.data)
}

// 合作院校的----院校
export const cooperSchoolInp = () => {
   return axios.post('/xxb/cooperate/getcooperSchoolByInput').then(res => res.data)
}

// 合作院校的----地区
export const cooperArea = () => {
   return axios.post('/xxb/cooperate/getArea').then(res => res.data)
}

// 合作院校的----专业--提示
export const cooperMajor = () => {
   return axios.post('/xxb/cooperate/getMajor').then(res => res.data)
}

// 合作院校的----排名方式
export const cooperPmfs = () => {
   return axios.post('/xxb/cooperate/getRankWay').then(res => res.data)
}

// 合作院校的----合作项目
export const cooperPro = () => {
   return axios.post('/xxb/cooperate/getCooperatePro').then(res => res.data)
}

// 合作院校-----点击筛选后的---学校名称
export const coopSchOrMaj = params => {
   return axios.post('/xxb/cooperate/getSchOrMajorBySchoolName', stringify(params)).then(res => res.data)
}

// 合作院校-----进入最后的详情页
export const coopById = params => {
   return axios.post('/xxb/cooperate/getCooperateById', stringify(params)).then(res => res.data)
}

// 合作院校 ======申请学校====input
// export const coopSchoolName = params => {
//     return axios.post("/xxb/service/getSchoolByInput", stringify(params)).then(res => res.data);
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 全部院校
export const alls = params => {
   return axios.post('/xxb/service/getAllServiceByParam', stringify(params)).then(res => res.data)
}

// 全部院校------学校名称--change
export const allSchoolName = () => {
   return axios.post('/xxb/service/getSchoolByInput').then(res => res.data)
}

// 全部院校------申请专业--change
export const allMajor = () => {
   return axios.post('/xxb/service/getMajorByInput').then(res => res.data)
}

// 全部院校------申请结果----select
export const allApplyResult = () => {
   return axios.post('/xxb/service/getApplyResultByOption').then(res => res.data)
}

// 全部院校------申请学位----select
export const allAcademic = () => {
   return axios.post('/xxb/service/getAcademicByOption').then(res => res.data)
}

// 全部院校------本科专业--change
export const allBgStudent = () => {
   return axios.post('/xxb/service/getBgStudentByInput').then(res => res.data)
}

// 全部院校------毕业院校--change
export const allGraduateSchool = () => {
   return axios.post('/xxb/service/getGraduateSchoolByInput').then(res => res.data)
}

// 全部院校---详情
export const allsdetails = params => {
   return axios.post('/xxb/service/getServiceByNumber', stringify(params)).then(res => res.data)
}

