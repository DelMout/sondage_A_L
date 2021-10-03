<template>
	<div id="sondage">
		<div id="sond">
			<div class="row">
				<div class="des flex offset--md1 md2">
					<img id="" alt="des rouge animés" src="../assets/dices.gif" />
				</div>
				<div class="sondage flex md5">
					<h1 class="display-1">Sondage Soirée Jeux<br />– Amicale Laïque –</h1>

					<p id="sstitre">Sondage ouvert jusqu'au 24/10/2021.</p>
				</div>
				<div class="des flex offset--md1 md2">
					<img id="pli" alt="suite plis animé" src="../assets/suitedeplie.gif" />
				</div>
			</div>
			<!-- Soirée Jeux -->
			<div class="row">
				<div class="flex md7">
					<h2 class="display-3">Soirée Jeux</h2>
					<p>L'Amicale Laïque souhaite mettre en place des soirées Jeux.</p>
					<p>
						<b>Principe : </b>Se réunir lors d'une soirée pour participer à des jeux.
						Possibilité de jeux différents selon le nombre de participants.
					</p>
					<p>
						<b>Qui : </b>Ces soirées sont exclusivement ouvertes aux amicalistes. Des
						invités (adultes) peuvent participer à ces soirées ponctuellement afin de
						faire découvrir l'association.
					</p>
					<p><b>Où : </b>Dans une salle communale de Noyant-Villages (à définir).</p>
					<p><b>Quand : </b>Fréquence et jour à préciser selon le sondage ci-dessous.</p>
					<p>
						<b>Comment : </b>Selon les affinités de chacun on décide au début de la
						séance à quel(s) jeu(x) on va participer (1 jeu par table donc différents
						jeux possibles au même moment). <br />Possibilité d'emprunter des nouveaux
						jeux à l'association de jeux de Baugé-en-Anjou (Beaux Jeux en Anjou) pour
						les faire découvrir lors de ces soirées.
					</p>
				</div>
				<div class="flex offset--md1 md3">
					<img id="boites" alt="plusieurs boites jeux" src="../assets/jeux.png" />
				</div>
			</div>
			<!-- Sondage -->
			<div class="row">
				<div class="flex md-6 ">
					<h2 class="display-3">Sondage</h2>
					<div id="question">
						<h4>Votre prénom ou pseudo (si vous souhaitez garder l'anonymat) :</h4>
						<div class="case fill">
							<va-input type="text" v-model="pseudo"></va-input>
						</div>

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
						<div class="case ">
							<va-option-list
								type="radio"
								v-model="frequence"
								:options="[
									'1 fois / semaine',
									'1 fois / mois',
									'1 fois / trimestre',
									'1 fois / an',
								]"
								color="#FC7600"
							/>
						</div>

						<h4>Quel jour seriez-vous disponible pour cette soirée ?</h4>
						<i>Plusieurs réponses possibles</i>
						<div class="case">
							<va-option-list
								:options="['Lundi', 'Mardi', 'Mercredi', 'Samedi']"
								v-model="jour"
								color="#FC7600"
							/>
						</div>

						<h4>A partir de quelle heure seriez-vous disponible ?</h4>
						<div class="case">
							<va-button-toggle
								flat
								:rounded="false"
								color="#b0c9e2"
								toggle-color="#fff"
								active-button-text-color="#000"
								v-model="heure"
								:options="[
									{ label: '20h', value: 0 },
									{ label: '20h30', value: 1 },
								]"
							/>
						</div>

						<h4>A combien de personnes pensez-vous venir à ces soirées ?</h4>
						<div class="case ">
							<va-option-list
								type="radio"
								v-model="participants"
								:options="['1', '2', '3', '4', 'plus']"
								color="#FC7600"
							/>
						</div>

						<h4>A quels jeux voudriez-vous participer ?</h4>
						<i>Plusieurs réponses possibles</i>
						<div class="case">
							<va-option-list
								:options="[
									'Tarot',
									'Belote',
									'Autres jeux de cartes',
									'Scrabble',
									'Jeux de société',
								]"
								v-model="jeux"
								color="#FC7600"
							/>
						</div>

						<h4>Êtes-vous intéressé par la découverte de nouveaux jeux ?</h4>
						<div class="case">
							<va-button-toggle
								flat
								:rounded="false"
								color="#b0c9e2"
								toggle-color="#fff"
								active-button-text-color="#000"
								v-model="nouveau"
								:options="[
									{ label: 'Oui', value: 'oui' },
									{ label: 'Non', value: 'non' },
								]"
							/>
						</div>

						<h4>Avez-vous des suggestions de jeux ?</h4>
						<div class="case big">
							<va-input type="textarea" maxlength="255" v-model="suggestions" />
						</div>

						<h4>Si vous avez des suggestions ou commentaires, c'est ici :</h4>
						<div class="case big">
							<va-input type="textarea" maxlength="255" v-model="commentaires" />
						</div>
					</div>
					<div id="validation">
						<va-button color="#FC7600" id="bout" @click="save"
							>Valider mes réponses</va-button
						>
					</div>
					<div id="copyright">
						<p><i>&copy; Site réalisé par Delphine Moutault</i></p>
					</div>

					<div>
						<va-modal v-if="info" v-model="save" hide-default-actions>
							<template #header>
								<h3>{{ title }}</h3>
							</template>
							<slot>
								<div id="message">{{ msg }}</div>
							</slot>
							<template #footer>
								<va-button @click="escape">
									OK
								</va-button>
							</template>
						</va-modal>
					</div>
				</div>
				<div id="images" class="flex md-6 ">
					<div class="row">
						<div>
							<img id="tarot" alt="bouts tarot" src="../assets/tarotbouts.png" />
						</div>
						<div>
							<img id="jeton" alt="chute de jetons" src="../assets/jetontombe.gif" />
						</div>
					</div>
					<div class="row ">
						<div>
							<img
								id="scrabble"
								alt="pions de scrabble"
								src="../assets/scrabble.png"
							/>
						</div>
					</div>
					<div class="row">
						<div>
							<img
								class="row"
								id="flush"
								alt="suite cartes"
								src="../assets/suitecartes.gif"
							/>
						</div>
						<div>
							<img
								id="piles"
								alt="piles boites de jeux"
								src="../assets/pilesjeux.png"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { VaButton, VaInput } from "vuestic-ui";
