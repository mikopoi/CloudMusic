<template>
  <div class="privateContent">
    <div class="title">
      <span>{{ soleTitle }}</span>
    </div>
    <div class="content">
      <div class="exclusive" v-for="item in sole" :key="item">
        <img :src="item.picUrl" alt="图片丢失了" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  //import  from '';
  import { privateContent } from '@/server/Main/main'
  import { ref, onMounted } from 'vue'

  const sole = ref([]) // 独家放送
  const soleTitle = '独家放送' //标题

  const getPrivateContent = async () => {
    try {
      //处理数据逻辑
      let res = await privateContent()
      sole.value = res.data.result
      // console.log(res.data)
    } catch (error) {
      //处理错误逻辑
      // console.log('获取Banner数据失败: ' + error.response.statusText + ': ' + error.message)
      console.error(error.message)
    }
  }

  onMounted(() => {
    getPrivateContent()
  })
</script>

<style lang="less" scoped>
  //@import url(); 引入公共css类

  .privateContent {
    // background-color: rgb(146, 134, 134);
    margin-top: 15px;

    .title {
      // background-color: red;
      padding: 8px 0;
      margin-bottom: 12px;

      span {
        color: #212020;
        font-size: 18px;
        font-weight: 600;
        padding: 5px;
        border-bottom: 3px solid #333;
      }
    }

    .content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;

      .exclusive {
        width: 100%;
        height: auto;

        img {
          display: block;
          width: 100%;
          height: 137px;
          object-fit: cover;
          border-radius: 10px;
          cursor: pointer;
        }

        span {
          text-align: left;
          margin-top: 6px;
          -webkit-line-clamp: 2; //（用来限制在一个块元素显示的文本的行数，2 表示最多显示 2 行。为了实现该效果，它需要组合其他的 WebKit 属性）
          display: -webkit-box; //（和 1 结合使用，将对象作为弹性伸缩盒子模型显示 ）
          -webkit-box-orient: vertical; //（和 1 结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 ）
          overflow: hidden; //（文本溢出限定的宽度就隐藏内容）
          text-overflow: ellipsis; //（多行文本的情况下，用省略号 “…” 隐藏溢出范围的文本)
        }
      }
    }
  }
</style>
