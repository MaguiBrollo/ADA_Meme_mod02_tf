<!-- ===========================================================
                            PRESENTACIÓN 
     =========================================================== -->

<p align="center">
   <img src="img/encabezado readme.png" width="900px" alt-text="Título: Generador de Memes">
</p>

***

<div align="center">

[![generador de memes - link](https://img.shields.io/static/v1?label=generador+de+memes&message=link&color=yellow&logo=EA4335&logoColor=yellow)](https://maguibrollo.github.io/ADA_Meme_mod02_tf/ "Visita la App: Generador de Memes")
[![GitHub tag](https://img.shields.io/github/tag/MaguiBrollo/ADA_Meme_mod02_tf?include_prereleases=&sort=semver&color=yellow)](https://github.com/MaguiBrollo/ADA_Meme_mod02_tf/releases/ "Versión")

</div>


***

 ## Tabla de Contenidos:
 
- [Generador de Memes](#generador-de-memes)
- [Tecnologías](#tecnologías)
- [Construcción](#construcción)
- [Secciones y Paneles](#secciones-y-paneles)
- [Mobile](#mobile)
- [Contáctame](#contáctame)

---
<br>

<!-- ==================================================
                         CONTENIDO 
     ================================================== -->

## *Generador de Memes*

[:top:](#tabla-de-contenidos) <br>

> Las aplicaciones web, comúnmente conocidas como apps, se han convertido en una parte esencial de nuestra vida cotidiana. Desde simplificar tareas diarias hasta ofrecer entretenimiento. <br>
El `Generador de Memes` es una app web, que permite que cualquier usuario pueda plasmar toda su creatividad al diseñar sus propios memes.<br>
El Generador de Memes permite añadir imágenes propias o de la web, para crear memes personalizados, editando el texto elegido además de aplicar diferentes filtros. Por último, permite guardar el meme creado y compartirlo con los amigos.

<p align="center" >
   <img src="img/pantalla_ppal.png" width="600px" alt-text="Presentación">
</p>

El `Generador de Memes`, fue diseñado de tal manera que puede ser utilizado en diferentes dispositivos, lo que implica un correcto diseño responsive. 

<p align="center" >
   <img src="img/aTodos.png" width="600px" alt-text="Presentación">
</p>

<br>

Fue desarrollado como Trabajo Final del "Módulo 2 - JavaScript", de la capacitación de `"Desarrollo Frontend"` dictado por [ADA ITW](https://www.linkedin.com/school/ada-itw/), y se encuentra incluido en mi `Portfolio Personal`, de tal manera de reflejar el grado de avance, apropiación y uso de los conocimiento adquiridos y asimilados durante la capacitación.

> [!NOTE]
> Visite mi portafolio personal: [PORTFOLIO](https://maguibrollo.github.io/ADA_Portafolio_mod01_tf/).


<br>

## *Tecnologías*
[:top:](#tabla-de-contenidos) <br>
EL Generador de Memes fue desarrollado utilizando las siguientes tecnologías:  

|  ![HTML5](https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5) |   ![CSS](https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6) |  ![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)|  
| :---: | :---: | :---: |
|Lenguaje de marcado de hipertexto. Consiste en marcas basado en etiquetas que otorgan la estructura básica de la app.| Hojas de estilo en cascada. Son las declaraciones que otorgan estilos visuales al HTML.  | Lenguaje de programación. Otorga interactividad a las distintas secciones que conforman la app.|


<br>

## *Construcción*
[:top:](#tabla-de-contenidos) <br>
El Generador de Memes, presenta una pantalla principal que contiene tres botones que permiten abrir el panel de edición de `Imagen`, abrir el panel de edición de `Texto`, e intercambiar entre `Modo claro` y `Modo Oscuro`.<br>
<br>
<p align="center" >
   <img src="img/memeApp.png" width="600px" alt-text="Presentación">
</p>

Luego de realizar todos los ajustes deseados es posible descargar el meme generado, mediante en botón `Descargar Meme`.
<br>

<p align="center" >
   <img src="img/meme.png" width="250px" alt-text="Presentación">
</p>

<br>

---


## *Secciones y Paneles*
[:top:](#tabla-de-contenidos) <br>

- [Principal](#sección-principal)
- [Imagen](#panel-de-imagen)
- [Texto](#panel-de-texto)


#### Sección Principal
[:top:](#secciones-y-paneles) <br>
Al abrir la app, si el tamaño de la pantalla del dispositivo utilizado, es superior a 1300px, se verá el [Panel de Imagen](#panel-de-imagen), de lo contrario se podrá activar dicho panel, o el [Panel de Texto](#panel-de-texto), mediante el botón correspondiente. <br>
La visualización se realiza por defecto en Modo Oscuro, pudiendo ser cambiada con el botón correspondiente.

|MODO OSCURO| MODO CLARO|
| :---: | :---: |
|<img src="img/modo_oscuro.png" width="400px" alt-text="Panel de Imagen">| <img src="img/modo_claro.png" width="400px" alt-text="Panel de Imagen">|

El botón `Descargar Meme`, permitirá descargar, al dispositivo utilizado, el meme en formato *.PNG.

<br>

---

#### Panel de Imagen
[:top:](#secciones-y-paneles)

<p align="center" >
   <img src="img/ppal_img.gif" width="400px" alt-text="Panel de Imagen">
</p>

Mediante el panel de imagen se podrá editar:
- Origen: permite seleccionar el origen de la imagen, que puede ser, por URL o buscar un archivo almacenado en el dispositivo utilizado.
-  Fondo: permite seleccionar el color de fondo, y el modo de mezcla (blend mode) para calcular el color final de la imagen teniendo en cuenta el color seleccionado.
- Filtros: permite aplicar diferentes filtros sobre la imagen, de manera individual o varios simultáneamente.


<br>

---

#### Panel de Texto
[:top:](#secciones-y-paneles)

<p align="center" >
   <img src="img/ppal_txt.gif" width="400px" alt-text="Panel de Texto">
</p>

Mediante el panel de texto se podrá editar:
- Texto superior e inferior: permite escribir una breve frase, o bien optar por no incluir frase.
- Fuente: permite seleccionar tipos de fuente, tamaño y alineación.
- Color y Fondo: hace referencia al color del texto superior e inferior, y el color del fondo del texto, como también es posible no incluir fondo.
- Contorno: permite aplicar un borde a cada letra del texto. 
- Espaciado e Interlineado: permite dejar espacio entre las letras del texto, y entre las líneas del texto, en caso de escribir más de una línea.


<br>

> [!NOTE]
> Si se minimiza el tamaño de la ventana, horizontalmente, se visualizará el botón `Cerrar`. Este botón, permite cerrar el panel que se encuentre visible.

<p align="center" >
   <img src="img/ppal_btn_cerrar.gif" width="300px" alt-text="Botón Cerrar">
</p>

<br>

> [!NOTE]
> Si se minimiza el tamaño de la ventana, horizontalmente, el panel seleccionado se visualizará debajo de la sección principal, y aparecerán las flechas de desplazamiento `Arriba` y `Abajo`.

<p align="center" >
   <img src="img/flechas.gif" width="300px" alt-text="Botón Ir hacia Arriba y Botón de Ir hacia Abajo">
</p>

<br>

---

## *Mobile:*
[:top:](#tabla-de-contenidos) <br>
Todas las opciones de edición explicadas anteriormente, se encuentran disponibles para dispositivos móviles:


|Modo Oscuro| Modo Claro|
|:---:|:---:|
|<img src="img/p1_oscuro.jpg" width="200px">|<img src="img/p2_claro.jpg" width="200px" >|

<br>

|Panel de Imagen| Panel de Texto|
|:---:|:---:|
|<img src="img/p4_img.jpg" width="200px">|<img src="img/p5_txt.jpg" width="200px" >|

<br>

|Flechas Up/Down | Edición|
|:---:|:---:|
|<img src="img/p3_flechas.jpg" width="200px">|<img src="img/p6_meme.jpg" width="200px" >|

<br>

|Pantalla Horizontal| 
|:---:|
|<img src="img/p7_hor1.jpg" width="420px">|


| Edición Horizontal|
|:---:|
|<img src="img/p7_hor2.jpg" width="420px">|

<br>

---

## *Contáctame:*
[:top:](#tabla-de-contenidos) <br>

<a href="https://www.linkedin.com/in/magui-brollo/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Magdalena%20Brollo-blue?style=flat-square&logo=linkedin"></a>
<a href="mailto:maguieb@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Gmail-maguieb@gmail.com-blue?style=flat-square&logo=gmail"></a>
<a href="https://discord.gg/v7cZYHDz"><img alt="Discord" src="https://img.shields.io/badge/Discord-Magui-blue?style=flat-square&logo=discord"></a> 


---
![Profile Views](https://komarev.com/ghpvc/?username=MaguiBrollo&color=yellow "Visitas")