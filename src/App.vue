<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App'
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page {
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #202020;
}

h1 {
  font-weight: bold;
}

.registration,
.verification,
.login {
  width: 70%;
  height: 70vh;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
}

.registration .registration-container {
  display: flex;
  height: 100%;
}

.registration .registration-container .section-one,
.registration .registration-container .section-two {
  height: 100%;
  flex: 0.5;
}

.btn-link {
  background: none;
  border: 0;
  color: #007bff;
  margin-top: 15px;
}

.btn-link:hover {
  opacity: 0.7;
}

.btn-primary {
  width: 100%;
  min-width: 200px;
  font-size: 14px;
  letter-spacing: 0.05em;
}

.modal-header {
  border-bottom: 0;
  padding: 13px;
}

.modal-body {
  padding-top: 0;
}

.modal-content {
  min-height: 150px;
  text-align: center;
}

.my-4 {
  font-size: 19px;
  font-weight: 600;
}

.btn-register {
  margin-top: 30px;
}

.btn-register div {
  width: 100%;
}

.section-one {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section-one img {
  width: 50%;
}

.section-two {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-content {
  padding-right: 70px;
}

.input-icon {
  position: absolute;
  top: 14px;
}

.checkbox label {
  font-size: 14px;
}

.checkbox label input {
  margin-right: 10px;
  width: 15px;
  height: 15px;
  position: relative;
  top: 3px;
}

.google {
  color: #db4437;
}

.twitter {
  color: #00acee;
}

.facebook {
  color: #3b5998;
}

.login-bottom {
  text-align: center;
  margin-top: 20px;
}

.login-bottom p {
  font-size: 15px;
}

.login-bottom .brands {
  font-size: 25px;
  margin-right: 15px;
}

.login-bottom .brands:last-child {
  margin-right: 0;
}


.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  &.error {
    border: 1px solid red !important;
  }
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@keyframes animRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-300px);
    opacity: 0;
  }
}

@keyframes animLeft {
  from {
    transform: translateX(300px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
