<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
			
			<view class="title">默认按钮 默认按钮 默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮默认按钮</view>
		</view>
		
		<u-button >默认按钮</u-button>
		{{i18n.common.noData}}
	</view>
</template>

<script>
	import i18n from '@/mixins/i18n.vue'
	export default {
		mixins: [i18n],
		watch:{
			
			"$i18n.locale"() {
				
				
			}
			
		},
		
		data() {
			return {
				title: 'Hello'
			}
		},
		
		
		onLoad() {
			console.log(this.$u.config.v)
			
			this.$request({
				url: `http://rabbit9.co/front/user/baseInfo?address=0x0000000000000000000000000000000000000000`,
				method: 'get'
			}).then(res => {
				console.log( res )
			})
			
			console.log(this.$i18n.locale,'$i18n.locale')
			
			setTimeout(() => {
				console.log('触发')
				this.$i18n.locale = this.$i18n.locale == 'Cn' ? 'En' : 'Cn'
				uni.setStorageSync('language', this.$i18n.locale == 'Cn' ? 'En' : 'Cn')
			},3000)
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
