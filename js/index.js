//* Pointer on a realisation box in Realisations Page and Display detail of project
// Where write details of project
const detail = document.getElementById("subsites");

// If mouse hover the project box 1
const projUn = document.querySelector("#sites a:nth-child(1)");
projUn.addEventListener("mouseover", function () {
	detail.innerHTML =
		"<p> Réservation de commandes de produits alimentaires locaux<br/>pour livraison des commandes 1 fois par semaine au magasin.<br/>Gestion des stocks (alerte stock limité).<br/>Gestion des jours ouvrables pour les commandes par produit.<br/>Téléchargement de la synthèse des commandes vers Excel.</p>";
});
projUn.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 2
const projDeux = document.querySelector("#sites a:nth-child(2)");
projDeux.addEventListener("mouseover", function () {
	detail.innerHTML =
		'<p> Réseau social pour salariés d\'une entreprise.<br/>Publications textes, documents, images, vidéos.<br/>Possibilité de "liker", commenter les publications.</p>';
});
projDeux.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 3
const projTrois = document.querySelector("#sites a:nth-child(3)");
projTrois.addEventListener("mouseover", function () {
	detail.innerHTML =
		"<p> Questionnaire avec choix multiple, cases à cocher, champs commentaires.<br/>Données sauvegardées sur une base de données.</p>";
});
projTrois.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 4
const projQuatre = document.querySelector("#sites a:nth-child(4)");
projQuatre.addEventListener("mouseover", function () {
	detail.innerHTML =
		"<p> Renseignement d'un formulaire.<br/>Copie du formulaire complété dans un PDF.<br/>Envoi par email du formulaire complété.</p>";
});
projQuatre.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 5
const projCinq = document.querySelector("#sites a:nth-child(5)");
projCinq.addEventListener("mouseover", function () {
	detail.innerHTML =
		"<p> Liste inventaire produits.<br/>Gestion des pr<span style='font-family:helvetica'>ê</span>ts produits par les utilisateurs.</p>";
});
projCinq.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 6
const projSix = document.querySelector("#sites a:nth-child(6)");
projSix.addEventListener("mouseover", function () {
	detail.innerHTML =
		"<p> Envoi email à toute la liste des utilisateurs.<br/>Mise en page email anticipé avec image à télécharger.<br/>Signature email préconçu contenant image.</p>";
});
projSix.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 7
const projSept = document.querySelector("#sites a:nth-child(7)");
projSept.addEventListener("mouseover", function () {
	detail.innerHTML =
		"<p> Choix des créneaux horaires par les administrateurs.<br/>Renseignement de leur disponibilité de chacun des utilisateurs.<br/>Synthèse du planning du groupe d'utilisateurs.</p>";
});
projSept.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

//* Pointer on icon menu to go to "Realisations" or "Fonctionnalités" or "Technologies"
const menuMini = document.getElementsByClassName("menumini");
const menuDeroul = document.getElementsByClassName("menu");
// For the first
const firstMenuMini = menuMini[0];
const firstMenuDeroul = menuDeroul[0];
firstMenuMini.addEventListener("click", function () {
	firstMenuDeroul.style.display = "block";
	function disappear() {
		firstMenuDeroul.style.display = "none";
	}
	setTimeout(disappear, 4000);
});
// For the second
const secondMenuMini = menuMini[1];
const secondMenuDeroul = menuDeroul[1];
secondMenuMini.addEventListener("click", function () {
	secondMenuDeroul.style.display = "block";
	function disappear() {
		secondMenuDeroul.style.display = "none";
	}
	setTimeout(disappear, 4000);
});
// For the third
const thirdMenuMini = menuMini[2];
const thirdMenuDeroul = menuDeroul[2];
thirdMenuMini.addEventListener("click", function () {
	thirdMenuDeroul.style.display = "block";
	function disappear() {
		thirdMenuDeroul.style.display = "none";
	}
	setTimeout(disappear, 4000);
});

//* Carousel Fonctionnalités
//selec div in carousel
const boxesCarousel = document.querySelectorAll("#develop>div");
const boxUn = boxesCarousel[0];
const boxDeux = boxesCarousel[1];
const boxTrois = boxesCarousel[2];
const boxQuatre = boxesCarousel[3];
const boCinq = boxesCarousel[4];
const boxSix = boxesCarousel[5];
const boxSept = boxesCarousel[6];
function nextOne(uno, dos) {
	uno.style.display = "none";
	dos.style.display = "block";
}
boxUn.addEventListener("click", function () {
	nextOne(boxUn, boxDeux);
});
boxDeux.addEventListener("click", function () {
	nextOne(boxDeux, boxTrois);
});
