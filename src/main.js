import Vue from 'vue'
import App from './App.vue'
import router from './router'
import OtpInput from "@bachdgvn/vue-otp-input";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BButton, BCarousel, BCarouselSlide, BSpinner, BModal, VBModal, BOverlay  } from 'bootstrap-vue';

library.add(fas, fab, far);

Vue.component("v-otp-input", OtpInput);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('b-button', BButton);
Vue.component('b-carousel', BCarousel);
Vue.component('b-carousel-slide', BCarouselSlide);
Vue.component('b-spinner', BSpinner);
Vue.component('b-modal', BModal);
Vue.directive('b-modal', VBModal);
Vue.component('b-overlay', BOverlay);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
