
    const mainHeader = document.querySelector(".main-header")
    const logoMenu = document.querySelector(".logomenu")
    const logoExit = document.querySelector(".logoexit")
         navLinks = document.querySelector(".nav-links")
         text = document.querySelector(".sec-text")
    
    window.addEventListener("scroll", () => {
        if(scrollY >= 160) {
            mainHeader.classList.add("bg")
            navLinks.classList.add("bg")
        }else {
            mainHeader.classList.remove("bg")
            navLinks.classList.remove("bg")
        }
    })
      
    logoMenu.addEventListener("click", openMenu)
    function openMenu() {
        console.log("click me")
        logoMenu.classList.toggle("active")
        logoExit.classList.toggle("active")
        navLinks.classList.toggle("active")
    }

    logoExit.addEventListener("click", () => {
        console.log("click you")
        logoMenu.classList.remove("active")
        logoExit.classList.remove("active")
        navLinks.classList.remove("active")
    })

    document.querySelectorAll("li").forEach(links => links.addEventListener("click", () => {
        openMenu()
        navLinks.classList.remove("active")
    }))

    function textLoad () {
        setTimeout(() => {
            text.textContent = "FrontEnd Developer."
        }, 0);
        setTimeout(() => {
            text.textContent = "Open Source euthusiast."
        }, 4000);
        setTimeout(() => {
            text.textContent = "YouTuber."
        }, 8000);
    }

    textLoad()
    setInterval(textLoad, 12000)