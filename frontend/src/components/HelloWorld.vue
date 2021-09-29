<template>
	<div class="hello" :theme="darkTheme">
		<h1>{{ msg }}</h1>
		<p>
			For a guide and recipes on how to configure / customize this project,<br />
			check out the
		</p>
	</div>
</template>

<script>
import { darkTheme } from "naive-ui";
export default {
	name: "HelloWorld",
	props: {
		msg: String,
	},
	setup() {
		return {
			darkTheme,
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
	color: #42b983;
}
.hello {
	margin: 0;
	padding: 0;
	background-color: blueviolet;
}
</style>
