<template>
  <div class="page">
    <div class="registration">
      <div class="registration-container">
        <div class="section-one">
          <img src="../assets/img/login.svg" />
        </div>
        <div class="section-two">
          <h1>Sign In</h1>
          <div class="form-content">
            <div class="form-item">
              <font-awesome-icon class="input-icon" :icon="['fas', 'search']" />
              <input type="text" id="loginUser" name="loginUser" required />
              <label for="loginUser">Name</label>
            </div>

            <div class="form-item">
              <font-awesome-icon class="input-icon" :icon="['fas', 'lock']" />
              <input type="password" id="loginpass" name="loginpass" required />
              <label for="loginpass">Password</label>
            </div>

            <div class="checkbox">
              <label><input type="checkbox" value="" />Remember Me</label>
            </div>

            <div class="btn-register">
              <b-overlay
                :show="busy"
                rounded
                opacity="0.6"
                spinner-small
                spinner-variant="primary"
                class="d-inline-block"
              >
                <b-button
                  ref="button"
                  class="btn-primary"
                  pill
                  :disabled="busy"
                  variant="primary"
                >
                  Continue
                </b-button>
              </b-overlay>
            </div>
            <div class="login-bottom">
              <p>Or sign in with</p>
              <font-awesome-icon
                class="brands google"
                :icon="['fab', 'google']"
              />
              <font-awesome-icon
                class="brands twitter"
                :icon="['fab', 'twitter']"
              />
              <font-awesome-icon
                class="brands facebook"
                :icon="['fab', 'facebook']"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      busy: false,
    };
  },
  mounted() {
    const element = document.querySelector('.registration-container');
    element.style['-webkit-animation'] = 'animLeft .5s';
  },
};
</script>

<style lang="scss" scoped>
$focus: #06f;
$base: #999;

.form-item {
  position: relative;
  margin-bottom: 1em;

  label,
  input {
    display: inline-block;
    transition: all 150ms;
  }

  input {
    border: 0;
    margin-top: 5px;
    padding: 6px 15px 6px 27px;
    border-bottom: 1px solid $base;
    width: 100%;
    line-height: 20px;
    font-size: 14px;
    color: #222;

    &:valid + label {
      color: $base;
      transform: translateY(-17px) scale(0.75);
    }

    &:focus + label {
      color: $base;
      transform: translateY(-17px) scale(0.75);
    }

    &:focus {
      outline: none;
      border-color: $focus;

      + label {
        color: $focus;
      }
    }
  }

  label {
    position: absolute;
    top: 12px;
    left: 25px;
    padding: 0 2px;
    line-height: 20px;
    font-size: 13px;
    letter-spacing: 0.1em;
    color: $base;
    background: #fff;
    pointer-events: none;
    transform-origin: left center;
    transform: translateY(0) scale(1);
  }
}
</style>
