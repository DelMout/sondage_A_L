<template>
	<div id="accueil">
		<h1 class="display-1">
			<span> Amicale</span><span> Laïque</span> <span>de</span><span> Noyant</span>
		</h1>
	</div>
</template>
<script>
export default {
	setup() {},
};
</script>
<style scoped>
#accueil {
	background-color: black;
	height: 100vh;
}
h1 {
	padding-top: 40vh;
	font-family: "Luckiest Guy", cursive;
	margin: 0;
	font-size: 8em;
	/* padding: 0; */
	color: yellow;
	text-shadow: 0 0.1em 20px rgba(53, 53, 53, 1), 0.05em -0.03em 0 rgba(53, 53, 53, 1),
		0.05em 0.005em 0 rgba(53, 53, 53, 1), 0em 0.08em 0 rgba(53, 53, 53, 1),
		0.05em 0.08em 0 rgba(53, 53, 53, 1), 0px -0.03em 0 rgba(53, 53, 53, 1),
		-0.03em -0.03em 0 rgba(53, 53, 53, 1), -0.03em 0.08em 0 rgba(53, 53, 53, 1),
		-0.03em 0 0 rgba(53, 53, 53, 1);
}
span {
	transform: scale(0.9);
	display: inline-block;
}
span:nth-child(1) {
	animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
}
span:nth-child(3) {
	animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
}
span:nth-child(2) {
	animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
}
span:nth-child(4) {
	animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
}

@keyframes bop {
	0% {
		transform: scale(0.9);
	}
	50%,
	100% {
		transform: scale(1);
	}
}

@keyframes bopB {
	0% {
		transform: scale(0.9);
	}
	80%,
	100% {
		transform: scale(1) rotateZ(-3deg);
	}
}
@media only screen and (max-width: 768px) {
	/*mobiles et tablettes*/

	h1 {
		font-size: 2.5rem;
	}
}
</style>
