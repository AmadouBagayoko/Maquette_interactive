function telecharger() {
    const color= document.getElementById('color-cont');
    color.style.visibility='hidden';
    const element = document.getElementById('cv');
    const opt = {
      margin:       0,
      filename:     'cv_amadou.pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { 
        scale: 2,
        useCORS: true,
      },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save().then(() => {
      // Réafficher la palette après le téléchargement
      color.style.visibility = 'visible';
  });
  }  
//   fonction pour changer de couleur
document.getElementById('color-picker').addEventListener('input', function() {
    const newColor = this.value;
    document.documentElement.style.setProperty('--main-color', newColor);
});