<template>
  <div class="page">
    <div class="dashboard">
      <h1>Hello {{ user.name }}!</h1>
      <h5><i>This page is under development! :P</i></h5>
      <br />
      <b-button
        ref="button"
        class="btn-primary success"
        pill
        :disabled="busy"
        variant="success"
        @click="signout"
      >
      <b-spinner v-if="busy" small></b-spinner>
        Sign Out
      </b-button>
    </div>
  </div>
</template>

<script>
import UserStore from '../store/UserStore';

export default {
  name: 'Dashboard',
  data() {
    return {
      user: localStorage.getItem('user') || null,
      busy: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem('access_token') || null;
    if (token === null) next({ name: 'Login' });
    else next();
  },
  created() {
    this.user = JSON.parse(this.user);
  },
  mounted() {
    const element = document.querySelector('.dashboard');
    element.style['-webkit-animation'] = 'animLeft .5s';
  },
  methods: {
    signout() {
      this.busy = true;
      localStorage.clear();
      UserStore.setUser({});

      setTimeout(() => {
        this.$router.push('login');
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  color: #ffffff;
}
</style>
