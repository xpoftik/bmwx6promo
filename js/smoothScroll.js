const smoothElements = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothElements.forEach(link => {
    link.addEventListener('click', (event) => {
        //console.log("link click, ", event)
        event.preventDefault()
        
        const hrefAttr = link.getAttribute('href').substring(1)
        //console.log("Link href:", hrefAttr)
        const element = document.getElementById(hrefAttr)
        element.scrollIntoView({
            behavior: "smooth"
        })
    })
})
