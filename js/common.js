document.addEventListener('DOMContentLoaded', function () { 

    // initial scrollY
    let currentTop = 0;

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        let scrollTop = window.scrollY;
        
        // header background
        scrollTop > 0 ? header.classList.add('bg') : header.classList.remove('bg');
        // header scroll Down - hide, scroll Up - show 
        currentTop < scrollTop ? header.classList.add('hide') : header.classList.remove('hide');
        // update
        currentTop = scrollTop;
    })

    // cursor custom
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

});