import axios from "axios";

export default {
	name: "Sondage",
	data() {
		return {
			msg: "",
			pseudo: "",
			interet: "oui",
			frequence: "1 fois / semaine",
			jour: "",
			heure: 0,
			participants: "1",
			jeux: "",
			nouveau: "oui",
			suggestions: "",
			commentaires: "",
			jourChoice: "",
			jeuxChoice: "",
			showModal: false,
			message: "",
			info: false,
			fautes: "",
			title: "",
			valid: "",
		};
	},
	components: {
		VaButton,
		VaInput,
	},
	methods: {
		//* Save a line onf sondage in database
		save: function() {
			this.valid = "";
			// Detail of -jour-
			this.jourChoice = "";
			for (let j = 0; j < this.jour.length; j++) {
				this.jourChoice = this.jourChoice + " " + this.jour[j];
			}
			// Detail of -jeux-
			this.jeuxChoice = "";
			for (let e = 0; e < this.jeux.length; e++) {
				this.jeuxChoice = this.jeuxChoice + " " + this.jeux[e];
			}
			axios
				.post("http://localhost:3001/api/sondage/savesondage", {
					pseudo: this.pseudo,
					interet: this.interet,
					frequence: this.frequence,
					jour: this.jourChoice,
					heure: this.heure,
					participants: this.participants,
					jeux: this.jeuxChoice,
					nouveau: this.nouveau,
					suggestions: this.suggestions,
					commentaires: this.commentaires,
				})
				.then(() => {
					this.info = true;
					this.title = "";
					this.msg =
						"Merci " +
						this.pseudo +
						" pour vos réponses. Vos données sont enregistrées.";
					this.valid = true;
				})
				.catch((err) => {
					this.info = true;
					this.fautes = "";
					if (this.pseudo === "") {
						this.fautes = "un nom ou un pseudo";
					}
					if (this.jourChoice === "") {
						if (this.pseudo === "") {
							this.fautes = this.fautes + ", votre choix de jour";
						} else {
							this.fautes = this.fautes + "votre choix de jour";
						}
					}
					if (this.jeuxChoice === "") {
						if (this.pseudo === "" || this.jourChoice === "") {
							this.fautes = this.fautes + " et vos choix de jeux";
						} else {
							this.fautes = this.fautes + "vos choix de jeux";
						}
					}
					this.title = "Attention !";
					this.msg = "Merci de renseigner " + this.fautes + ".";
					this.valid = false;

					console.log(err);
				});
		},
		// No display anymore popup message
		escape: function() {
			this.info = false;
			if (this.valid) {
				window.location.reload();
			}
		},
	},
};
</script>
<style scoped>
#sondage {
	height: 250vh;
}
#sond {
	text-align: left;
	margin-left: 1rem;
}
h1 {
	text-align: center;
	line-height: 3.5rem;
	color: transparent;
	background-image: linear-gradient(to right, #f00, #ff0, #0ff, #0f0, #00f);
	-webkit-background-clip: text;
	animation: colore 20s linear infinite;
	background-size: 1000%;
}
@keyframes colore {
	0% {
		background-position: 0% 100%;
	}
	50% {
		background-position: 100% 100%;
	}
	100% {
		background-position: 0% 100%;
	}
}
#sstitre {
	color: #d4e686;
	margin-top: 1rem;
	text-align: center;
	/* color: #fc7600; */
}
h2 {
	/* color: #b0c9e2; */
	color: #fc7600;
	margin-top: 2rem;
	margin-bottom: 1rem;
	margin-left: 1rem;
}
h4 {
	margin-top: 2rem;
}
#validation {
	text-align: left;
	margin-top: 2rem;
	margin-left: 3rem;
	margin-bottom: 1rem;
}
#bout {
	font-size: 1.3rem;
}
.case {
	margin-top: 0.5rem;
}
.fill {
	width: 20rem;
}
.big {
	width: 40rem;
}
.des {
	margin: 0;
}
.sondage {
	margin-top: 6rem;
}
#pli {
	margin-top: 5rem;
	width: 65%;
}
#boites {
	width: 85%;
	margin-top: 4rem;
}
#tarot {
	width: 80%;
	margin-top: 5rem;
	margin-left: 3rem;
}
#jeton {
	width: 80%;
	margin-left: 9rem;
	margin-top: 7rem;
}
#scrabble {
	width: 40%;
	margin-left: 10rem;
	margin-top: 0rem;
}
#piles {
	width: 120%;
	margin-left: 3rem;
	margin-top: 10rem;
}
#flush {
	width: 50%;
	margin-left: 9rem;
	margin-top: 5rem;
}

#message,
h3 {
	font-family: Arial, Helvetica, sans-serif;
}
h3 {
	margin-bottom: 10px;
}
p {
	margin-top: 0.4rem;
	margin-left: 3rem;
	line-height: 1.5rem;
}
b {
	font-size: 1.1rem;
}
#question {
	margin-left: 3rem;
}
@media only screen and (max-width: 768px) {
	/*mobiles et tablettes*/
	#sondage {
		height: 490vh;
	}
	img {
		display: none;
	}

	#validation,
	#question,
	p {
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}
	.big {
		width: 20rem;
	}
}
</style>
