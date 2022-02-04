//* Pointer on a realisation box in Realisations Page and Display detail of project
// Where write details of project
const detail = document.getElementById("subsites");

// If mouse hover the project box 1
const un =
	"<p> Réservation de commandes de produits alimentaires locaux<br/>pour livraison des commandes 1 fois par semaine au magasin.<br/>Gestion des stocks (alerte stock limité).<br/>Gestion des jours ouvrables pour les commandes par produit.<br/>Téléchargement de la synthèse des commandes vers Excel.</p>";
const projUn = document.querySelector("#sites a:nth-child(1)");
projUn.addEventListener("mouseover", function () {
	detail.innerHTML = un;
});
projUn.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 2
const deux =
	'<p> Réseau social pour salariés d\'une entreprise.<br/>Publications textes, documents, images, vidéos.<br/>Possibilité de "liker", commenter les publications.</p>';
const projDeux = document.querySelector("#sites a:nth-child(2)");
projDeux.addEventListener("mouseover", function () {
	detail.innerHTML = deux;
});
projDeux.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 3
const trois =
	"<p> Questionnaire avec choix multiple, cases à cocher, champs commentaires.<br/>Données sauvegardées sur une base de données.</p>";
const projTrois = document.querySelector("#sites a:nth-child(3)");
projTrois.addEventListener("mouseover", function () {
	detail.innerHTML = trois;
});
projTrois.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 4
const quatre =
	"<p> Renseignement d'un formulaire.<br/>Copie du formulaire complété dans un PDF.<br/>Envoi par email du formulaire complété.</p>";
const projQuatre = document.querySelector("#sites a:nth-child(4)");
projQuatre.addEventListener("mouseover", function () {
	detail.innerHTML = quatre;
});
projQuatre.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 5
const cinq =
	"<p> Liste inventaire produits.<br/>Gestion des pr<span style='font-family:helvetica'>ê</span>ts produits par les utilisateurs.</p>";
const projCinq = document.querySelector("#sites a:nth-child(5)");
projCinq.addEventListener("mouseover", function () {
	detail.innerHTML = cinq;
});
projCinq.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 6
const six =
	"<p> Envoi email à toute la liste des utilisateurs.<br/>Mise en page email anticipé avec image à télécharger.<br/>Signature email préconçu contenant image.</p>";
const projSix = document.querySelector("#sites a:nth-child(6)");
projSix.addEventListener("mouseover", function () {
	detail.innerHTML = six;
});
projSix.addEventListener("mouseleave", function () {
	detail.innerHTML = "";
});

// If mouse hover the project box 7
const sept =
	"<p> Choix des créneaux horaires par les administrateurs.<br/>Renseignement de leur disponibilité de chacun des utilisateurs.<br/>Synthèse du planning du groupe d'utilisateurs.</p>";
