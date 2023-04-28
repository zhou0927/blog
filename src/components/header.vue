<template>
  <header :class="{ login: isLogin, 'no-login': !isLogin }">
    <template v-if="!isLogin">
      <h1>let's share</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <el-button><router-link to="/login">立即登录</router-link></el-button>
        <el-button><router-link to="/register">注册账号</router-link></el-button>
      </div>
    </template>
    <template v-if="isLogin">
      <h1><router-link to="/">let's share</router-link></h1>
      <router-link to="/create"><i class="edit el-icon-plus"></i></router-link>
      <div class="user">
        <el-avatar class="avatar" :src="user.avatar" :alt="user.username" :title="user.username"></el-avatar>
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>

  </header>
</template>

<script>

import auth from '@/api/auth'
window.auth = auth
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },

  computed: {
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },

  created() {
    this.checkLogin()
  },

  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout() {
      this.logout()
    }
  },

}
</script>

<style lang="less">
@import "../assets/base.less";

header.no-login {
  padding: 0 12% 30px 12%;
  background: @bgColor;
  display: grid;
  justify-items: center;

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns {
    margin-top: 18px;
  }

  button {
    margin: 20px 5px 0;
  }
}

header.login {
  display: flex;
  align-items: center;
  background: @bgColor;
  padding-top: 6px;
  padding-bottom: 6px;

  h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;

    a {
      color: #FFF;
    }
  }

  .edit {
    color: #fff;
    font-size: 30px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }

  .user {
    position: relative;

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin: 0;
      padding: 0;
      background-color: #fff;


      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: inline-block;
        padding: 5px 10px;

        &:hover {
          background-color: #eaeaea;
        }
      }
    }

    &:hover ul {
      display: block;
    }
  }

}
</style>