function telecharger() {
    const element = document.getElementById('cv');
  
    const opt = {
      margin:       0,
      filename:     'mon_cv.pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { 
        scale: 2,
        useCORS: true,
      },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(element).save();
  }
  
//   fonction pour changer de couleur
document.getElementById('color-picker').addEventListener('input', function() {
    const newColor = this.value;
    document.documentElement.style.setProperty('--main-color', newColor);
});