<button onclick="window.print()" class="telecharger-btn">
    <i class="fas fa-download"></i> Télécharger mon CV
</button>

// document.getElementById('color-picker').addEventListener('input', function(e) {
//     const newColor = e.target.value;
    
//     // Change la couleur principale
//     document.documentElement.style.setProperty('--main-color', newColor);
    
//     // Met à jour les éléments spécifiques
//     document.querySelectorAll('.left, .telecharger-btn, .retour-btn:hover').forEach(el => {
//         el.style.backgroundColor = newColor;
//     });
    
//     // Met à jour les bordures et textes
//     document.querySelectorAll('.retour-btn, .formation, .references').forEach(el => {
//         el.style.borderColor = newColor;
//     });
    
//     document.querySelectorAll('.retour-btn, .degree-year, h3').forEach(el => {
//         el.style.color = newColor;
//     });
// });