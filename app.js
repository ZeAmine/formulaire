const inpUtilisateur = document.querySelector(
  ".form-groupe:nth-child(1) input"
);
const inpMail = document.querySelector(".form-groupe:nth-child(2) input");
const inpMdp = document.querySelector(".form-groupe:nth-child(3) input");
const inpConfirme = document.querySelector(".form-groupe:nth-child(4) input");
// const name = "alert-circle-outline"g = document.querySelectorAll(".icone-verif");
const allSpan = document.querySelectorAll("span");
const allLigne = document.querySelectorAll(".ligne div");

const ionIcon = document.querySelectorAll("ion-icon");
console.log(ionIcon);

inpUtilisateur.addEventListener("input", (e) => {
  if (e.target.value.length >= 3) {
    ionIcon[0].style.display = "inline";
    ionIcon[0].name = "checkmark-circle-outline";
    allSpan[0].style.display = "none";
  } else {
    ionIcon[0].style.display = "inline";
    ionIcon[0].name = "alert-circle-outline";
    allSpan[0].style.display = "inline";
  }
});

inpMail.addEventListener("input", (e) => {
  const regexEmail = /\S+@\S+\.\S+/;

  if (e.target.value.search(regexEmail) === 0) {
    ionIcon[1].style.display = "inline";
    ionIcon[1].name = "checkmark-circle-outline";
    allSpan[1].style.display = "none";
  } else if (e.target.value.search(regexEmail) === -1) {
    ionIcon[1].style.display = "inline";
    ionIcon[1].name = "alert-circle-outline";
    allSpan[1].style.display = "inline";
  }
});

// Validation création du MDP

let valeurInp;
const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;

let objValidation = {
  symbole: 0,
  lettre: 0,
  chiffre: 0,
};

inpMdp.addEventListener("input", (e) => {
  valeurInp = e.target.value;

  if (valeurInp.search(specialCar) !== -1) {
    objValidation.symbole = 1;
  }
  if (valeurInp.search(alphabet) !== -1) {
    objValidation.lettre = 1;
  }
  if (valeurInp.search(chiffres) !== -1) {
    objValidation.chiffre = 1;
  }

  if ((e.inputType = "deleteContentBackward")) {
    if (valeurInp.search(specialCar) === -1) {
      objValidation.symbole = 0;
    }
    if (valeurInp.search(alphabet) === -1) {
      objValidation.lettre = 0;
    }
    if (valeurInp.search(chiffres) === -1) {
      objValidation.chiffre = 0;
    }
  }

  let testAll = 0;
  for (const property in objValidation) {
    if (objValidation[property] > 0) {
      testAll++;
    }
  }
  if (testAll < 3) {
    ionIcon[2].style.display = "inline";
    ionIcon[2].name = "alert-circle-outline";
    allSpan[2].style.display = "inline";
  } else {
    ionIcon[2].name = "checkmark-circle-outline";
    allSpan[2].style.display = "none";
  }

  // force mdp
  if (valeurInp.length <= 6 && valeurInp.length > 0) {
    allLigne[0].style.display = "block";
    allLigne[1].style.display = "none";
    allLigne[2].style.display = "none";
  } else if (valeurInp.length > 6 && valeurInp.length <= 9) {
    allLigne[0].style.display = "block";
    allLigne[1].style.display = "block";
    allLigne[2].style.display = "none";
  } else if (valeurInp.length > 9) {
    allLigne[0].style.display = "block";
    allLigne[1].style.display = "block";
    allLigne[2].style.display = "block";
  } else if (valeurInp.length === 0) {
    allLigne[0].style.display = "none";
    allLigne[1].style.display = "none";
    allLigne[2].style.display = "none";
  }
});

// confirmation

inpConfirme.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    ionIcon[3].style.display = "inline";
    ionIcon[3].name = "alert-circle-outline";
  } else if (e.target.value === valeurInp) {
    ionIcon[3].style.display = "inline";
    ionIcon[3].name = "checkmark-circle-outline";
  } else {
    ionIcon[3].style.display = "inline";
    ionIcon[3].name = "alert-circle-outline";
  }
});
