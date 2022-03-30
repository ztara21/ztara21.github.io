<style>
  @import url('./style/App.vue.css');
</style>

<template>
  <div class="header">
    <nav>
      <ul id="navbar">
        <a class="nav-btn" href="/"><li class="nav-list">HOME</li></a>
        <a
          v-for="item in sideBtn"
          :key="item.name"
          class="nav-btn"
          :href="item.to"
        >
          <li class="nav-list nav-list-spacer">
            {{ item.name }}
          </li>
        </a>
      </ul>
    </nav>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        sideBtn: [
          { name: 'PORTFOLIO', to: '/portfolio' },
        ]
      }
    }    
  }
</script>