<template>
  <div class="spi">
    <h1>请填写您本学年的个人总结：</h1>
    <a-textarea placeholder="我的个人总结如下：" :rows="35" />
    <div class="submit">
      <a-button>
        保存
      </a-button>
      <a-button type="primary">
        提交
      </a-button>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.spi {
  margin: 10px auto;
  width: 800px;

  h1 {
    color: #001529;
    font-size: 36px;
    text-align: left;
  }

  .ant-btn {
    margin: 10px;
  }
}

</style>