<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ useText().doubleCount }}</text>
      <text @click="handleDoble"> Using data from % VITE_SERVOCE_HOST %</text>
      <text class="iconfont icon-qian"></text>
    </view>
  </view>
</template>
<script setup lang="ts">
import { useText } from '@/store'
const title = useText().doubleCount
const handleDoble = () => {
  console.log(1122)

  useText().increment()
}
const tex = ref('sdfasdfa')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
