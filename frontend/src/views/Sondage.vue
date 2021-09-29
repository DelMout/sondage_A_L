<template>
	<div>
		<div id="sond">
			<h1 class="display-2">Sondage Soirée Jeux<br />– Amicale Laïque –</h1>

			<p id="sstitre">Sondage ouvert jusqu'au 15/10/2021.</p>

			<h2 class="display-3">Soirée Jeux</h2>
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

			<h2 class="display-3">Le sondage</h2>

			<h4>Votre prénom ou pseudo (si vous souhaitez garder l'anonymat) :</h4>
			<div class="case fill"><va-input type="text" v-model="pseudo"></va-input></div>

			<h4>Seriez-vous interessé par une soirée Jeux ?</h4>
			<!-- 1 seule réponse -->
			<div class="case">
				<va-button-toggle
					flat
					:rounded="false"
					color="#b0c9e2"
					toggle-color="#fff"
					active-button-text-color="#000"
					v-model="interet"
					:options="[
						{ label: 'Oui', value: 'oui' },
						{ label: 'Non', value: 'non' },
						{ label: 'Peut-être', value: 'maybe' },
					]"
				/>
			</div>

			<h4>A quelle fréquence souhaitez-vous participer à cette soirée ?</h4>
			<!-- 1 seule réponse -->
			<div class="case">
				<va-button-toggle
					flat
					:rounded="false"
					color="#b0c9e2"
					toggle-color="#fff"
					active-button-text-color="#000"
					v-model="frequence"
					:options="[
						{ label: '1 fois / semaine', value: 'semaine' },
						{ label: '1 fois / mois', value: 'mois' },
						{ label: '1 fois / trimestre', value: 'trimestre' },
						{ label: '1 fois / an', value: 'an' },
					]"
				/>
			</div>

			<h4>Quel jour seriez-vous disponible pour cette soirée ?</h4>
			<i>Plusieurs réponses possibles</i>
			<div class="case">
				<va-option-list
					:options="['Lundi', 'Mardi', 'Mercredi', 'Samedi']"
					v-model="jour"
				/>
			</div>

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
		<div id="validation">
			<va-button @click="save">Valider mes réponses</va-button>
		</div>
		<div>
			<p>{{ msg }}</p>
		</div>
	</div>
</template>
<script>
import { VaButton, VaInput } from "vuestic-ui";

export default {
	name: "Sondage",
	data() {
		return {
			msg: "",
			interet: "oui",
			frequence: "semaine",
			jour: "",
		};
	},
	components: {
		VaButton,
		VaInput,
	},
	methods: {
		save: function() {
			this.msg =
				"Merci " +
				this.pseudo +
				this.interet +
				this.frequence +
				this.jour +
				". Vos données sont enregistrées.";
		},
	},
};
</script>
<style scoped>
#sond {
	text-align: left;
	margin-left: 1rem;
}
h1,
#sstitre {
	text-align: center;
	color: #b0c9e2;
}
h2 {
	color: #b0c9e2;
	margin-top: 2rem;
}
h4 {
	margin-top: 2rem;
}
#validation {
	text-align: left;
	margin-top: 2rem;
}
.case {
	margin-top: 0.5rem;
}
.fill {
	width: 20rem;
}
</style>
