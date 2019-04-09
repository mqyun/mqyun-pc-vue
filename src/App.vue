<template>
  <div class="app-container">
    <div class="shelter"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .app-container {
    width: 100%;
    height: 100%;
    .shelter {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: url('./assets/bg.jpg') no-repeat;
      background-size: cover;
      background-position: center;
      opacity: .75;
      filter: blur(5px);
      z-index: -1;
    }
  }
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #F2F3F5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: none;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(45, 140, 240, .8);
}

</style>
