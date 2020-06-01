<template>
  <div class="page">
    <div class="dashboard">
      <h1>Hello {{ currentUser.name }}!</h1>
      <h5><i>This page is under development! :P</i></h5>
    </div>
  </div>
</template>

<script>
import UserStore from '../store/UserStore';

export default {
  name: 'Dashboard',
  data() {
    return {
      currentUser: {}
    }
  },
  created() {
    this.currentUser = UserStore.getCurrentUser();
  },
  beforeRouteEnter(to, from, next) {
    const currentUser = UserStore.getCurrentUser();
    if (Object.keys(currentUser).length === 0) next({ name: from.name });
    else next();
  },
  mounted() {
    const element = document.querySelector('.dashboard');
    element.style['-webkit-animation'] = 'animLeft .5s';
  },
};
</script>

<style lang="scss" scoped>
.page {
  color: #ffffff;
}
</style>
