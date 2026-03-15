function generatePDF() {
    const element = document.querySelector('.me-container');
    html2pdf().from(element).save('Erik_Rehnberg_CV.pdf');
}