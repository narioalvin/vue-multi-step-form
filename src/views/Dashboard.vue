<template>
  <div class="page">
    <div class="dashboard">
      <h1>Hello!</h1>
      <h5><i>Mini Instagram coming soon! :P</i></h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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
