<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">至少10个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" placeholder="请输入内容" v-model="description"></el-input>
    <p class="msg">至少30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" v-model="content" :autosize="{ minRows: 4, maxRows: 30 }"></el-input>
    <p class="msg">至少200个字</p>
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onEdit">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="../Edit/template.less" lang="less"></style>
