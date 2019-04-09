<template>
  <div class="nav-wrap">
    <div class="nav-item">
      <Icon type="md-people" />
      <div class="nav-desc">user</div>
    </div>
    <div class="nav-item">
      <Icon type="md-list-box" />
      <div class="nav-desc">sentence</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartNav'
}
</script>

<style lang='scss' scoped>
.nav-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .nav-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 270px;
    font-size: 100px;
    color: rgba(45, 140, 240, .7);
    cursor: pointer;
    background: rgba(0, 0, 0, .05);
    border-radius: 10px;
    &:hover {
      .nav-desc {
        display: block;
      }
    }
    .nav-desc {
      display: none;
      padding-top: 30px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, .08);
      color: #fff;
      text-align: center;
      font-size: 18px;
      border-radius: 10px;
    }
  }
}
</style>
