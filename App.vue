<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import 'style/base.css';
	@import 'style/flex.css';
	@import 'style/position.css';
	@import 'style/text.css';
	@import 'style/common.css';
	
	
	
	body{
		// background: #0C121D;
		min-height: calc(100vh - var(--window-bottom) - var(--window-top));
	}
	
</style>
