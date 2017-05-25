import Vue from 'vue'
import $http from 'vue-resource'
Vue.use($http)

let vm = new Vue();
const configPath = '/api'
window.configPath = configPath

export class Utils {
    get(url, data = {}) {
        url = configPath + url
        return new Promise((resolve, reject) => {
            vm.$http.get(url, data).then((response) => {
                if(response.body.success){
                    resolve(response.body);
                } else {
                    reject(response.body);
                }

            }, function() {
                console.log('接口异常')
            })
        })
    }
    post(url, data = {}, type = { emulateJSON: false }) {
        url = configPath + url
        return new Promise((resolve, reject) => {
            vm.$http.post(url, data, type).then((response) => {
                if(response.body.success){
                    resolve(response.body);
                } else {
                    reject(response.body);
                }
            }, function(response) {
                console.log("接口异常")
            })
        })
    }

}