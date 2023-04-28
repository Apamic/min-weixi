import config from 'common/config.js'


class request {
	constructor() {
		
	}
	
	http(param) {
		let url = config.baseUrl + param.url
		let method = param.method || 'POST'
		let data = param.data
		let token = param.token
		let hideLoading = param.hideLoading || false
		let header = {}
		
		if (method) {
			method = method.toUpperCase()
			
			if (method == "POST") {
				header = {
					'content-type': "application/x-www-form-urlencoded"
				}
			} else {
				header = {
					'content-type': "application/json"
				}
			}
			 
		}
		
		if (!hideLoading) {
			uni.showLoading()
		}
		
		return new Promise((resolve,reject) => {
			uni.request({
				url,
				method,
				data,
				header,
				success: res => {
					if (res.statusCode && res.statusCode != 200) {
						uni.showToast({
							title: "api错误" + res.errMsg,
							icon: 'none'
						});
						return
					}
					
					resolve(res.data)
				},
				fail: (e) => {
					uni.showToast({
						title: "" + e.data.msg,
						icon: 'none'
					});
					resolve(e.data);
				},
				complete() {
					if (!hideLoading) {
						uni.hideLoading();
					}
					resolve()
					return
				}
			})
		})
	}
}


export default request