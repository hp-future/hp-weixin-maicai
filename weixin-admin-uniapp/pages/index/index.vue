<template>
	<view class="home-container">
		<view class="form">
			<view class="form-item">
				<text>商品类别</text>
				<view class="input" @click="selectBoxVisible = true">{{formInfo.goodsClass}}</view>
				<view class="select-box" v-if="selectBoxVisible">
					<view class="select-box-content">
						<view
							class="option"
							v-for="(item, index) in classList"
							:key="item.id"
							:class="{'is-active': item.goods_class_name === formInfo.goodsClass}"
							@click.stop="classChangeHandler($event, index)"
						>{{item.goods_class_name}}</view>
					</view>
				</view>
			</view>
			<view class="form-item">
				<text>商品名称</text>
				<input type="text" :value="formInfo.goodsName" />
			</view>
			<view class="form-item">
				<text>商品单价</text>
				<input type="text" :value="formInfo.goodsPrice" />
			</view>
			<view class="form-item">
				<text>商品重量</text>
				<input type="text" :value="formInfo.goodsWeight" />
			</view>
			<view class="form-item">
				<text>商品配图</text>
				<input type="text" :value="formInfo.goodsImg" />
			</view>
		</view>
	</view>
</template>

<script>
	import { queryClassList } from '../../request/home.js'
	export default {
		data() {
			return {
				selectBoxVisible: false,
				classList: [],
				formInfo: {
					goodsClass: '',
					goodsName: '',
					goodsPrice: '',
					goodsWeight: '',
					goodsImg: ''
				}
			}
		},
		onLoad() {
			this.getClassList()
		},
		methods: {
			// 获取商品类别列表数据
			async getClassList() {
				const data = await queryClassList('http://localhost:3000/goodsClassList')
				this.classList = data || []
			},
			// 选择商品类别
			classChangeHandler(e, index) {
				e.stopPropagation()
				console.log(index)
				this.formInfo.goodsClass = this.classList[index].goods_class_name
				this.selectBoxVisible = false
			}
		}
	}
</script>

<style scoped lang="scss">
.home-container {
	width: 100vw;
	height: 100vh;
	padding: 40rpx;
	box-sizing: border-box;
	font-size: 28rpx;
	.form-item {
		display: flex;
		align-items: center;
		position: relative;
		margin-bottom: 30rpx;
		& > text {
			margin-right: 20rpx;
		}
		& > input, & > .input {
			width: 320rpx;
			height: 52rpx;
			line-height: 40rpx;
			border: 1rpx solid #eee;
			border-radius: 8rpx;
			padding: 6rpx;
			box-sizing: border-box;
		}
		.select-box {
			position: absolute;
			top: calc(100% + 20rpx);
			left: 132rpx;
			width: 400rpx;
			min-height: 300rpx;
			border: 1rpx solid #eee;
			box-sizing: border-box;
			border-radius: 8rpx;
			background-color: #fff;
			z-index: 1;
			&::before {
				content: "";
				width: 20rpx;
				height: 20rpx;
				border-top: 1rpx solid #eee;
				border-left: 1rpx solid #eee;
				box-sizing: border-box;
				position: absolute;
				top: 0;
				left: 80rpx;
				background-color: #fff;
				transform: translate(-20rpx, -12rpx) rotate(45deg);
			}
			.select-box-content {
				width: 100%;
				height: 100%;
				padding: 20rpx 0;
				box-sizing: border-box;
				overflow-y: auto;
				.option {
					height: 56rpx;
					line-height: 56rpx;
					padding: 0 20rpx;
					box-sizing: border-box;
					&.is-active {
						background-color: #4CD964;
						color: #fff;
					}
				}
			}
		}
	}
}
</style>
