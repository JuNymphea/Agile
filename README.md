# test_stu

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



文件入口是/main。

layout可以直接复制我的。

如果直接用我的文件接着写，组件库用element-ui需要引入一下。

如果也想用ant-design这个组件库，https://1x.antdv.com/docs/vue/introduce-cn/，右上角版本选1.7.8。

引入办法：npm i ant-design-vue@1.7.8

在main.js添加

```
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
```

