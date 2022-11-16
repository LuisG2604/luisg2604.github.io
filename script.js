// Luis Gonzalez - ./script.js - TP4

// Tous les éléments de HTML
const passwordOutput = document.getElementById("passwordOutput");
const lenght = document.getElementById("lenght");
const addUpper = document.getElementById("addUpper");
const addLower = document.getElementById("addLower");
const addNumber = document.getElementById("addNumber");
const addSymbol = document.getElementById("addSymbol");

// Tous les types de charactères permis
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const LOWER = "abcdefghijklmnopqrstuvxyz";
const SYMBOL = "!@#$%^&*(){}[]=<>/,.";
const NUMBER = "0123456789";

// Function pour générer le mot de passe
function generatePassword(){

    let newPassword = "";
    let charTypes = 0;
    // Confirmer la longueur avant de générer le mot de passe
    if(lenght.value>=5 && lenght.value<=20){
        // Confirmer les cases avant de générer le mot de passe
        if(addUpper.checked==false && addLower.checked==false && addNumber.checked==false && addSymbol.checked==false){
            alert("Vous devez cocher au moins une case!");
        }else{
            // Boucle qui s'arrête quand la "longueur" - "les charactères ajoutés" arrive à 0
            for(i = 0; i < lenght.value; i++){
        
                if(addUpper.checked==true){
                    newPassword += UPPER.charAt(Math.floor(Math.random() * UPPER.length));
                    charTypes++;
                    if((lenght.value-charTypes) == 0){
                        break;
                    };
                };
                if(addLower.checked==true){
                    newPassword += LOWER.charAt(Math.floor(Math.random() * LOWER.length));
                    charTypes++;
                    if((lenght.value-charTypes) == 0){
                        break;
                    };
                };
                if(addNumber.checked==true){
                    newPassword += NUMBER.charAt(Math.floor(Math.random() * NUMBER.length));
                    charTypes++;
                    if((lenght.value-charTypes) == 0){
                        break;
                    };
                };
                if(addSymbol.checked==true){
                    newPassword += SYMBOL.charAt(Math.floor(Math.random() * SYMBOL.length));
                    charTypes++;
                    if((lenght.value-charTypes) == 0){
                        break;
                };
            };
        };
        // Mettre le mot de passe devant le client
        passwordOutput.innerText = newPassword;
        };
        }else{
        alert("Vous devez mettre une longueur entre 5 et 20");
    };
};

// Function pour copier le mot de passe
function copyPassword(){
    navigator.clipboard.writeText(passwordOutput.innerText);
    alert("Vous avez copié le mot de passe avec succès!");
};