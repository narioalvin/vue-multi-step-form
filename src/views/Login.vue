<template>
  <div class="page">
    <div class="form">
      <div class="form-container">
        <div class="section-one">
          <img src="../assets/img/avatar.png" />
        </div>
        <div class="section-two">
          <div class="top-text">
            <span class="create-label">Sign In</span>
            <a href="/">Create Account</a>
          </div>

          <div class="form-content">
            <div class="form-item">
              <font-awesome-icon
                class="input-icon left"
                :icon="['far', 'paper-plane']"
              />
              <input
                type="text"
                id="email"
                name="email"
                v-model="user.email"
                @keyup.enter="signin"
                autocomplete="off"
                required
              />
              <label for="email">Email</label>
            </div>

            <div class="form-item">
              <font-awesome-icon
                class="input-icon left"
                :icon="['fas', 'lock']"
              />
              <input
                type="password"
                id="pass"
                name="pass"
                v-model="user.password"
                @keyup.enter="signin"
                autocomplete="off"
                required
              />
              <label for="pass">Password</label>
              <font-awesome-icon
                @click="showPassword"
                class="input-icon right password"
                :icon="['far', isPassVisibile ? 'eye-slash' : 'eye']"
              />
            </div>
            <div class="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div class="error-message">
            <p v-if="errorMessage !== ''">{{ errorMessage }}</p>
          </div>
          <div>
            <div class="submit-btn">
              <b-overlay
                :show="busy"
                style="text-align: center"
                rounded
                opacity="0.6"
                spinner-small
                spinner-variant="primary"
                class="d-inline-block"
              >
                <b-button
                  ref="button"
                  class="btn-primary success"
                  pill
                  :disabled="busy"
                  variant="success"
                  @click="signin"
                >
                  Sign In
                </b-button>
              </b-overlay>
            </div>
            <div>
              <h6><span>or</span></h6>
            </div>

            <div class="submit-btn">
              <font-awesome-icon
                class="brands google"
                :icon="['fab', 'google']"
              />
              <b-button
                ref="button"
                class="btn-primary primary"
                pill
                variant="primary"
              >
                Sign in with Google
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../service/UserService';

export default {
  name: 'Login',
  props: ['email'],
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      busy: false,
      errorMessage: '',
      isPassVisibile: false,
    };
  },
  created() {
    this.user.email = this.email;
  },
  methods: {
    async signin() {
      this.busy = true;

      try {
        this.errorMessage = '';
        await UserService.login(this.user);

        const element = document.querySelector('.form');
        element.style['-webkit-animation'] = 'animRight .5s forwards';

        setTimeout(() => {
          this.$router.push({
            name: 'Dashboard',
            params: { user: this.user },
          });
        }, 90);
      } catch (error) {
        this.errorMessage = error.response.data;
        this.busy = false;
      }
    },
    showPassword() {
      let pass = document.getElementById('pass');
      if (pass.type === 'password') {
        pass.type = 'text';
        this.isPassVisibile = true;
      } else {
        pass.type = 'password';
        this.isPassVisibile = false;
      }
    },
  },
  mounted() {
    const element = document.querySelector('.form');
    element.style['-webkit-animation'] = 'animLeft .5s';

    document.getElementById('pass').focus();
  },
};
</script>

<style lang="scss" scoped>
.forgot-password {
  text-align: right;
  margin-bottom: 10px;
}

$focus: #06f;
$base: #999;

.form-item {
  position: relative;
  margin-bottom: 15px;

  label,
  input {
    display: inline-block;
    transition: all 150ms;
  }

  input {
    padding: 6px 15px 6px 40px;
    border: 0;
    border-radius: 16px;
    line-height: 20px;
    font-size: 14px;
    color: #202020;
    width: 100%;
    height: 45px;
    background: #e6e6ea;

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
    left: 38px;
    padding: 0 2px;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 0.125em;
    color: $base;
    pointer-events: none;
    transform-origin: left center;
    transform: translateY(0) scale(1);
  }
}
</style>
