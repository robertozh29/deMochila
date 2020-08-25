const ham = document.getElementById("ham");
const navResponsive = document.getElementById("nav-responsive");

ham.addEventListener('click', () => {
    if(ham.checked){
        navResponsive.style.display = "flex"
    } else if(!ham.checked){
        navResponsive.style.display = "none"
    }
    
})