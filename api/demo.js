import {
	postResquest,
	getResquest
} from "../utils/httpUtil.js";

const demo = {
	getInfo(data) {
		return postResquest('/api/demo', data);
	},
	getDemo(id) {
		let params = {
			'id': id
		}
		return getResquest('/api/getDemo', params)
	}
}

export default demo;
