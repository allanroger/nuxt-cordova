import Vue from 'vue';
import VueCordova from 'vue-cordova';

if (process.BROWSER_BUILD) {
  Vue.use(VueCordova);
}
