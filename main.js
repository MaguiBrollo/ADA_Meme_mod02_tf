/* ------------------- CLARO - OSCURO ----------------------------------  */
const btn_oscuro = document.getElementById("nav-btn-claroOscuro");

btn_oscuro.addEventListener("click", cambiar_color);

function cambiar_color(){
    if(btn_oscuro.textContent.trim() === "Modo Claro"){
        document.documentElement.setAttribute("data-theme-color","light");
        btn_oscuro.innerHTML= `<i class="fa fa-moon-o" aria-hidden="true"></i> </i> Modo Oscuro`;
    }
    else{
       document.documentElement.setAttribute("data-theme-color","dark"); 
       btn_oscuro.innerHTML= `<i class="fa fa-sun-o"></i> Modo Claro`;
    }
}



/* -------------- TAMAÑO DE LA CAJITA DEL MEME (img y txt)-------------------  */
const cajita_del_meme = document.querySelector(".main-img-txt"); 
const cajita_txt_sup = document.querySelector("#main-txt-superior");
const cajita_txt_inf = document.querySelector("#main-txt-inferior"); 

window.visualViewport.addEventListener("resize", ()=>{      
    if(window.visualViewport.width <640){
        const tm_ancho = window.visualViewport.width - 40;
        const tm_txt = Math.round((window.innerWidth / 10) * 0.5 );

        cajita_del_meme.style.height = `${window.visualViewport.width}px`;
        cajita_del_meme.style.width  = `${tm_ancho}px`;

       cajita_txt_sup.style.fontSize =  `${tm_txt}px`;
       cajita_txt_inf.style.fontSize =  `${tm_txt}px`;
    }else{
        cajita_del_meme.style.height = `600px`;
        cajita_del_meme.style.width  = `600px`;

        cajita_txt_sup.style.fontSize =  `60px`;
        cajita_txt_inf.style.fontSize =  `60px`;
    }
})
