<template>
  <div id="index">
    <section>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <figure class="avatar">
          <el-avatar :src="blog.user.avatar" class="avatar" :alt="blog.user.username"></el-avatar>
          <figcaption>{{ blog.user.username }}</figcaption>
        </figure>
        <h3>{{ blog.title }}<span>{{ friendlyDate(blog.createdAt) }}</span></h3>
        <p>{{ blog.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination layout="prev, pager, next" :total="total"  @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
