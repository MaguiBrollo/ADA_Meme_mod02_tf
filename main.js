/* ------------------- CLARO - OSCURO ----------------------------------  */
const btn_oscuro = document.getElementById("nav-btn-claroOscuro");

btn_oscuro.addEventListener("click", cambiar_color);

function cambiar_color() {
    if (btn_oscuro.textContent.trim() === "Modo Claro") {
        document.documentElement.setAttribute("data-theme-color", "light");
        btn_oscuro.innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i> </i> Modo Oscuro`;
    }
    else {
        document.documentElement.setAttribute("data-theme-color", "dark");
        btn_oscuro.innerHTML = `<i class="fa fa-sun-o"></i> Modo Claro`;
    }
}



/* -------------- TAMAÑO DE LA CAJITA DEL MEME (img y txt)-------------------  */
const cajita_del_meme = document.getElementById("main-img-tx");
const cajita_txt_sup = document.getElementById("main-txt-superior");
const cajita_txt_inf = document.getElementById("main-txt-inferior");
const cajita_margin = 40; /* para que no quede muy pegado al borde (der e izq) de la ventana */

const getFontSizeCajitaMeme = () =>
    parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--cajita_meme-tm-inicial-txt'))

const getTamanioMaximoCajitaMeme = () =>
    parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--cajita_meme-tm-maximo'))

window.visualViewport.addEventListener("resize", () => {
    if (window.innerWidth <= (600 + cajita_margin)) {
        const tm_ancho = window.visualViewport.width - cajita_margin;
        const tm_txt = Math.ceil(( (window.innerWidth - cajita_margin) / 10) - 10); /*inicialmente da 60, es muy grande por eso le quito 10*/
    
        cajita_del_meme.style.width  = `${tm_ancho}px`;
        cajita_del_meme.style.height = `${tm_ancho}px`;

        cajita_txt_sup.style.fontSize = `${tm_txt}px`;
        cajita_txt_inf.style.fontSize = `${tm_txt}px`; 
    } else {
        cajita_del_meme.style.height = getFontSizeCajitaMeme();
        cajita_del_meme.style.width  = getFontSizeCajitaMeme();
 
        cajita_txt_sup.style.fontSize =  getTamanioMaximoCajitaMeme();
        cajita_txt_inf.style.fontSize =  getTamanioMaximoCajitaMeme();
    }
})


/* -------------- PANEL de IMG Y TXT  -------------------  */
const panel_img = document.querySelector(".panel-img");
const panel_txt = document.querySelector(".panel-txt");

document.getElementById("nav-btn-txt").addEventListener("click", (e)=>{
    panel_img.classList.add("ocultar-panel");
    panel_txt.classList.remove("ocultar-panel");
    e.preventDefault();
})

document.getElementById("nav-btn-img").addEventListener("click", (e)=>{
    panel_txt.classList.add("ocultar-panel");
    panel_img.classList.remove("ocultar-panel");
    e.preventDefault();
})