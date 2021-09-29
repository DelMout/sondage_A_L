<template>
	<div>
		<div id="sond">
			<h1>Sondage Soirée Jeux<br />– Amicale Laïque –</h1>

			<p id="sstitre">Sondage ouvert jusqu'au 15/10/2021.</p>

			<h2>Soirée Jeux</h2>
			<p>L'Amicale Laïque souhaite mettre en place des soirées Jeux.</p>
			<p>
				<b>Principe : </b>Se réunir lors d'une soirée pour participer à des jeux.
				Possibilité de jeux différents si plusieurs tables.
			</p>
			<p>
				<b>Qui : </b>Ces soirées sont exclusivement ouvertes aux amicalistes. Des invités
				(adultes) peuvent participer à ces soirées ponctuellement afin de faire découvrir
				l'association.
			</p>
			<p><b>Où : </b>Dans une salle communale de Noyant-Villages.</p>
			<p><b>Quand : </b>Fréquence et jour à préciser selon le sondage ci-dessous.</p>
			<p>
				<b>Comment : </b>Selon les affinités de chacun on décide au début de la séance à
				quel(s) jeu(x) on va participer (1 jeu par table donc différents jeux possibles au
				même moment). Possibilité d'emprunter des nouveaux jeux à l'association de jeux de
				Baugé-en-Anjou pour les faire découvrir lors de ces soirées.
			</p>

			<h2>Le sondage</h2>

			<h4>Votre prénom ou pseudo (si vous souhaitez garder l'anonymat) :</h4>
			<p>"input"</p>

			<h4>Seriez-vous interessé par une soirée Jeux ?</h4>
			<!-- 1 seule réponse -->
			<p>oui / non / peut-être</p>

			<h4>A quelle fréquence souhaitez-vous participer à cette soirée ?</h4>
			<!-- 1 seule réponse -->
			<p>1 fois/semaine - 1 fois/mois - 1 fois/trimestre - 1 fois/an</p>

			<h4>Quel jour seriez-vous disponible pour cette soirée ?</h4>
			<i>Plusieurs réponses possibles</i>
			<!-- plusieurs réponses possibles -->
			<p>Lundi / Mardi / Mercredi / Samedi</p>

			<h4>A partir de quelle heure seriez-vous disponible ?</h4>
			<i>Plusieurs réponses possibles</i>
			<!-- plusieurs réponses possibles -->
			<p>20h / 20h30</p>

			<h4>A combien de personnes pensez-vous venir à ces soirées ?</h4>
			<!-- 1 seule réponse -->
			<p>1 / 2 / 3 / 4 / +</p>

			<h4>A quels jeux voudriez-vous participer ?</h4>
			<i>Plusieurs réponses possibles</i>
			<!-- plusieurs réponses possibles -->
			<p>
				Tarot / Belote / Autres jeux de cartes / Scrabble / Jeux de société
			</p>

			<h4>Êtes-vous intéressé par la découverte de nouveaux jeux ?</h4>
			<p>
				oui / non
			</p>

			<h4>Avez-vous des suggestions de jeux ?</h4>
			<p>"input"</p>

			<h4>Si vous avez des suggestions ou commentaires, c'est ici :</h4>
			<p>"input"</p>
		</div>
		<div>
			<NButton>Valider mes réponses</NButton>
		</div>
		<div><p>Merci d'avoir répondu à ce sondage. Vos réponses sont enregistrées.</p></div>
	</div>
</template>
<script>
import { defineComponent } from "vue";
import NButton from "naive-ui";

export default defineComponent({
	name: "Sondage",
	data() {
		return {};
	},
	components: {
		NButton,
	},
});
</script>
<style scoped>
#sond {
	text-align: left;
	margin-left: 1rem;
}
h1,
#sstitre {
	text-align: center;
}
h4 {
	margin-top: 2rem;
}
NButton {
	background-color: blueviolet;
}
</style>
