const base_url = 'http://localhost:8082'
export const postResquest = (url, data) => {

	// 判断请求类型
	let headerData = {
		'content-type': 'application/json',
		'token': uni.getStorageSync('token')
	}
	return new Promise((resolve, reject) => {
		let requestUrl = base_url + url; //请求的网络地址和局地的api地址组合
		uni.showLoading({
			title: '加载中',
			mask: true
		})
		debugger
		return uni.request({
			url: requestUrl,
			data: data,
			method: "POST",
			header: headerData,
			success: (res) => {
				uni.hideLoading()
				//这里是成功的返回码，大家根据自己的实际情况调整
				// if (res.data.code !== '00000') {
				// 	uni.showToast({
				// 		title: '获取数据失败:' + res.data.msg,
				// 		duration: 1000,
				// 		icon: "none"
				// 	})
				// 	return;
				// }
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				uni.hideLoading()
			},
			complete: () => {
				uni.hideLoading()
			}
		});
	})
}
export const getResquest = (url, data) => {

	// 判断请求类型
	let headerData = {
		'content-type': 'application/json',
		'token': uni.getStorageSync('token')
	}
	return new Promise((resolve, reject) => {
		let requestUrl = base_url + url; //请求的网络地址和局地的api地址组合
		uni.showLoading({
			title: '加载中',
			mask: true
		})
		debugger
		return uni.request({
			url: requestUrl,
			data: data,
			method: "GET",
			header: headerData,
			success: (res) => {
				uni.hideLoading()
				//这里是成功的返回码，大家根据自己的实际情况调整
				// if (res.data.code !== '00000') {
				// 	uni.showToast({
				// 		title: '获取数据失败:' + res.data.msg,
				// 		duration: 1000,
				// 		icon: "none"
				// 	})
				// 	return;
				// }
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				uni.hideLoading()
			},
			complete: () => {
				uni.hideLoading()
			}
		});
	})
}
