
document.getElementById("datos_personales_ancla").addEventListener("click", function(){
    document.getElementById("datos_personales").style.display = "inline"
    document.getElementById("estudios_cursados").style.display = "none"
    document.getElementById("experiencia_laboral").style.display = "none"
    document.getElementById("parrafo_presenación").style.display ="none"
    document.getElementById("logo_persona").style.display = "inline"
    document.getElementById("logo_estudios").style.display = "none"
    document.getElementById("logo_trabajo").style.display = "none"
});

document.getElementById("estudios_cursados_ancla").addEventListener("click", function(){
    document.getElementById("estudios_cursados").style.display = "inline"
    document.getElementById("datos_personales").style.display = "none"
    document.getElementById("experiencia_laboral").style.display = "none"
    document.getElementById("parrafo_presenación").style.display ="none"
    document.getElementById("logo_estudios").style.display = "inline"
    document.getElementById("logo_persona").style.display = "none"
    document.getElementById("logo_trabajo").style.display = "none"
});

document.getElementById("experiencia_laboral_ancla").addEventListener("click", function(){
    document.getElementById("experiencia_laboral").style.display = "inline"
    document.getElementById("datos_personales").style.display = "none"
    document.getElementById("estudios_cursados").style.display = "none"
    document.getElementById("parrafo_presenación").style.display ="none"
    document.getElementById("logo_trabajo").style.display = "inline"
    document.getElementById("logo_estudios").style.display = "none"
    document.getElementById("logo_persona").style.display = "none"
});
