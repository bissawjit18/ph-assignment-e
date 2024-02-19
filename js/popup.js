function openPopup(){
    const x = document.getElementById("popup-container");
    x.removeAttribute("style")
}

function closePopup(){
    const x = document.getElementById("popup-container");
    x.setAttribute("style",  "display: none");
}