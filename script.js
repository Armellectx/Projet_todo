// Sélectionnez le bouton et le div de l'affichage de la couleur
const changeColorButton = document.getElementById("changeColorButton");
const colorDisplay = document.getElementById("colorDisplay");
const phrases = ["Thorben", "I", "miss", "you", "already", " :O", "What", "did", "you", "do", "to", "me", "I", "wish", "you", "shoot", "a", "fox", "Lol", "NO", "I", "am", "joking", "I", "am", "team", "Fox", "oupsi", "<3", "<333333", "kiss kiss"];
let phraseIndex = 0;

// Tableau de couleurs
const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF", "#FF33FF", "#FFA500", "#800080", "#00FFFF", "#008000"];


// Fonction pour changer la couleur et afficher la phrase
function changeColorAndPhrase() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    colorDisplay.style.color = randomColor;
    colorDisplay.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
}

// Ajoutez un gestionnaire d'événements au bouton
changeColorButton.addEventListener("click", changeColorAndPhrase);

