<template>
  <div style="display: flex; flex-direction: row;">
    <v-otp-input
      ref="otpInput"
      input-classes="otp-input"
      separator=""
      :num-inputs="6"
      :should-auto-focus="true"
      :is-input-num="true"
      @on-complete="$emit('handleOnComplete', value)"
      @on-change="handleOnChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Otp',
  data() {
    return {
      value: null
    }
  },
  methods: {
    handleOnChange(value) {
      if (value.length > 5) {
        this.value = value;
      }
    }
  },
};
</script>

<style lang="less">
.otp-input {
  width: 50px !important;
  height: 60px !important;
  padding: 5px;
  margin: 0 5px !important;
  font-size: 30px !important;
  border-radius: 4px;
  border: 0 !important;
  text-align: center;
  background: #e6e6e6;
  &.error {
    border: 1px solid red !important;
  }
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
