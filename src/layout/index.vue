<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo" />
      <div style="width: 350;">
        <a-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark"
          :inline-collapsed="collapsed">
          <!-- <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </a-menu-item> -->
          <!-- <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </a-menu-item> -->
          <a-menu-item key="3" @click="$router.push('/main')">
            <a-icon type="inbox" />
            <span>首页</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="team" /><span>学生模块</span></span>
            <a-menu-item key="5" @click="$router.push('/main/stu/personalinfo')">
              个人学年总结
            </a-menu-item>
            <a-menu-item key="6">
              科研情况
            </a-menu-item>
            <a-menu-item key="7">
              学生骨干服务岗位
            </a-menu-item>
            <a-menu-item key="8">
              社会实践
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="appstore" /><span>评委模块</span></span>
            <a-menu-item key="9" @click="$router.push('/main/pro/personalinfo')">
              个人学年总结
            </a-menu-item>
            <a-menu-item key="10">
              Option 10
            </a-menu-item>
            <!-- <a-sub-menu key="sub3" title="Submenu">
              <a-menu-item key="11">
                Option 11
              </a-menu-item>
              <a-menu-item key="12">
                Option 12
              </a-menu-item>
            </a-sub-menu> -->
          </a-sub-menu>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
