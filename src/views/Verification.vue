<template>
  <div class="page">
    <div class="verification">
      <b-overlay :show="loading" rounded="sm" style="width: 100%">
        <div class="verification-container">
          <div>
            <h1>Verify your account</h1>
            <p class="reminder">
              A 6-digit code has been sent to {{ user.email }}
            </p>
          </div>
          <div>
            <Otp @handleOnComplete="handleOnComplete" />
          </div>
          <div>
            <button class="btn-link">Wrong number or email?</button>
          </div>
          <b-modal
            ref="success-modal"
            id="modal-center"
            size="sm"
            hide-footer
            hide-header
            centered
          >
            <div v-if="success">
              <p class="my-4">Successfully Verified!</p>
              <Check />
            </div>
            <div v-else>
              <p class="my-4">Invalid Code</p>
              <font-awesome-icon
                class="error"
                :icon="['fas', 'times-circle']"
              />
            </div>
          </b-modal>
        </div>
      </b-overlay>
    </div>
  </div>
</template>

<script>
import Otp from '@/components/Otp.vue';
import Check from '@/components/Check.vue';

export default {
  name: 'Verification',
  components: {
    Check,
    Otp,
  },
  props: ['verificationCode'],
  data() {
    return {
      user: {
        name: '',
        email: '',
        number: '',
        password: '',
      },
      verification: {
        code: '',
        email: '',
      },
      loading: false,
      success: Boolean,
    };
  },
  mounted() {
    const element = document.querySelector('.verification-container');
    element.style['-webkit-animation'] = 'animLeft .5s';
    console.log(this.verificationCode);
  },
  methods: {
    async handleOnComplete(value) {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;

        this.success = this.verificationCode === +value ? true : false;

        this.$refs['success-modal'].show();

        setTimeout(() => {

          this.$refs['success-modal'].hide();
          if (this.success) {
            this.$router.push('login')
          }
          
        }, 2000);
      }, 2000);

      console.log(this.verificationCode, +value);
      // if (this.verificationCode === +this.userVerifyInput) {
      //   await UserService.createUser(this.user);
      // } else {
      //   console.log('WRONG VERIFICATION');
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.verification {
  display: flex;
  text-align: center;
}

.verification-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.reminder {
  margin-bottom: 0;
}

.error {
  font-size: 50px;
  color: #fe4a49;
}
</style>
