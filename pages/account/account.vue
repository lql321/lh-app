<template>
	<view>
		记账
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			debugger
			// this.login()
			this.demo()
		},
		methods: {
			login() {
				this.$api.demo.getInfo({
					"userName": 123,
					"password": 321
				}).then((res) => {
					console.log(res)
				}).catch(err => {
					console.log(err)
				});
			},
			demo() {
				this.$api.demo.getDemo(12).then(res => {

				})
			}
		}
	}
</script>

<style>

</style>
