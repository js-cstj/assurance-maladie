/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		// Fait en sorte que le formulaire s'exécute lorsque l'on clique sur le bouton "Composer"
		document.getElementById("btnComposer").addEventListener("click", e => {
			this.composer();
		});
		// Fait en sorte que le formulaire s'exécute lorsque l'on clique change une valeur
		document.getElementById("assurance-maladie").addEventListener("change", e => {
			this.composer();
		});
	}
	static composer() {
		// SAISIE =======================================================================
		var form, nom, prenom, naissance, sexe
		// var form = document.forms[0];
		form = document.getElementById("assurance-maladie");
		nom = form.nom.value;
		prenom = form.prenom.value;
		naissance = form.naissance.value;
		sexe = form.sexe.value;
		// TRAITEMENT ===================================================================
		var annee, mois, jour, alea, numero
		// Le nom et le prénom doivent être normalisés
		nom = this.normaliser(nom);
		prenom = this.normaliser(prenom);
		// On ne garde que les 2 derniers chiffres de l'année
		annee = naissance.slice(2,4);
		// On récupère les chiffres du mois
		mois = naissance.slice(5,7);
		// Le mois doit être transformé en nombre
		mois = parseInt(mois);
		// S'il s'agit d'une femme, on ajoute 50 au mois
		if (sexe === "f") {
			mois += 50;
		}
		// On retransforme le mois en chaine
		mois = mois.toString();
		// Si le mois n'a qu'un caractère, on ajoute un 0 au début
		if (mois.length < 2) {
			mois = "0" + mois;
		}
		// On récupère les chiffres du jour de naissance
		jour = naissance.slice(8,10);
		// On génère un nombre aléatoire allant de 1 à 20 inclusivement
		alea = Math.floor(Math.random() * 20) + 1
		// On transforme le mois en chaine
		alea = alea.toString();
		// Si le nombre aléatoire n'a qu'un caractère, on ajoute un 0 au début
		if (alea.length < 2) {
			alea = "0" + alea;
		}
		// On compose un numéro d'assurance maladie 
		// en suivant le modèle NOMP 9912 3115
		numero = nom.slice(0,3) + prenom[0] + " " + annee + mois + " " + jour + alea;

		// AFFICHAGE ====================================================================
		// L'affichage se fait dans un div ayant le id "nam"
		var nam;
		nam = document.getElementById("nam");
		nam.innerHTML = numero;
	}
	/**
	 * Mets la chaine donnée en majuscules, retire les accents français et les caractères
	 * non-alphabétiques
	 * @param string str La chaine à traiter
	 * @returns string La chaine normalisée
	 */
	static normaliser(str) {
		str = str.toUpperCase();
		str = str.replace(/[ÀÂÄ]/g, "A");
		str = str.replace(/[ÉÈÊË]/g, "E");
		str = str.replace(/[ÌÎÏ]/g, "I");
		str = str.replace(/[ÒÔÖ]/g, "O");
		str = str.replace(/[ÙÛÜ]/g, "U");
		str = str.replace(/[Ç]/g, "C");
		str = str.replace(/[^A-Z]/g, "");
		return str;
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
