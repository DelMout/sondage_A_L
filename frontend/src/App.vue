<template>
	<div class="blackTheme">
		<div>
			<div>
				<Sondage />
			</div>
		</div>
		<!-- <img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" /> -->
	</div>
</template>

<script>
import Sondage from "./components/Sondage.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		Sondage,
	},
	data() {
		return {};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: white;
	/* margin-top: 60px; */
}

.blackTheme {
	color: white;
	background-color: black;
	padding: 0;
	margin: 0;
	height: 100vh;
	/* width: 100%; */
}
</style>
