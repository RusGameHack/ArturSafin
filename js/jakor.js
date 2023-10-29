document.querySelectorAll('a.yakor').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = this.getAttribute('href').substring(1),
            scrollTarget = document.getElementById(href),
            topOffset = 0,
            elementPosition = scrollTarget.getBoundingClientRect().top,
            offsetPosition = elementPosition - topOffset;
        window.scrollBy({top: offsetPosition,behavior: 'smooth'})
    })
})