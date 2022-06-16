/*eslint-env browser*/

// expression régulière pour verifier si c'est non vide
var regExpNonVide = /./;
// expression régulière pour verifier que les caractères entrés pour le nom et le prenom sont soit une lettre de l'alphabet en majuscule ou minuscule ou le tiret l'apostrophe ou le underscore
var regEXNomPrenomValide = /^[a-zA-Z\s\-\'_]+$/;
// expression régulière pour l'email valide decrite dans le support
var regExEmail = /^[a-z][a-z_0-9\.\-]+@[a-z_0-9\.\-]+\.[a-z]{2,3}$/;
// expression régulière qui accepete les chiffres de 0 à 9 et obligatoirement 10 fois
var regExTel = /^\d{10}$/;
// booléen d'erreur pour les controles
var erreurDetectee = false;


// Première fonction saisie obligatoire pour certain champs qui prend en parametre l'input sur laquelle elle est lancée
function saisieObligatoire(inputDeclancheur) {
    // si j'ai une erreur détectée précédement je la re initialise à faux sinon je fais mon controle
    if (erreurDetectee) {
        erreurDetectee = false;
    } else {
        // si mon expression réguliere est testé et que ma réponse est fausse alors j'indique à l'utilisateur qu'il doit remplir le champs.
        if (regExpNonVide.test(inputDeclancheur.value) == false) {
            window.alert('ce champ nécessite une saisie obligatoire');
            inputDeclancheur.focus();
            // je met mon booleen erreur à true
            erreurDetectee = true;
            return false;
        }
    }
}

function formatNomPrenom(inputDeclancheur) {
    // si j'ai une erreur détectée précédement je la re initialise à faux sinon je fais mon controle
    if (erreurDetectee) {
        erreurDetectee = false;
    } else {
        // si mon expression réguliere est testé et que ma réponse est fausse alors j'indique à l'utilisateur qu'il doit remplir le champs.
        if (regEXNomPrenomValide.test(inputDeclancheur.value) == false) {
            window.alert("seuls les caractères alphanumériques sont autorisés");
            inputDeclancheur.focus();
            // je met mon booleen erreur à true
            erreurDetectee = true;
            return false;
        }
    }
}

function formatEmail(inputDeclancheur) {
    // si j'ai une erreur détectée précédement je la re initialise à faux sinon je fais mon controle
    if (inputDeclancheur.value != "") {
        if (erreurDetectee) {
            erreurDetectee = false;
        } else {
            // si mon expression réguliere est testé et que ma réponse est fausse alors j'indique à l'utilisateur qu'il doit remplir le champs.
            if (regExEmail.test(inputDeclancheur.value) == false) {
                window.alert("Votre adresse mail n'est pas valide");
                inputDeclancheur.focus();
                // je met mon booleen erreur à true
                erreurDetectee = true;
                return false;
            }
        }
    }
}

function controleNumTel(inputDeclancheur) {
    // si j'ai une erreur détectée précédement je la re initialise à faux sinon je fais mon controle
    if (inputDeclancheur.value != "") {
        if (erreurDetectee) {
            erreurDetectee = false;
        } else {
            // si mon expression réguliere est testé et que ma réponse est fausse alors j'indique à l'utilisateur qu'il doit remplir le champs.
            if (regExTel.test(inputDeclancheur.value) == false) {
                window.alert('Votre numéro de téléphone doit être composé de 10 chiffres.');
                inputDeclancheur.focus();
                // je met mon booleen erreur à true
                erreurDetectee = true;
                return false;
            }
        }
    }
}

function envoyerFormulaire() {
    // je verifie que mes champs obligatoires sont remplis grace à la valeur de mon return dans la fonction.

    if (saisieObligatoire(document.getElementById("tbx_nom")) == false || saisieObligatoire(document.getElementById("tbx_prenom")) == false || saisieObligatoire(document.getElementById("tbx_ville")) == false || saisieObligatoire(document.getElementById("tbx_cp")) == false || formatNomPrenom(document.getElementById("tbx_nom")) == false || formatNomPrenom(document.getElementById("tbx_prenom")) == false || formatNomPrenom(document.getElementById("tbx_ville")) == false || controleNumeroMembre(document.getElementById("tbx_numeroMembre")) == false || controleCP(document.getElementById("tbx_cp")) == false || formatEmail(document.getElementById("tbx_mail")) == false || controleNumTel(document.getElementById("tbx_telephone")) == false) {
        window.alert("erreur dans le formulaire");
        return false;
    } else {
        return true;
    }
}

window.addEventListener('load', function () {
    "use strict";
    document.getElementById('tbx_nom').addEventListener('blur',function(){saisieObligatoire(this)});
    document.getElementById('tbx_nom').addEventListener('change',function(){formatNomPrenom(this)});
    document.getElementById('tbx_prenom').addEventListener('blur',function(){saisieObligatoire(this)});
    document.getElementById('tbx_prenom').addEventListener('change',function(){formatNomPrenom(this)});
    document.getElementById('tbx_mail').addEventListener('change',function(){formatEmail(this)});
    document.getElementById('tbx_telephone').addEventListener('change',function(){controleNumTel(this)});


});