const projSept = document.querySelector("#sites a:nth-child(7)");
projSept.addEventListener("mouseover", function () {
	detail.innerHTML = sept;
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
const boxCinq = boxesCarousel[4];
const boxSix = boxesCarousel[5];
const boxSept = boxesCarousel[6];
const allDiv = [boxUn, boxDeux, boxTrois, boxQuatre, boxCinq, boxSix, boxSept];
function nextOne(uno, dos) {
	uno.style.display = "none";
	dos.style.display = "block";
}

function goRight() {
	if (localStorage.getItem("projet") === null) {
		localStorage.setItem("projet", 1);
	} else {
		if (localStorage.getItem("projet") >= 6) {
			localStorage.setItem("projet", 6);
		} else {
			localStorage.setItem("projet", parseInt(localStorage.getItem("projet")) + 1);
		}
	}
	// localStorage.clear();
	const uno = allDiv[parseInt(localStorage.getItem("projet")) - 1];
	const dos = allDiv[parseInt(localStorage.getItem("projet"))];
	nextOne(uno, dos);
}

const pushRight = document.getElementById("right");
pushRight.addEventListener("click", function () {
	goRight();
});

function goLeft() {
	if (localStorage.getItem("projet") === null) {
		localStorage.setItem("projet", 0);
	} else {
		if (localStorage.getItem("projet") <= 0) {
			localStorage.setItem("projet", 0);
		} else {
			localStorage.setItem("projet", parseInt(localStorage.getItem("projet")) - 1);
		}
	}
	// localStorage.clear();
	const uno = allDiv[parseInt(localStorage.getItem("projet")) + 1];
	const dos = allDiv[parseInt(localStorage.getItem("projet")) + 0];
	nextOne(uno, dos);
}

const pushLeft = document.getElementById("left");
pushLeft.addEventListener("click", function () {
	goLeft();
});

// Clear localStorage si page reload
document.addEventListener("DOMContentLoaded", function () {
	localStorage.clear();
});

// Push carousel with swipe !
const boxCarousel = document.getElementById("develop");
boxCarousel.addEventListener(
	"touchstart",
	function (event) {
		touchstartX = event.changedTouches[0].screenX;
	},
	false
);
boxCarousel.addEventListener(
	"touchend",
	function (event) {
		touchendX = event.changedTouches[0].screenX;
		swipe();
	},
	false
);
function swipe() {
	if (touchendX < touchstartX) {
		console.log("Swiped Left");
		goLeft();
	}
	if (touchendX > touchstartX) {
		console.log("Swiped Right");
		goRight();
	}
}

//! * #Realisations for format Tablet
const mediaQuery = window.matchMedia("(max-width:992px)");
if (mediaQuery.matches) {
	const selec = document.getElementById("selec");
	selec.innerHTML = "Faire défiler les projets et cliquer sur le projet pour visionner.";
	detail.innerHTML = un;

	projDeux.style.display = "none";
	projTrois.style.display = "none";
	projQuatre.style.display = "none";
	projCinq.style.display = "none";
	projSix.style.display = "none";
	projSept.style.display = "none";

	//* Swipe on box of realisations
	projUn.addEventListener(
		"touchstart",
		function (event) {
			touchstartX = event.changedTouches[0].screenX;
		},
		false
	);
	projUn.addEventListener(
		"touchend",
		function (event) {
			touchendX = event.changedTouches[0].screenX;
			handleGesture(projSept, projUn, projDeux, sept, deux);
		},
		false
	);
	projDeux.addEventListener(
		"touchstart",
		function (event) {
			touchstartX = event.changedTouches[0].screenX;
		},
		false
	);
	projDeux.addEventListener(
		"touchend",
		function (event) {
			touchendX = event.changedTouches[0].screenX;
			handleGesture(projUn, projDeux, projTrois, un, trois);
		},
		false
	);
	projTrois.addEventListener(
		"touchstart",
		function (event) {
			touchstartX = event.changedTouches[0].screenX;
		},
		false
	);
	projTrois.addEventListener(
		"touchend",
		function (event) {
			touchendX = event.changedTouches[0].screenX;
			handleGesture(projDeux, projTrois, projQuatre, deux, quatre);
		},
		false
	);
	projQuatre.addEventListener(
		"touchstart",
		function (event) {
			touchstartX = event.changedTouches[0].screenX;
		},
		false
	);
	projQuatre.addEventListener(
		"touchend",
		function (event) {
			touchendX = event.changedTouches[0].screenX;
			handleGesture(projTrois, projQuatre, projCinq, trois, cinq);
		},
		false
	);
	projCinq.addEventListener(
		"touchstart",
		function (event) {
			touchstartX = event.changedTouches[0].screenX;
		},
		false
	);
	projCinq.addEventListener(
		"touchend",
		function (event) {
			touchendX = event.changedTouches[0].screenX;
			handleGesture(projQuatre, projCinq, projSix, quatre, six);
		},
		false
	);
	projSix.addEventListener(
		"touchstart",
		function (event) {
			touchstartX = event.changedTouches[0].screenX;
		},
		false
	);
	projSix.addEventListener(
		"touchend",
		function (event) {
			touchendX = event.changedTouches[0].screenX;
			handleGesture(projCinq, projSix, projSept, cinq, sept);
		},
		false
	);
	projSept.addEventListener(
		"touchstart",
		function (event) {
			touchstartX = event.changedTouches[0].screenX;
		},
		false
	);
	projSept.addEventListener(
		"touchend",
		function (event) {
			touchendX = event.changedTouches[0].screenX;
			handleGesture(projSix, projSept, projUn, six, un);
		},
		false
	);
	function handleGesture(nbboxprev, nbboxnow, nbboxnext, textprev, textnext) {
		if (touchendX < touchstartX) {
			console.log("Swiped Left");
			nbboxnow.style.display = "none";
			nbboxnext.style.display = "flex";
			detail.innerHTML = textnext;
		}
		if (touchendX > touchstartX) {
			console.log("Swiped Right");
			nbboxnow.style.display = "none";
			nbboxprev.style.display = "flex";
			detail.innerHTML = textprev;
		}
	}
}
