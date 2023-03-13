<template>
  <div id="my">
    <section class="user-info">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="avatar"></el-avatar>
      <h3>周怡</h3>
    </section>
    <section>
      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2023</span>
        </div>
        <h3>前端异步大揭秘</h3>
        <p>就是每一个任务有一个或多个回调函数(callback),前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行...</p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped src="./template.less" lang="less"></style>
