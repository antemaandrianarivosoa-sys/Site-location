// Gestion du menu mobile (Burger)
function toggleNav() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// Fonction pour simuler la sélection d'une voiture
function openModal(carName) {
    const selectElement = document.getElementById('selectedCar');
    const contactSection = document.getElementById('contact');
    
    // On sélectionne la voiture dans le menu déroulant automatiquement
    for(let i=0; i < selectElement.options.length; i++) {
        if(selectElement.options[i].text === carName) {
            selectElement.selectedIndex = i;
            break;
        }
    }
    
    // Défilement fluide vers le formulaire
    contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Petit effet visuel sur le champ
    selectElement.style.border = "2px solid #d35400";
    setTimeout(() => { selectElement.style.border = "none"; }, 2000);
}

// Intercepter l'envoi du formulaire
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Merci ! Votre demande de réservation a été envoyée. Nous vous contacterons sous peu.");
    this.reset();
});
