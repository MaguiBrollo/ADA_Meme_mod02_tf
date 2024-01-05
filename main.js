/* ------------------- CLARO - OSCURO ----------------------------------  */
const btn_oscuro = document.getElementById("nav-btn-claroOscuro");

btn_oscuro.addEventListener("click", cambiar_color);

function cambiar_color(){
    if(btn_oscuro.textContent.trim() === "Modo Claro"){
        document.documentElement.setAttribute("data-theme-color","light");
        btn_oscuro.innerHTML= `<i class="fa fa-certificate icon-col" aria-hidden="true"> </i> Modo Oscuro`;
    }
    else{
       document.documentElement.setAttribute("data-theme-color","dark"); 
       btn_oscuro.innerHTML= `<i class="fa fa-certificate icon-col" aria-hidden="true"> </i> Modo Claro`;
    }
}
/* -------------------------------------------------------------------  */
