import { createApp } from "vue";
import { create, NButton } from "naive-ui";
import App from "./App.vue";
import router from "./router";

const naive = create({
	components: [NButton],
});

createApp(App)
	.use(router)
	.use(naive)
	.mount("#app");
