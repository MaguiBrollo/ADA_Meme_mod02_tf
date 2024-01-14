/* ======================== CLARO - OSCURO ========================  */
const btn_oscuro = document.getElementById("nav-btn-claroOscuro");

btn_oscuro.addEventListener("click", cambiar_color);

function cambiar_color() {
    if (btn_oscuro.textContent.trim() === "Modo Claro") {
        document.documentElement.setAttribute("data-theme-color", "light");
        btn_oscuro.innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i> Modo Oscuro`;
    }
    else {
        document.documentElement.setAttribute("data-theme-color", "dark");
        btn_oscuro.innerHTML = `<i class="fa fa-sun-o"></i> Modo Claro`;
    }
}


/*======================== TAMAÑO DE LA CAJITA DEL MEME ======================== */
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



/* ======================== Eventos de los BOTONES de IMG Y TXT  (hacer aparecer un PANEL u otro) ======================== */
const panel_img = document.querySelector(".panel-img");
const panel_txt = document.querySelector(".panel-txt");
const panel_cnt = document.querySelector(".contenedor-paneles");

function mostrarPanelImagen(){
    panel_txt.classList.add("ocultar");
    panel_img.classList.remove("ocultar");
    panel_cnt.classList.remove("ocultar");
    panel_cnt.classList.add("mostrar");
};

function mostrarPanelImagen1300(){  /*Carga pg x 1ra vez, y está a más de 1300px, carga panel de IMG*/
    if ( window.innerWidth >= (1300) &&  !panel_cnt.classList.contains("mostrar") ) {
        mostrarPanelImagen();
    }
}
 
window.visualViewport.addEventListener("resize", () => { /* Cuando se agranda la ventana a más de 1300, debe conservar 
                                                            lo que estaba seleccionado, o mostrar Panel Imagen, por defecto */
    if ( window.innerWidth >= (1300) &&  !panel_cnt.classList.contains("mostrar") ) {
           mostrarPanelImagen();
    }
});

document.getElementById("nav-btn-img").addEventListener("click", (e)=>{
    panel_txt.classList.add("ocultar");
    panel_img.classList.remove("ocultar");
    panel_cnt.classList.remove("ocultar");
    panel_cnt.classList.add("mostrar");
    e.preventDefault();
})

document.getElementById("nav-btn-txt").addEventListener("click", (e)=>{
    panel_img.classList.add("ocultar");
    panel_txt.classList.remove("ocultar");
    panel_cnt.classList.remove("ocultar");
    panel_cnt.classList.add("mostrar");
    e.preventDefault();
})

document.getElementById("panel-btn-cerrar").addEventListener("click", (e)=>{
    panel_img.classList.add("ocultar");
    panel_txt.classList.add("ocultar");
    panel_cnt.classList.add("ocultar");
    panel_cnt.classList.remove("mostrar");
    e.preventDefault();
})

/* ================================================================================================ */
/*                                       PANEL DE IMAGEN                                            */
/* ================================================================================================ */

/* ======================== Seleccionar origen de la imagen URL / PC ======================== */
const subir_url_btn = document.getElementById("subir-url-btn");
const subir_pc_btn = document.getElementById("subir-pc-btn");

const subir_url_input = document.getElementById("subir-url-input");
const subir_pc_input = document.getElementById("subir-pc-input");

function esMovil(){
    return navigator.userAgent.match(/Android/i) ||
           navigator.userAgent.match(/iPad/i) ||
           navigator.userAgent.match(/webOs/i) ||
           navigator.userAgent.match(/iPod/i) ||
           navigator.userAgent.match(/iPhone/i) ||
           navigator.userAgent.match(/BlackBerry/i) ||
           navigator.userAgent.match(/Windows Phone/i) 
}
function dispositivoMovil(){ /* Si es celu, cambia el icono de subir img por Desktop a Mobile*/
    if( esMovil() ){
        subir_pc_btn.innerHTML = `<i class="fa-solid fa-mobile-screen-button"></i>  Móvil`;
    }
}

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
  

/* ======================== Seleccionar color de FONDO img,  y BLEND MODE (se aplica al background) ======================== */
const input_color = document.getElementById("input-color"); //input que selecciona color
const modo_mezcla = document.getElementById("modo-mezcla"); //label donde muestra el Hexa del color

input_color.addEventListener("input", (e)=>{
    main_img.style.backgroundColor = `${e.target.value}`;
})

modo_mezcla.addEventListener("input", (e) => {
    main_img.style.backgroundBlendMode = `${e.target.value}`;
});


/* ======================== Aplicar Filtos y Restablecer ======================== */
const btn_reestablecer_filtros = document.getElementById("btn-reestablecer-filtros"); 
const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const contraste = document.getElementById("contraste");
const desenfoque = document.getElementById("desenfoque");
const grises = document.getElementById("grises");
const sepia = document.getElementById("sepia");
const hueR = document.getElementById("hue");
const saturacion = document.getElementById("saturacion");
const invertido = document.getElementById("invertido")

brillo.addEventListener('input', obtenerValorFiltros);
opacidad.addEventListener('input', obtenerValorFiltros);
contraste.addEventListener('input', obtenerValorFiltros);
desenfoque.addEventListener('input', obtenerValorFiltros);
grises.addEventListener('input', obtenerValorFiltros);
sepia.addEventListener('input', obtenerValorFiltros);
hueR.addEventListener('input', obtenerValorFiltros);
saturacion.addEventListener('input', obtenerValorFiltros);
invertido.addEventListener('input', obtenerValorFiltros);

btn_reestablecer_filtros.addEventListener("click",()=>{
    const bri = 1; /* Valor inicial de cada uno.*/
    const opa = 1;
    const con = 100;
    const blu = 0;
    const gri = 0;
    const sep = 0;
    const hue = 0;
    const sat = 100;
    const inv = 0;
    filtrarImg(bri, opa, con, blu, gri, sep, hue, sat, inv);
})

function obtenerValorFiltros(){
    const bri = brillo.value;
    const opa = opacidad.value;
    const con = contraste.value;
    const blu = desenfoque.value;
    const gri = grises.value;
    const sep = sepia.value;
    const hue = hueR.value;
    const sat = saturacion.value;
    const inv = invertido.value ;
    filtrarImg(bri, opa, con, blu, gri, sep, hue, sat, inv);
}

function filtrarImg(bri, opa, con, blu, gri, sep, hue, sat, inv){
    brillo.value    = `${bri}`;
    opacidad.value  = `${opa}`;
    contraste.value = `${con}`;
    desenfoque.value = `${blu}`;
    grises.value     = `${gri}`;
    sepia.value      = `${sep}`;
    hueR.value       = `${hue}`;
    saturacion.value = `${sat}`;
    invertido.value  = `${inv}`;
    main_img.style.filter = `brightness(${bri}) opacity(${opa}) contrast(${con}%) blur(${blu}px) grayscale(${gri}%) sepia(${sep}%) hue-rotate(${hue}deg) saturate(${sat}%) invert(${inv})`
}



/* ================================================================================================ */
/*                                       PANEL DE TEXTO                                             */
/* ================================================================================================ */

/* ======================== Aplicar TXT superior y/o inferior ======================== */
const input_txt_sup = document.getElementById("input-txt-sup");
const main_txt_superior = document.getElementById("main-txt-superior");
input_txt_sup.addEventListener("input", (e)=>{
    main_txt_superior.textContent = input_txt_sup.value;
    main_txt_superior.textContent = main_txt_superior.textContent.toUpperCase();
})

const input_txt_inf = document.getElementById("input-txt-inf");
const main_txt_inferior = document.getElementById("main-txt-inferior");
input_txt_inf.addEventListener("input", (e)=>{
    main_txt_inferior.textContent = input_txt_inf.value;
    main_txt_inferior.textContent = main_txt_inferior.textContent.toUpperCase();
})

const sin_txt_sup = document.getElementById("sin-txt-sup");
sin_txt_sup.addEventListener('click', function() {
    if(sin_txt_sup.checked) {
        main_txt_superior.classList.add("ocultar");
    } else {
        main_txt_superior.classList.remove("ocultar");
    }
});

const sin_txt_inf = document.getElementById("sin-txt-inf");
sin_txt_inf.addEventListener('click', function() {
    if(sin_txt_inf.checked) {
        main_txt_inferior.classList.add("ocultar");
    } else {
        main_txt_inferior.classList.remove("ocultar");
    }
});

/* ======================== Fuente - Tamaño - Alineación ======================== */
const selecionar_fuentes = document.getElementById("selecionar-fuentes");
function cargarFuentes(){
    var fuentes = "";
    let array=[ "Arial","Arial Black", "Bradley Hand", "Brush Script MT",
                "Cambria", "Comic Sans MS", "Courier",
                "Didot", "Garamond", "Georgia", "Helvetica", 
                "Impact", "Lucida Console", "Luminari",
                "Tahoma", "Times New Roman",
                "Trebuchet MS", "Verdana"      
            ];     
    for (var i = 0; i < array.length; i++) {
        fuentes += `<option value="`+array[i]+ `">`+ array[i]+`</option>`;
    }
    selecionar_fuentes.innerHTML = fuentes;   
}

selecionar_fuentes.addEventListener("change", ()=>{
    main_txt_superior.style.fontFamily = selecionar_fuentes.value;
    main_txt_inferior.style.fontFamily = selecionar_fuentes.value;
})

const tamanio_txt_meme = document.getElementById("tamanio-txt-meme");
tamanio_txt_meme.addEventListener("click", ()=>{
    main_txt_superior.style.fontSize = `${tamanio_txt_meme.value}px`;
    main_txt_inferior.style.fontSize = `${tamanio_txt_meme.value}px`;
})

document.getElementById("btn-alinear-izq").addEventListener("click", ()=>{
    main_txt_superior.style.textAlign = "left";
    main_txt_inferior.style.textAlign = "left";
})

document.getElementById("btn-alinear-cen").addEventListener("click", ()=>{
    main_txt_superior.style.textAlign = "center";
    main_txt_inferior.style.textAlign = "center";
})

document.getElementById("btn-alinear-der").addEventListener("click", ()=>{
    main_txt_superior.style.textAlign = "right";
    main_txt_inferior.style.textAlign = "right";
})



/* ================================================================================================*/
/* ------------ BOTON descargar MEME como IMG ---------------- */
const div_img_txt = document.getElementById("main-img-tx");
const  btn_descargar_meme = document.getElementById("btn-descargar-meme");
btn_descargar_meme.addEventListener("click", () => {
    domtoimage.toBlob(div_img_txt).then((blob) => {
      window.saveAs(blob, "meme.png");
    });
  });
  

/* ================================================================================================*/

function funcionesAEjecutar(){
    mostrarPanelImagen1300(); /* El Panel de IMG debe ser VISIBLE, si la ventana está a mas de 1300px*/
    dispositivoMovil();       /* Carga la pg, y es un celu?*/
    cargarFuentes();
}

/* Cuando se termina de cargar la página  */
window.onload  =  funcionesAEjecutar;