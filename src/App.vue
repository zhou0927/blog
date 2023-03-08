<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view />
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
import request from './helpers/request'
import auth from '@/api/auth'
import blog from '@/api/blog'
window.auth = auth
window.blog = blog

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* * {
  margin: 0px;
} */

/* // @import "./assets/common.less"; */

html,
body,
#app {
  height: 100%;
}

#app {
  display: grid;
  grid: auto 1fr auto / 15% auto 15%;
}

#header {
  grid-area: 1/2/2/3;

}

#main {
  grid-area: 2/2/3/3;
  border: 1px solid red;
}

#footer {
  grid-area: 3/2/4/3;
  padding-left: 12%;
  padding-right: 12%;
}

@media(max-width:768px) {
  #app {
    grid-template-columns: 10px auto 10px;
  }

  #header,
  #footer {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
