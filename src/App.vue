<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App',
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Poppins';
  src: url('./assets/font/Poppins-Regular.ttf');
  src: local('Poppins Regular'), local('Poppins-Regular'),
    url('./assets/font/Poppins-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins';
  src: url('./assets/font/Poppins-Medium.ttf');
  src: local('Poppins Medium'), local('Poppins-Medium'),
    url('./assets/font/Poppins-Medium.ttf') format('opentype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins';
  src: url('./assets/font/Poppins-Bold.ttf');
  src: local('Poppins Bold'), local('Poppins-Bold'),
    url('./assets/font/Poppins-Bold.ttf') format('opentype');
  font-weight: bold;
  font-style: normal;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page {
  height: 100vh;
  width: 100%;
  background-color: #8d5185;
  background-image: linear-gradient(315deg, #8d5185 0%, #a1bafe 74%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #202020;
}

h1 {
  font-weight: bold;
}

a {
  font-size: 14px;
}

.password:hover {
  cursor: pointer;
  opacity: 0.7;
}

.form {
  width: 300px;
  min-height: 450px;
  // height: 82vh;
  height: 70vh;
  background: #ffffff;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.38);
}

.form .form-container {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.top-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.top-text span {
  font-size: 14px;
  font-weight: 600;
}

.success {
  background-color: #32cd56;
  border-color: #32cd56;
}

.primary {
  background-color: #1a88ff;
  border-color: #1a88ff;
}

.error-message {
  position: relative;
  width: 280px;
  text-align: center;
}

.error-message p {
  margin-bottom: 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #fe4a49;
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
  height: 40px;
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

.submit-btn {
  margin: 20px 0;
  position: relative;
}

.submit-btn div {
  width: 100%;
}

.google {
  color: #ffffff;
  position: absolute;
  top: 12px;
  left: 12px;
}

h6 {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d5d5dd;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h6 span {
  background: #fff;
  padding: 0 10px;
  color: #202020;
}

.section-one {
  height: 10vh;
  text-align: center;
}

.section-one img {
  width: 27%;
  position: relative;
  bottom: 40px;
  min-height: 80px;
}

.section-two {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  height: 70vh;
  min-height: 400px;
}

.form-content {
  width: 100%;
}

.input-icon {
  position: absolute;
  top: 14px;
  color: #202020;
  font-size: 13px;
}

.left {
  left: 14px;
}

.right {
  right: 14px;
}

.eye-icon {
  right: 1px;
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
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (min-width: 360px) {
  .form {
    width: 350px;
  }

  .section-two {
    padding: 0 20px;
  }

  .section-one img {
    width: 32%;
    bottom: 45px;
  }

  .error-message {
    width: 310px;
  }
}

@media (min-width: 400px) {
  .form {
    width: 400px;
    height: 75vh;
  }

  .section-one img {
    width: 30%;
    bottom: 60px;
  }

  .error-message {
    width: 340px;
  }
}

@media only screen and (min-width: 360px) and (max-device-height: 667px) and (orientation: landscape) {
  .page {
    overflow: scroll;
  }

  .form {
    height: 95vh;
    margin-top: 300px;
    overflow: hidden;
    margin-bottom: 10px;
    min-height: 580px !important;
  }

  .section-two {
    margin-top: 120px;
    min-height: 300px;
  }

  .form-container {
    margin-top: 70px;
  }
}
</style>
