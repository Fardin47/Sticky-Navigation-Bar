const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

const lastContainerEl = document.querySelector(".last-container");

console.log(lastContainerEl.offsetTop) 

console.log(navbarEl.offsetHeight) /* here offsetheight = 55 */

console.log(bottomContainerEl.offsetTop) /* offsettop = 987 */


window.addEventListener("scroll", ()=> {
    if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50)
    {
        navbarEl.classList.add("active")

        if (window.scrollY > lastContainerEl.offsetTop - navbarEl.offsetHeight)
        {
            navbarEl.classList.add("active2")
        }

        else {
            navbarEl.classList.remove("active2")
        }
    } 
    else {
        navbarEl.classList.remove("active")
    }

    console.log(window.scrollY)

})

