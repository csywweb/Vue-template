<template>
  <div class="hello">
    <div class='cube'>
      <div class='face'></div>
      <div class='face'></div>
      <div class='face'></div>
      <div class='face'></div>
    </div>
    <div class="guide">
      <h2>Vue单页应用模板</h2>
      <p><span class="fa fa-hand-o-right"></span>添加scss的编译，并且自动补全前缀</p>
      <p><span class="fa fa-hand-o-right"></span>添加<a href="http://fontawesome.dashgame.com/">FontAwesome</a></p>
      <p><span class="fa fa-hand-o-right"></span>添加<a href="http://element.eleme.io/#/zh-CN">ElementUI</a></p>
      <p><span class="fa fa-hand-o-right"></span>添加了<a href="http://vuex.vuejs.org/zh-cn/state.html">vuex</a>状态管理</p>
      <p><span class="fa fa-hand-o-right"></span>使用<a href="http://karma-runner.github.io/1.0/index.html">Karma</a>进行单元测试</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
html,
body {
  height: 100%;
}

body {
  overflow: hidden;
  margin: 0;
  min-width: 800px;
  perspective: 1000em;
}

.cube {
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(30deg);
  animation: view 3.8s linear infinite;
}

.cube,
.cube * {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 20%;
}

.face {
  margin: -5em;
  border: solid .25em;
  width: 10em;
  height: 10em;
}

.face:nth-child(1) {
  transform: rotateY(0deg) translateZ(5em);
  background: rgba(255, 102, 102, 0.75);
}

.face:nth-child(2) {
  transform: rotateY(90deg) translateZ(5em);
  background: rgba(179, 255, 102, 0.75);
}

.face:nth-child(3) {
  transform: rotateY(180deg) translateZ(5em);
  background: rgba(102, 255, 255, 0.75);
}

.face:nth-child(4) {
  transform: rotateY(270deg) translateZ(5em);
  background: rgba(178, 102, 255, 0.75);
}
.guide{
  position: absolute;
  left:50%;
  top:50%;
  transform: translateY(-50%);
  .fa{
    margin-right:5px;
  }
  h2{
    line-height:40px;
  }
  p{
    line-height:30px;
  }
  a{
    font-weight:800;
    &:hover{
      text-decoration: underline;
    }
  }
}
@keyframes view {
  to {
    transform: rotateX(-20deg) rotateY(390deg);
  }
}
</style>
