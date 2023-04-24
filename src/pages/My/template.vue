<template>
  <div id="my">
    <section class="user-info">
      <el-avatar :src="user.avatar" :alt="user.username" class="avatar"></el-avatar>
      <h3>{{ user.username }}</h3>
    </section>
    <section>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2023</span>
        </div>
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.description }}</p>
        <div class="actions">
          <router-link to="/edit/:editId">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped src="./template.less" lang="less"></style>
