/**
 * GET
 * @param {String} url 接口地址
 * @param {Object} params 请求参数
 */
function get (url, params) {
	return new Promise((resolve, reject) => {
		uni.request({
			method: 'GET',
			url: url,
			data: params,
			timeout: 10000,
			success({ data }) {
				if(data.code === 200) {
					resolve(data.data)
				}else{
					reject()
				}
			},
			fail() {
				reject()
			}
		})
	})
}

/**
 * POST
 * @param {String} url 接口地址
 * @param {Object} params 请求参数
 */
function post (url, params) {
	return new Promise((resolve, reject) => {
		uni.request({
			method: 'POST',
			url: url,
			data: params,
			timeout: 10000,
			success({ data }) {
				if(data.code === 200) {
					resolve(data.data)
				}else{
					reject()
				}
			},
			fail() {
				reject()
			}
		})
	})
}

export {
	get,
	post
}