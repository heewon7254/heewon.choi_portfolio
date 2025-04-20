document.addEventListener('DOMContentLoaded', function () { 

    // header bg box-shadow
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        window.scrollY > 0 ? header.classList.add('bg') : header.classList.remove('bg')  
    })

    // cursor custom
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

});