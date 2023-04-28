<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
			
			<view class="title">默认按钮 默认按钮 默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮</view>
		</view>
		
		<u-button >默认按钮</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		
		
		onLoad() {
			console.log(this.$u.config.v)
			
			
			this.$request(`http://rabbit9.co/front/user/baseInfo?address=0x0000000000000000000000000000000000000000`,'get').then(res => {
				console.log( res )
			})
			
			
		},
		
		
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	
	.title {
		@include bov(2);
	}
</style>
