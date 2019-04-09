<template>
  <div class="login-wrap">
    <div class="form-wrap">
      <h1 class="title">Mqyun</h1>
      <Form ref="formLogin" :model="loginFormInfo">
        <FormItem prop="account" class="form-item">
          <Input type="text" v-model="loginFormInfo.account" placeholder="账号" autocomplete="off">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="pwd" class="form-item">
          <Input type="password" v-model="loginFormInfo.password" placeholder="密码" autocomplete="off">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="code" class="form-item" style="margin-bottom: 47px;">
          <img src="@/assets/bg.jpg" alt="" class="code-img">
          <Input type="text" v-model="loginFormInfo.code" placeholder="验证码" autocomplete="off">
          <Icon type="ios-key-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem class="login-btn-box">
          <Button type="primary" long class="login-btn" size="large" @click="login">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Login',

  computed: {
    ...mapState(['loginFormInfo'])
  },

  methods: {
    async login() {
      this.$store.dispatch({
        type: 'login'
      });
    }
  }
}
</script>

<style lang='scss' scoped>
$formItemH: 44px;

.login-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .form-wrap {
    margin-top: -140px;
    width: 463px;
    height: 516px;
    padding: 41px 51px 0;
    background: rgba(255, 255, 255, .8);
    box-shadow: 0px 10px 50px 0px #acb2c1;
    border-radius: 10px;
    opacity: 0.9;
    .title {
      margin-bottom: 60px;
      text-align: center;
      font-size: 40px;
    }
    .form-item {
      margin-bottom: 30px;
      height: $formItemH;
      ::v-deep .ivu-form-item-content {
        height: $formItemH;
        .ivu-input-wrapper {
          height: $formItemH;
          .ivu-input-group-prepend {
            width: $formItemH;
            font-size: 16px;
            background: none;
          }
          .ivu-input {
            height: $formItemH;
            font-size: 16px;
          }
        }
      }
      .code-img {
        position: absolute;
        height: 34px;
        top: ($formItemH - 34px) / 2;
        right: 10px;
        z-index: 99;
        cursor: pointer;
      }
    }
  }
}
</style>
