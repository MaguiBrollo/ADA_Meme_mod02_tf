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



/* -------------- Eventos de los BOTONES de IMG Y TXT  (hacer aparecer un PANEL u otro) -------------------  */
const panel_img = document.querySelector(".panel-img");
const panel_txt = document.querySelector(".panel-txt");
const panel_cnt = document.querySelector(".contenedor-paneles");

function mostrarPanelImagen(){
    panel_txt.classList.add("ocultar-panel");
    panel_img.classList.remove("ocultar-panel");
    panel_cnt.classList.remove("ocultar-panel");
    panel_cnt.classList.add("ver-panel");
};

function mostrarPanelImagen1300(){
    if ( window.innerWidth >= (1300) &&  !panel_cnt.classList.contains("ver-panel") ) {
        mostrarPanelImagen();
    }
}
/* Cuando se agranda la ventana a más de 1300, debe conservar lo que estaba seleccionado, 
  o mostrar Panel Imagen, por defecto */
window.visualViewport.addEventListener("resize", () => {
    if ( window.innerWidth >= (1300) &&  !panel_cnt.classList.contains("ver-panel") ) {
           mostrarPanelImagen();
    }
});

document.getElementById("nav-btn-img").addEventListener("click", (e)=>{
    panel_txt.classList.add("ocultar-panel");
    panel_img.classList.remove("ocultar-panel");
    panel_cnt.classList.remove("ocultar-panel");
    panel_cnt.classList.add("ver-panel");
    e.preventDefault();
})

document.getElementById("nav-btn-txt").addEventListener("click", (e)=>{
    panel_img.classList.add("ocultar-panel");
    panel_txt.classList.remove("ocultar-panel");
    panel_cnt.classList.remove("ocultar-panel");
    panel_cnt.classList.add("ver-panel");
    e.preventDefault();
})

document.getElementById("panel-btn-cerrar").addEventListener("click", (e)=>{
    panel_img.classList.add("ocultar-panel");
    panel_txt.classList.add("ocultar-panel");
    panel_cnt.classList.add("ocultar-panel");
    panel_cnt.classList.remove("ver-panel");
    e.preventDefault();
})


/* ------------ Seleccionar origen de la imagen URL / PC ---------------- */
const subir_url_btn = document.getElementById("subir-url-btn");
const subir_pc_btn = document.getElementById("subir-pc-btn");

const subir_url_input = document.getElementById("subir-url-input");
const subir_pc_input = document.getElementById("subir-pc-input");

subir_url_btn.addEventListener("click",()=>{
    subir_url_input.classList.add("ver-input-subir-img");
    subir_pc_input.classList.remove("ver-input-subir-img");
})
subir_pc_btn.addEventListener("click",()=>{
    subir_pc_input.classList.add("ver-input-subir-img");
    subir_url_input.classList.remove("ver-input-subir-img");
})

/* Si la imagen es por URL*/
const main_img = document.getElementById("main-img"); /* cajita DIV donde va a ir la img como background*/

subir_url_input.addEventListener("input",(e)=>{
    main_img.style.backgroundImage = `url("${e.target.value}")`;
    e.preventDefault();
})

/* Si la imagen es por PC*/
const input_file = document.getElementById("input-file");
input_file.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        main_img.style.backgroundImage = `url("${e.target.result}")`;
      };
      reader.readAsDataURL(file);
    }
  });
  




/* ------------ BOTON descargar MEME como IMG ---------------- */
const div_img_txt = document.getElementById("main-img-tx");
const  btn_descargar_meme = document.getElementById("btn-descargar-meme");
btn_descargar_meme.addEventListener("click", () => {
    domtoimage.toBlob(div_img_txt).then((blob) => {
      window.saveAs(blob, "meme.png");
    });
  });
  


/*--------------------------------------------------------------------------*/
/* Cuando se carga por 1ra vez la página, el Panel de Imagen debe ser VISIBLE 
   solo si la ventana está a mas de 1300px*/
window.onload  = mostrarPanelImagen1300;