<template>
	<div id="sondage">
		<div id="sond">
			<div class="grid ">
				<div class="col-2 col-offset-1">
					<img id="desrouge" alt="des rouge animés" src="../assets/dices.gif" />
				</div>
				<div class="sondage col-6">
					<h1 class="">Sondage Soirée Jeux<br />– Amicale Laïque –</h1>

					<p id="sstitre">Sondage ouvert jusqu'au 24/10/2021.</p>
				</div>
				<div class="des col-2">
					<img id="pli" alt="suite plis animé" src="../assets/suitedeplie.gif" />
				</div>
			</div>
			<!-- Soirée Jeux -->
			<div class="grid">
				<div class="col-12 md:col-6">
					<h2 class="">Soirée Jeux</h2>
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
				<div class=" col-offset-1 col-0 md:col-5">
					<img id="boites" alt="plusieurs boites jeux" src="../assets/jeux.png" />
				</div>
			</div>
			<!-- Sondage -->
			<div class="grid">
				<div class="p-col-12 md:col-6">
					<h2 class="">Sondage</h2>
					<div id="question">
						<h4>Votre prénom ou pseudo (si vous souhaitez garder l'anonymat) :</h4>
						<div class="case fill">
							<InputText :id="pseudoStyle" type="text" v-model="pseudo" />
						</div>

						<h4>Seriez-vous interessé(e) par une soirée Jeux ?</h4>
						<!-- 1 seule réponse -->
						<div class="case">
							<Listbox
								:id="interetStyle"
								v-model="interet"
								:options="optionsInteret"
								optionLabel="name"
								style="width:8rem"
							/>
						</div>

						<h4>A quelle fréquence souhaitez-vous participer à cette soirée ?</h4>
						<!-- 1 seule réponse -->
						<div class="case ">
							<Listbox
								:id="frequenceStyle"
								v-model="frequence"
								:options="optionsFrequence"
								optionLabel="name"
								style="width:11rem"
							/>
						</div>

						<h4>Quel jour seriez-vous disponible pour cette soirée ?</h4>
						<i>* Plusieurs réponses possibles</i>
						<div class="case">
							<Listbox
								:id="jourStyle"
								v-model="jour"
								:options="optionsJour"
								optionLabel="name"
								style="width:11rem"
								:multiple="true"
							/>
						</div>

						<h4>A partir de quelle heure seriez-vous disponible ?</h4>
						<div class="case">
							<Listbox
								:id="heureStyle"
								v-model="heure"
								:options="optionsHeure"
								optionLabel="name"
								style="width:8rem"
							/>
						</div>

						<h4>A combien de personnes pensez-vous venir à ces soirées ?</h4>
						<div class="case ">
							<Listbox
								:id="participantsStyle"
								v-model="participants"
								:options="optionsParticipants"
								optionLabel="name"
								style="width:8rem"
							/>
						</div>

						<h4>A quels jeux voudriez-vous participer ?</h4>
						<i>* Plusieurs réponses possibles</i>
						<div class="case">
							<Listbox
								:id="jeuxStyle"
								v-model="jeux"
								:options="optionsJeux"
								optionLabel="name"
								style="width:15rem"
								:multiple="true"
							/>
						</div>

						<h4>Êtes-vous intéressé par la découverte de nouveaux jeux ?</h4>
						<div class="case">
							<Listbox
								:id="nouveauStyle"
								v-model="nouveau"
								:options="optionsNouveau"
								optionLabel="name"
								style="width:8rem"
							/>
						</div>

						<h4>Avez-vous des suggestions de jeux ?</h4>
						<div class="case big">
							<Textarea v-model="suggestions" rows="5" cols="30" maxlength="255" />
						</div>

						<h4>Si vous avez des suggestions ou commentaires, c'est ici :</h4>
						<div class="case big">
							<Textarea v-model="commentaires" rows="5" cols="30" maxlength="255" />
						</div>
					</div>
					<!-- <div v-if="mobileinfo" id="mobilemessage">
						<p>{{ title }}</p>
						<p id="mobilemsg">{{ msg }}</p>
						<div id="mobilebtn">
							<button @click="escapeMobile">
								OK
							</button>
						</div>
					</div> -->
					<div id="validation">
						<Button
							id="bout"
							label="Valider mes réponses"
							@click="save"
							class="p-button-warning p-button-lg"
						/>
					</div>
					<div>
						<Dialog
							:header="title"
							v-model:visible="displayResponsive"
							:breakpoints="{ '960px': '75vw' }"
							:style="{ width: '50vw' }"
						>
							<p>
								{{ msg }}
							</p>
							<template #footer>
								<Button
									label="OK"
									icon="pi pi-check"
									@click="closeResponsive"
									autofocus
								/>
							</template>
						</Dialog>
					</div>

					<div id="copyright">
						<p><i>&copy; Site réalisé par Delphine Moutault</i></p>
					</div>

					<!-- <div id="boxmessage">
						<va-modal class="mr-2 mb-2" v-if="info" v-model="save" hide-default-actions>
							<template #header>
								<h3>{{ title }}</h3>
							</template>
							<slot>
								<div id="message">{{ msg }}</div>
							</slot>
							<template #footer>
								<button @click="escape">
									OK
								</button>
							</template>
						</va-modal>
					</div> -->
				</div>

				<div id="images" class="col-0 md:col-6">
					<div class="grid">
						<div class="col-4">
							<img id="tarot" alt="bouts tarot" src="../assets/tarotbouts.png" />
						</div>
						<div class="col-8">
							<img id="jeton" alt="chute de jetons" src="../assets/jetontombe.gif" />
						</div>
					</div>
					<div class="grid ">
						<div class="col-4 col-offset-2">
							<img
								id="scrabble"
								alt="pions de scrabble"
								src="../assets/scrabble.png"
							/>
						</div>
						<div class="col-3 col-offset-1">
							<img
								class=""
								id="flush"
								alt="suite cartes"
								src="../assets/suitecartes.gif"
							/>
						</div>
					</div>
					<div class="grid">
						<div class="col-5 col-offset-4">
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
import axios from "axios";

export default {
	name: "Sondage",
	data() {
		return {
			msg: "",
			pseudo: "",
			interet: "",
			frequence: "",
			jour: "",
			heure: "",
			participants: "",
			jeux: "",
			nouveau: "",
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
			mobileinfo: false,
			displayResponsive: false,
			optionsInteret: [
				{ name: "Oui", code: "OUI" },
				{ name: "Non", code: "NON" },
				{ name: "Peut-être", code: "MAYBE" },
			],
			optionsFrequence: [
				{ name: "1 fois / semaine", code: "semaine" },
				{ name: "1 fois / mois", code: "mois" },
				{ name: "1 fois / trimestre", code: "trimestre" },
				{ name: "1 fois / an", code: "an" },
			],
			optionsJour: [
				{ name: "Lundi", code: "lundi" },
				{ name: "Mardi", code: "mardi" },
				{ name: "Mercredi", code: "mercredi" },
				{ name: "Samedi", code: "samedi" },
			],
			optionsHeure: [
				{ name: "20h", code: 0 },
				{ name: "20h30", code: 1 },
			],
			optionsParticipants: [
				{ name: "1", code: "1" },
				{ name: "2", code: "2" },
				{ name: "Plus", code: "plus" },
			],
			optionsJeux: [
				{ name: "Tarot", code: "tarot" },
				{ name: "Belote", code: "belote" },
				{ name: "Autres jeux de cartes", code: "cartes" },
				{ name: "Scrabble", code: "scrabble" },
				{ name: "Jeux de société", code: "société" },
			],
			optionsNouveau: [
				{ name: "Oui", code: "oui" },
				{ name: "Non", code: "non" },
			],
		};
	},
	components: {},
	methods: {
		//* Save a line onf sondage in database
		save: function() {
			this.pseudoStyle = "";
			this.interetStyle = "";
			this.frequenceStyle = "";
			this.jourStyle = "";
			this.heureStyle = "";
			this.participantsStyle = "";
			this.jeuxStyle = "";
			this.nouveauStyle = "";
			this.valid = "";
			// Detail of -jour-
			this.jourChoice = "";
			for (let j = 0; j < this.jour.length; j++) {
				this.jourChoice = this.jourChoice + " " + this.jour[j].code;
			}
			// Detail of -jeux-
			this.jeuxChoice = "";
			for (let e = 0; e < this.jeux.length; e++) {
				this.jeuxChoice = this.jeuxChoice + " " + this.jeux[e].code;
			}
			axios
				// .post("https://api-amicale-laique-sondage.delmout.com/api/sondage/savesondage", {
				.post(process.env.VUE_APP_API_SONDAGE + "api/sondage/savesondage", {
					// .post("http://localhost:3001/api/sondage/savesondage", {
					pseudo: this.pseudo,
					interet: this.interet.code,
					frequence: this.frequence.code,
					jour: this.jourChoice,
					heure: this.heure.code,
					participants: this.participants.code,
					jeux: this.jeuxChoice,
					nouveau: this.nouveau.code,
					suggestions: this.suggestions,
					commentaires: this.commentaires,
				})
				.then(() => {
					// if (window.matchMedia("(min-width: 768px)").matches) {
					// 	this.info = true;
					// 	this.mobileinfo = false;
					// } else {
					// 	this.info = false;
					// 	this.mobileinfo = true;
					// 	setTimeout(window.location.reload(), 15000);
					// }
					this.displayResponsive = true;
					this.title = "Merci de votre participation";
					this.msg =
						"Merci " +
						this.pseudo +
						" pour vos réponses. Vos données sont enregistrées.";
					this.valid = true;
				})
				.catch((err) => {
					// if (window.matchMedia("(min-width: 768px)").matches) {
					// 	this.info = true;
					// 	this.mobileinfo = false;
					// } else {
					// 	this.info = false;
					// 	this.mobileinfo = true;
					// }

					// this.fautes = "";
					if (this.pseudo === "") {
						this.pseudoStyle = "alert";
					}
					if (this.interet === "") {
						this.interetStyle = "alert";
					}
					if (this.frequence === "") {
						this.frequenceStyle = "alert";
					}
					if (this.jour === "") {
						this.jourStyle = "alert";
					}
					if (this.heure === "") {
						this.heureStyle = "alert";
					}
					if (this.participants === "") {
						this.participantsStyle = "alert";
					}
					if (this.jeux === "") {
						this.jeuxStyle = "alert";
					}
					if (this.nouveau === "") {
						this.nouveauStyle = "alert";
					}
					// if (this.jourChoice === "") {
					// 	if (this.pseudo === "") {
					// 		this.fautes = this.fautes + ", votre choix de jour";
					// 	} else {
					// 		this.fautes = this.fautes + "votre choix de jour";
					// 	}
					// }
					// if (this.jeuxChoice === "") {
					// 	if (this.pseudo === "" || this.jourChoice === "") {
					// 		this.fautes = this.fautes + " et vos choix de jeux";
					// 	} else {
					// 		this.fautes = this.fautes + "vos choix de jeux";
					// 	}
					// }
					this.displayResponsive = true;

					this.title = "Attention !";
					this.msg = "Merci de renseigner les cellules en rouge.";
					this.valid = false;

					console.log(err);
					console.log(this.pseudo);
					console.log(this.interet.code);
					console.log(this.frequence.code);
					console.log(this.jourChoice);
					console.log(this.heure.code);
					console.log(this.participants.code);
					console.log(this.nouveau.code);
					console.log(this.jeuxChoice);
					console.log(this.suggestions);
					console.log(this.commentaires);
				});
		},
		// // No display anymore popup message
		// escape: function() {
		// 	this.info = false;
		// 	if (this.valid) {
		// 		window.location.reload();
		// 	}
		// },
		closeResponsive: function() {
			this.displayResponsive = false;
			if (this.valid) {
				window.location.reload();
				// setTimeout(window.location.reload(), 3000);
			}
		},
	},
};
</script>
<style scoped>
#sondage {
	height: 500vh;
}
#sond {
	text-align: left;
	margin-left: 1rem;
}
h1 {
	text-align: center;
	/* line-height: 3.5rem; */
	font-weight: 800;
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
	/* color: #fc7600; */
	color: #b073cf;
	margin-top: 2rem;
	margin-bottom: 1rem;
	margin-left: 1rem;
	font-weight: 800;
}
h4 {
	margin-top: 2rem;
	font-weight: 500;
}
#alert {
	border: solid red;
}
#validation {
	text-align: left;
	margin-top: 2rem;
	margin-left: 3rem;
	margin-bottom: 1rem;
}
#bout {
	font-size: 1.3rem;
	font-weight: 600;
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
/* .des {
	margin: 0;
} */
.sondage {
	margin-top: 4rem;
}
#pli {
	margin-top: 5rem;
	width: 65%;
}
#boites {
	width: 65%;
	margin: auto;
	margin-top: 4rem;
}
#tarot {
	width: 100%;
	/* margin-top: 5rem;
	margin-left: 3rem; */
}
#jeton {
	width: 100%;
	/* margin-left: 0rem; */
	/* margin-top: 7rem; */
}
#scrabble {
	width: 100%;
	/* margin-left: 10rem;
	margin-top: 0rem; */
}
#piles {
	width: 100%;
	/* margin-left: 3rem; */
	margin-top: 3rem;
}
#flush {
	width: 90%;
	/* margin-left: 9rem; */
	margin-top: 7rem;
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
#boxmessage {
	margin-left: 0;
}
#mobilemessage {
	background-color: blanchedalmond;
	color: black;
	font-weight: 700;
	margin-right: 3rem;
	padding: 6px 6px 10px 6px;
}
#mobilemsg {
	text-align: justify;
}
#mobilebtn {
	text-align: right;
}
/* #images {
	background-color: yellow;
} */
@media only screen and (max-width: 1700px) {
	/*mobiles et tablettes et plus ! */
	#sondage {
		height: 490vh;
	}
	/* img {
		display: none;
	} */

	#validation,
	#question,
	p {
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}
	.big {
		width: 20rem;
	}
	#pli {
		margin-top: 6rem;
		width: 85%;
	}
	#desrouge {
		width: 85%;
		margin-top: 4rem;
	}
}
@media only screen and (max-width: 780px) {
	/*mobiles et tablettes  */
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
