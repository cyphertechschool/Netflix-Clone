document.querySelectorAll('#faq-wraper').forEach(header => {
    header.addEventListener('click', () => {
        header.childNodes[3].classList.toggle('faq-contant-active');
    });
});




