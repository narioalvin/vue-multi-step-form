<template>
  <div class="page">
    <div class="registration">
      <div class="registration-container">
        <div class="section-one">
          <img src="../assets/img/dev.svg" />
          <button class="btn-link">I am already member</button>
        </div>
        <div class="section-two">
          <h1>Sign Up</h1>
          <div class="form-content">
            <div class="form-item">
              <font-awesome-icon class="input-icon" :icon="['fas', 'search']" />
              <input
                type="text"
                id="user"
                name="user"
                v-model="user.name"
                required
              />
              <label for="user">Name</label>
            </div>

            <div class="form-item">
              <font-awesome-icon class="input-icon" :icon="['fas', 'lock']" />
              <input
                type="password"
                id="pass"
                name="pass"
                v-model="user.password"
                required
              />
              <label for="pass">Password</label>
            </div>

            <div class="form-item">
              <font-awesome-icon
                class="input-icon"
                :icon="['far', 'paper-plane']"
              />
              <input
                type="text"
                id="email"
                name="email"
                v-model="user.email"
                required
              />
              <label for="email">Email</label>
            </div>

            <div class="form-item">
              <font-awesome-icon class="input-icon" :icon="['fas', 'phone']" />
              <input
                type="text"
                id="phone"
                name="phone"
                v-model="user.number"
                required
              />
              <label for="phone">Phone Number</label>
            </div>

            <div class="btn-register">
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
                  class="btn-primary"
                  pill
                  :disabled="busy"
                  variant="primary"
                  @click="register"
                >
                  Register
                </b-button>
              </b-overlay>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import UserService from '../service/UserService';

export default {
  name: 'Home',
  data() {
    return {
      user: {
        name: '',
        email: '',
        number: '',
        password: '',
      },
      userVerifyInput: '',
      verification: {
        code: '',
        email: '',
      },
      tabIndex: 1,
      busy: false,
      showOtp: false,
      timeout: null,
    };
  },
  async created() {},
  methods: {
    async register() {
      this.busy = true;

      this.verification = {
        code: Math.floor(100000 + Math.random() * 900000),
        email: this.user.email,
      };

      setTimeout(() => {
        const element = document.querySelector('.registration-container');
        element.style['-webkit-animation'] = 'animRight .5s forwards';
      }, 2000);

      setTimeout(() => {
        this.$router.push({
          name: 'Verification',
          params: { verificationCode: this.verification.code },
        });
      }, 2100);

      // await UserService.sendMail(this.verification);
    },
    onClick() {
      this.busy = true;
      setTimeout(() => {
        this.tabIndex++;
        this.busy = false;
      }, 5000);
    },
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
