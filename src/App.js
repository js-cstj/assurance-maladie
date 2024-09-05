/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var form = document.getElementById("assurance-maladie");
		// Fait en sorte que le formulaire s'exécute lorsque l'on clique sur le bouton "Composer"
		form.addEventListener("submit", e => {
			e.preventDefault();
			this.composer();
		});
		// Fait en sorte que le formulaire s'exécute lorsque l'on change une valeur
		form.addEventListener("input", e => {
			this.composer();
		});
	}
	static composer() {
		// SAISIE =======================================================================
		var form, nom, prenom, naissance, sexe

		// TRAITEMENT ===================================================================
		var annee, mois, jour, alea, numero
		// Le nom et le prénom doivent être normalisés

		// On ne garde que les 2 derniers chiffres de l'année

		// On récupère les chiffres du mois

		// Le mois doit être transformé en nombre

		// S'il s'agit d'une femme, on ajoute 50 au mois

		// On retransforme le mois en chaine

		// Si le mois n'a qu'un caractère, on ajoute un 0 au début

		// On récupère les chiffres du jour de naissance

		// On génère un nombre aléatoire allant de 1 à 20 inclusivement

		// On transforme le mois en chaine

		// Si le nombre aléatoire n'a qu'un caractère, on ajoute un 0 au début

		// On compose un numéro d'assurance maladie 
		// en suivant le modèle NOMP 9912 3115

		
		// AFFICHAGE ====================================================================
		// L'affichage se fait dans un div ayant le id "nam"
		var nam;

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
}
App.main();
