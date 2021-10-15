import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import { VuesticPlugin } from "vuestic-ui";
// import "vuestic-ui/dist/vuestic-ui.css";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import SelectButton from "primevue/selectbutton";
import Listbox from "primevue/listbox";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import "primeflex/primeflex.css"; // grid system
import "primeicons/primeicons.css";
import "primevue/resources/themes/bootstrap4-dark-purple/theme.css"; //theme color
import "primevue/resources/primevue.min.css";

createApp(App)
	.use(router)
	// .use(VuesticPlugin)
	.use(PrimeVue)
	.component("Dialog", Dialog)
	.component("InputText", InputText)
	.component("SelectButton", SelectButton)
	.component("Listbox", Listbox)
	.component("Textarea", Textarea)
	.component("Button", Button)
	.mount("#app");
