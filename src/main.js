import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueTheMask from "vue-the-mask";
import Vuelidate from "vuelidate";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

import UserRegister from "./components/UserRegister";
import UserResponse from "./components/UserResponse";

Vue.use(VueTheMask);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
	routes:[
		{path:"/",component:UserRegister},
		{path:"/resposta",component:UserResponse}
	]
});
new Vue({
	router,
	render: h => h(App),
}).$mount("#app");
