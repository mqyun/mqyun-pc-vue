<template>
<div class="layout">
  <Layout class="main-layout">
    <Sider
      ref="side1"
      hide-trigger
      collapsible
      :collapsed-width="78"
      v-model="isCollapsed"
      width="180"
      class="main-sider"
    >
      <Menu
        :active-name="activeRoute"
        :class="menuitemClasses"
        theme="dark"
        width="auto"
      >
        <div class="logo-box">
          <h1>Mqyun</h1>
        </div>
        <template v-for="menuitem in menuList">
          <MenuItem
            :name="menuitem.name"
            :to="menuitem.router"
            :key="menuitem.name"
          >
            <Icon :type="menuitem.iconType" :key="menuitem.name"></Icon>
            <span :key="menuitem.name">{{ menuitem.label }}</span>
          </MenuItem>
        </template>
      </Menu>
    </Sider>
    <Layout>
      <Header
        :style="{padding: 0}"
        class="layout-header-bar"
      >
         <Icon
          @click.native="collapsedSider"
          :class="rotateIcon"
          :style="{margin: '0 20px'}"
          type="md-menu"
          size="24"
        ></Icon> 
        <Dropdown @on-click="dropDownClick">
          <a href="javascript:void(0)" style="color: #000000;">孟庆云</a>
          <DropdownMenu slot="list">
            <DropdownItem name="password">密码修改</DropdownItem>
            <DropdownItem name="info">信息详情</DropdownItem>
            <DropdownItem name="logout">安全退出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Header>
      <Content
        :style="{padding: '20px', background: '#fff', minHeight: '260px', overflow: 'auto'}"
      >
        <slot></slot>
      </Content>
    </Layout>
  </Layout>
</div>
</template>

<script>
export default {
  name: "MainLayout",

  created() {
    this.activeRoute = this.$route.name;
  },

  data() {
    const checkRePassword = (rule, value, callback) => {
      if (value !== this.changePasswordInfo.newPwd) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      menuList: [{
        name: "sentence",
        label: "句子管理",
        router: "/sentence",
        iconType: "md-document"
      }],
      activeRoute: "",
      isCollapsed: false
    }
  },

  watch: {
    $route(to) {
      this.activeRoute = to.name;
    }
  },

  computed: {
    rotateIcon() {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ];
    },
    menuitemClasses() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    },
  },

  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },

    dropDownClick(type) {
      switch(type) {
        case "password":
          this.changePassword();
          break;
        case "info":
          this.infoDetail();
          break;
        case "logout":
          this.logout();
          break;
      }
    },

    changePassword() {
      this.modal = true;
    },

    confirmChangePass() {
      if (!this.changePasswordInfo.oldPwd || !this.changePasswordInfo.newPwd || !this.changePasswordInfo.checkPwd) {
        this.$Message.warning("请完善提交信息");
        return false;
      }
      this.$store.dispatch({
        type: "resetPassword"
      });
    },

    cancelConfirm() {
      this.$refs["changePasswordForm"].resetFields();
    },

    infoDetail() {
      this.$router.push({
        path: "/subinfo"
      })
    },

    logout() {
      this.$store.dispatch({
        type: "logout"
      })
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
