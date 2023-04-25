<template>
  <div class="ppi" style="width: 800px">
    <a-radio-group v-model="mode" :style="{ marginBottom: '8px' }">
      <a-radio-button value="top">
        水平拨动
      </a-radio-button>
      <a-radio-button value="left">
        竖直拨动
      </a-radio-button>
    </a-radio-group>
    <a-tabs default-active-key="1" :tab-position="mode" :style="{ height: '600px' }" @prevClick="callback"
      @nextClick="callback">
      <a-tab-pane v-for="i in 30" :key="i" :tab="`学生${i}`">
        <h1>学生{{ i }}个人学年总结</h1>
        <p>
          美国的社会主义女性主义虽然如英国的一样强调父权制与马克思主义的资本主义制度这种二元体系分析（二者都用唯物主义来分析资本主义制度），但各自的角度有所不同。米切尔主要从精神方面来分析父权制，认为父权制是一种社会意识形态，即使到了社会主义，父权制也仍然普遍存在，她甚至引用毛泽东的话来支持她的论点，毛泽东承认，尽管有集体劳动、平等立法、社会照看孩子等等，但中国人不会立即就真正深刻地改变他们对妇女的态度【注释】Juliet
          Mitchell, Psychoanalysis and Feminism,
          p.412.米切尔引用毛的话可能有误，笔者查阅了毛泽东的著作，与此相关的一段话是1955年12月为“妇女走上劳动战线”一文所做的按语，照实引来，以供比较、参考：“为了建设伟大的社会主义社会，发动广大的妇女群众参加生产活动，具有极大的意义。在生产中，必须实现男女同工同酬。真正的男女平等，只有在整个社会的社会主义改造过程中才能实现。”转引自《毛泽东著作专题摘录》，北京·人民出版社，1964年，第727页。【注尾】。米切尔由此得出结论，物质层面的父权制（生产领域或公共领域方面）虽然可以随着资本主义的消亡而消亡，但精神层面的父权制（意识形态、父权文化）则在资本主义前、资本主义中、资本主义后普遍存在。美国女性主义经济学家海蒂·哈特曼则用唯物主义来分析父权制，她认为，父权制是“男人之间用来统治女人的一整套的社会关系，它有一个用来在男人之中建立或创立相互依赖及团结一致的物质基础，尽管它是等级制的”，这一物质基础存在于男人对女性劳动权力的控制上，这种控制表现在限制女性得到重要的经济资源，不允许女性对其性生活及生育权进行控制。哈特曼的结论是，男人控制女人的欲望至少与资本家控制工人的欲望一样强烈；父权制与资本主义制结成伙伴。【注释】Rosemarie
          Tong, pp.180-181.【注尾】显然，哈特曼认为，父权制主要体现在物质领域，而不是在精神领域。</p>
        <div class="num">
          <a-input-number id="inputNumber" v-model="value" :min="1" :max="10" @change="onChange" />
          当前值：{{ value }}
          <a-button type="primary">
            提交
          </a-button>
        </div>
      </a-tab-pane>
    </a-tabs>

  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: 'top',
      value: 3,
    };
  },
  methods: {
    callback(val) {
      console.log(val);
    },
    onChange(value) {
      console.log('changed', value);
    },
  },
};
</script>
<style lang="scss">
.ppi {
  position: relative;
  margin: 10px auto;

  .num {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -122px;
    .ant-btn {
      margin-left: 20px;
    }
  }
}
</style>
