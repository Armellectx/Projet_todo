// Sélectionnez le bouton et le div de l'affichage de la couleur
const changeColorButton = document.getElementById("changeColorButton");
const colorDisplay = document.getElementById("colorDisplay");

// Tableau de couleurs
const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"];
const texts = ["la", "vie", "est", "belle", "oui", "oui"]
// Fonction pour changer la couleur au hasard
function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    colorDisplay.style.color = randomColor;
    colorDisplay.textContent = texts[randomIndex]
}

// Ajoutez un gestionnaire d'événements au bouton
changeColorButton.addEventListener("click", changeColor);
