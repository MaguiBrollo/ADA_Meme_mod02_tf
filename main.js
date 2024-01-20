/* ======================== BREAKPOINT ========================  */
let breakPointUno = () =>
    parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--breakpoints-uno'));          /* 1300 */

let breakPointDos = () =>
parseInt(getComputedStyle(document.documentElement)
    .getPropertyValue('--breakpoints-dos'));             /* 850 */


/* ======================== CLARO - OSCURO ========================  */
const btn_oscuro = document.getElementById("nav-btn-claroOscuro");

btn_oscuro.addEventListener("click", ()=> {
    if (btn_oscuro.textContent.trim() === "Modo Claro") {
        document.documentElement.setAttribute("data-theme-color", "light");
        btn_oscuro.innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i> Modo Oscuro`;
    }
    else {
        document.documentElement.setAttribute("data-theme-color", "dark");
        btn_oscuro.innerHTML = `<i class="fa fa-sun-o"></i> Modo Claro`;
    }
});


/* ======================== Alto del contenedor ppal ========================  */
function altoContenedorPpal(){
    if (window.innerWidth <= ( breakPointDos() )) {
        let element = document.getElementById('contenedor-header');
        let compStyles = window.getComputedStyle(element);
        let altura = compStyles.getPropertyValue('height');
        let alturaContenedor = window.visualViewport.height - parseInt(altura);
       
        document.getElementById("contenedor-ppal").style.minHeight = `${alturaContenedor}px`;
        
        // console.log('win          ',window.visualViewport.height);
        // console.log('alt header = ', compStyles.getPropertyValue('height'));
        // console.log('var alt      ', alturaContenedor);
        // console.log('cont ', document.getElementById("contenedor-ppal").style.minHeight); 
    }
}


/*======================== TAMAÑO DE LA CAJITA DEL MEME ======================== */
const cajita_del_meme = document.getElementById("main-img-txt");
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
    altoContenedorPpal(); /*Calcula el alto del contenedor-ppal, según el alto de la Ventaga Gráfica*/
});


/* ========== Eventos de los BOTONES de IMG Y TXT  (hacer aparecer un PANEL u otro) ======================== */
const ir_arriba = document.getElementById("ir-arriba");
const ir_abajo = document.getElementById("ir-abajo");

const panel_img = document.getElementById("panel-img");
const panel_txt = document.getElementById("panel-txt");
const panel_cnt = document.getElementById("contenedor-paneles");

function mostrarPanelImagen(){
    panel_img.classList.remove("ocultar");
    panel_cnt.classList.remove("ocultar");
    panel_txt.classList.add("ocultar");
};

function mostrarPanelImagen1300(){  /*Carga pg x 1ra vez, y está a más de 1300px, carga panel de IMG*/
    
    document.getElementById("nav-btn-img").focus(); /* carga la pg, y el focus lo tiene el btn imagen*/

    if ( window.innerWidth >= ( breakPointUno() ) &&  panel_cnt.classList.contains("ocultar") ) {
        mostrarPanelImagen();
    }
}
 
window.visualViewport.addEventListener("resize", () => { /* Cuando se agranda la ventana a más de 1300, debe conservar 
                                                            lo que estaba seleccionado, o mostrar Panel Imagen, por defecto */
    if ( window.innerWidth >= ( breakPointUno() ) &&  panel_cnt.classList.contains("ocultar") ) {
           mostrarPanelImagen();
    }

    if ( window.innerWidth <= ( breakPointDos() ) &&  !panel_cnt.classList.contains("ocultar") ) {
        ir_arriba.classList.remove("ocultar");
        ir_abajo.classList.remove("ocultar");
    }
});

document.getElementById("nav-btn-img").addEventListener("click", (e)=>{
    panel_txt.classList.add("ocultar");
    panel_img.classList.remove("ocultar");
    panel_cnt.classList.remove("ocultar");

    subir_url_input.classList.add("ocultar"); /* Siempre que cargue IMG, deben estar ocultos*/
    subir_pc_input.classList.add("ocultar");
   
    if ( window.innerWidth <= ( breakPointDos() ) &&  !panel_cnt.classList.contains("ocultar") ) {
        ir_arriba.classList.remove("ocultar");
        ir_abajo.classList.remove("ocultar");
    }
})

document.getElementById("nav-btn-txt").addEventListener("click", (e)=>{
    panel_img.classList.add("ocultar");
    panel_txt.classList.remove("ocultar");
    panel_cnt.classList.remove("ocultar");
    

    if ( window.innerWidth <= ( breakPointDos() ) &&  !panel_cnt.classList.contains("ocultar") ) {
        ir_arriba.classList.remove("ocultar");
        ir_abajo.classList.remove("ocultar");
    }
})

document.getElementById("panel-btn-cerrar").addEventListener("click", (e)=>{
    panel_img.classList.add("ocultar");
    panel_txt.classList.add("ocultar");
    panel_cnt.classList.add("ocultar");
   
    if ( window.innerWidth <= ( breakPointDos() ) ) {
        ir_arriba.classList.add("ocultar");
        ir_abajo.classList.add("ocultar");
    }
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
    subir_url_input.classList.remove("ocultar");
    subir_pc_input.classList.add("ocultar");
})
subir_pc_btn.addEventListener("click",()=>{
    subir_pc_input.classList.remove("ocultar");
    subir_url_input.classList.add("ocultar");
})

/* Si la imagen es por URL*/
const main_img = document.getElementById("main-img"); /* cajita DIV donde va a ir la img como background*/

function formatearImg(){
    main_img.style.backgroundSize = `cover` ; /* cover/contain/100%/auto 100%/*/
    main_img.style.backgroundRepeat= `no-repeat`;
    main_img.style.backgroundPosition= `center center`;
}

subir_url_input.addEventListener("input",(e)=>{
    main_img.style.backgroundImage = `url("${e.target.value}")`;
    formatearImg();
})

/* Si la imagen es por PC*/
const input_file = document.getElementById("input-file");
input_file.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        main_img.style.backgroundImage = `url("${e.target.result}")`;
        formatearImg();
      };
      reader.readAsDataURL(file);
    }
  });
  
// Funciona el ENTER en input-file
document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter' ) {
        if(event.target.htmlFor === "input-file"){
            input_file.click();
        }
    }
});
    

/* ======================== Seleccionar color de FONDO img,  y BLEND MODE (se aplica al background) ======================== */
const input_color = document.getElementById("input-color"); //input que selecciona color
const modo_mezcla = document.getElementById("modo-mezcla"); 

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
    /* Valor inicial de cada uno.*/
    /*         bri, opa  const,Desen, gris sep, HUE, sat, inv  */
    filtrarImg(  1,   1,   100,    0,    0,  0, 0  , 100,   0);
})

function obtenerValorFiltros(){
    filtrarImg( brillo.value,     opacidad.value, contraste.value,
                desenfoque.value, grises.value,   sepia.value, 
                hueR.value,      saturacion.value, invertido.value);
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
    mostarValorFiltros()
}

/* Las funciones de filtros grayscale(), sepia(), saturate(), opacity(), 
brightness(), contrast() e invert() toman un PORCENTAJE ó NÚMERO un  como valor, esto 
ocurre porque es posible proporcionporquear dicho valor de dos formas diferentes:
* Porcentaje: Como valor porcentual: 0%, 50%, 100%, 150%...
* Número: Como valor numérico: 0, 0.5, 1, 1.5...
Así pues, indicar filter: contrast(0.5) es lo mismo que: contrast(50%). */

/* Mostrar valor de los filtros */
function mostarValorFiltros(){
    const label_bri = document.querySelector('label[for="brillo"]'); 
    const label_opa = document.querySelector('label[for="opacidad"]'); 
    const label_con = document.querySelector('label[for="contraste"]'); 
    const label_des = document.querySelector('label[for="desenfoque"]'); 
    const label_gri = document.querySelector('label[for="grises"]'); 
    const label_sep = document.querySelector('label[for="sepia"]'); 
    const label_hue = document.querySelector('label[for="hue"]'); 
    const label_sat = document.querySelector('label[for="saturacion"]'); 
    const label_inv = document.querySelector('label[for="invertido"]');

    label_bri.innerHTML = `BRILLO [${brillo.value * 100}%]`;
    label_opa.innerHTML = `OPACIDAD [${opacidad.value * 100}%]`;
    label_con.innerHTML = `CONTRASTE [${contraste.value}%]`;
    label_des.innerHTML = `DESENFOQUE [${desenfoque.value}px]`;
    label_gri.innerHTML = `ESCALA DE GRISES [${grises.value}%]`;
    label_sep.innerHTML = `SEPIA [${sepia.value}%]`;
    label_hue.innerHTML = `ROTACIÓN DE COLOR [${hueR.value}deg]`;
    label_sat.innerHTML = `SATURACIÓN [${saturacion.value}%]`;
    label_inv.innerHTML = `INVERTIDO [${invertido.value * 100}%]`;
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
sin_txt_sup.addEventListener('click', () => {
    main_txt_superior.classList.toggle("ocultar");
});

const sin_txt_inf = document.getElementById("sin-txt-inf");
sin_txt_inf.addEventListener('click', () =>{
    main_txt_inferior.classList.toggle("ocultar");
});

/* ======================== Fuente - Tamaño - Alineación ======================== */
const selecionar_fuentes = document.getElementById("selecionar-fuentes");
function cargarFuentes(){
    var fuentes = "";
/*     let array=[ "Arial","Arial Black", "Bradley Hand", "Brush Script MT",
        "Cambria", "Comic Sans MS", "Courier",
        "Didot", "Garamond", "Georgia", "Helvetica", 
        "Impact", "Lucida Console", "Luminari",
        "Tahoma", "Times New Roman",
        "Trebuchet MS", "Verdana" ,
        "Oswald", "Lemon","Pattaya"    
    ];  */

    let array = [
        { "familia": "'Alegreya', serif",          "fuente":"Alegreya" },
        { "familia": "'Amaranth', sans-serif",     "fuente":"Amaranth" },
        { "familia": "'Dosis', sans-serif",        "fuente":"Dosis" },
        { "familia": "'Instrument Serif', serif",  "fuente":"Instrument Serif" },
        { "familia": "'Langar', system-ui",        "fuente":"Langar" },
        { "familia": "'Lemon', serif",             "fuente":"Lemon" },
        { "familia": "'Luckiest Guy', sans-serif", "fuente":"Luckiest Guya" },
        { "familia": "'Pattaya', sans-serif",      "fuente":"Pattaya" },
        { "familia": "'Permanent Marker', cursive","fuente":"Permanent Marker" },
        { "familia": "'Twinkle Star', cursive",    "fuente":"Twinkle Star" }
    ] ;    

    for (var i = 0; i < array.length; i++) {
        /* fuentes += `<option value="`+array[i]+ `">`+ array[i]+`</option>`; */
        fuentes += `<option value="`+array[i].familia+ `">`+ array[i].fuente+`</option>`;
    }
    selecionar_fuentes.innerHTML = fuentes;   
}

selecionar_fuentes.addEventListener("input", ()=>{  /*estaba change y no tomaba*/
    main_txt_superior.style.fontFamily = selecionar_fuentes.value;
    main_txt_inferior.style.fontFamily = selecionar_fuentes.value;
})

const tamanio_txt_meme = document.getElementById("tamanio-txt-meme");
tamanio_txt_meme.addEventListener("input", ()=>{
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


/* ======================== Color de la fuente, color de fondo, y fondo transparente ======================== */
const input_color_txt = document.getElementById("input-color-txt");
const input_color_fon = document.getElementById("input-color-fon");
const fondo_transparente = document.getElementById("fondo-transparente");

input_color_txt.addEventListener("input", ()=>{
    main_txt_superior.style.color = `${input_color_txt.value}`;
    main_txt_inferior.style.color = `${input_color_txt.value}`;
})

input_color_fon.addEventListener("input", ()=>{
    if(fondo_transparente.checked) {
        main_txt_superior.style.backgroundColor = `transparent`;
        main_txt_inferior.style.backgroundColor = `transparent`;
    } else {
        main_txt_superior.style.backgroundColor = `${input_color_fon.value}`;
        main_txt_inferior.style.backgroundColor = `${input_color_fon.value}`;
    }
})

fondo_transparente.addEventListener('click', ()=> {
    if(fondo_transparente.checked) {
        main_txt_superior.style.backgroundColor = `transparent`;
        main_txt_inferior.style.backgroundColor = `transparent`;

        main_txt_superior.style.position = `absolute`;
        main_txt_inferior.style.position = `absolute`;
    } else {
        main_txt_superior.style.backgroundColor = `${input_color_fon.value}`;
        main_txt_inferior.style.backgroundColor = `${input_color_fon.value}`;

        main_txt_superior.style.position = `static`;
        main_txt_inferior.style.position = `static`;
    }
});


/* ======================== Contorno de la fuente ======================== */
const btn_contorno_ninguno = document.getElementById("btn-contorno-ninguno");
const btn_contorno_claro = document.getElementById("btn-contorno-claro");
const btn_contorno_oscuro = document.getElementById("btn-contorno-oscuro");

btn_contorno_ninguno.addEventListener("click", ()=>{
    main_txt_superior.style.textShadow = `none`;
    main_txt_inferior.style.textShadow = `none`;
});

btn_contorno_claro.addEventListener("click", ()=>{
    /* desplazamiento hor (X-offset), el desplazamiento vert (Y-offset), el desenfoque (blur) y el color (color*/
    main_txt_superior.style.textShadow = `2px  0px 0px white, 
                                         -2px  0px 0px white,
                                          0px  2px 0px white,
                                          0px -2px 0px white`;
    main_txt_inferior.style.textShadow = `2px  0px 0px white, 
                                          -2px  0px 0px white,
                                           0px  2px 0px white,
                                           0px -2px 0px white`;
});

btn_contorno_oscuro.addEventListener("click", ()=>{
    /* desplazamiento hor (X-offset), el desplazamiento vert (Y-offset), el desenfoque (blur) y el color (color*/
    main_txt_superior.style.textShadow = `2px  0px 0px black, 
                                         -2px  0px 0px black,
                                          0px  2px 0px black,
                                          0px -2px 0px black`;
    main_txt_inferior.style.textShadow = `2px  0px 0px black, 
                                          -2px  0px 0px black,
                                           0px  2px 0px black,
                                           0px -2px 0px black`;                                      
});


/* ======================== Espaciado e Interlineado ======================== */
const espaciado_txt_meme = document.getElementById("espaciado-txt-meme");
const interlineado_txt_meme = document.getElementById("interlineado-txt-meme");

espaciado_txt_meme.addEventListener("input", () => {
    main_txt_superior.style.padding = `${espaciado_txt_meme.value}px 20px`;
    main_txt_inferior.style.padding = `${espaciado_txt_meme.value}px 20px`;
});
  
interlineado_txt_meme.addEventListener("change", () => {
    main_txt_superior.style.lineHeight = `${interlineado_txt_meme.value}`;
    main_txt_inferior.style.lineHeight = `${interlineado_txt_meme.value}`;
});
  

/* ================================================================================================*/
/* ------------ BOTON descargar MEME como IMG ---------------- */
const div_img_txt = document.getElementById("main-img-txt");
const  btn_descargar_meme = document.getElementById("btn-descargar-meme");
btn_descargar_meme.addEventListener("click", () => {
    domtoimage.toBlob(div_img_txt).then((blob) => {
      window.saveAs(blob, "meme.png");
    });
  });
  

/* ================================================================================================*/

function funcionesAEjecutar(){
    mostrarPanelImagen1300(); /* El Panel de IMG debe ser VISIBLE, si la ventana está a mas de 1300px*/
    dispositivoMovil();       /* Carga la pg, y es un celu? */
    cargarFuentes();          /* Para el panel de TXT */
    //altoContenedorPpal();     /*Calcula el alto del contenedor-ppal, según el alto de la Ventaga Gráfica*/
    mostarValorFiltros();
}

/* Cuando se termina de cargar la página  */
window.onload  =  funcionesAEjecutar; 