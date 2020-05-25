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
            ref="info-modal"
            id="modal-center"
            size="sm"
            hide-footer
            hide-header
            centered
          >
            <div v-if="success">
              <p class="my-4">Successfully Registered!</p>
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
import UserService from '../service/UserService';

export default {
  name: 'Verification',
  components: {
    Check,
    Otp,
  },
  props: ['user'],
  data() {
    return {
      loading: false,
      success: Boolean,
      transactionCompleted: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    const user = to.params;
    if (Object.keys(user).length === 0) next({ name: '' });
    else next();
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== 'Home' && !this.transactionCompleted) next({ name: '' });
    else next();
  },
  mounted() {
    const element = document.querySelector('.verification');
    element.style['-webkit-animation'] = 'animLeft .5s';
  },
  methods: {
    async handleOnComplete(value) {
      this.loading = true;

      if (this.user.code === +value) {
        await UserService.createUser(this.user);
        this.loading = false;
        this.success = true;
        this.transactionCompleted = true;
        this.$refs['info-modal'].show();

        setTimeout(() => {
          this.$router.push('login');
        }, 3000);
      } else {
        this.loading = false;
        this.success = false;
        this.$refs['info-modal'].show();

        setTimeout(() => {
          this.$refs['info-modal'].hide();
        }, 2000);
      }
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
