<template>
  <div class="page">
    <div class="dashboard">
      <h1>Hello!</h1>
      <h5><i>This page is under development! :P</i></h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  beforeRouteEnter(to, from, next) {
    const user = to.params;
    if (Object.keys(user).length === 0) next({ name: 'Login' });
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
