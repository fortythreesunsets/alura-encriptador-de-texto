window.onload = function () {
    document.getElementById("texto_ingresado").value = "";
};

// Para encriptar
const vocal_a = "ai";
const vocal_e = "enter";
const vocal_i = "imes";
const vocal_o = "ober";
const vocal_u = "ufat";

// Para desencriptar
const regexp_a = /ai/g;
const regexp_e = /enter/g;
const regexp_i = /imes/g;
const regexp_o = /ober/g;
const regexp_u = /ufat/g;

// Botones
const boton_encriptar = document.querySelector("#btn_encriptar");
const boton_desencriptar = document.querySelector("#btn_desencriptar");
const boton_copiar = document.querySelector("#btn_copiar");
const boton_reiniciar = document.querySelector("#btn_reiniciar");

function normalizarTexto(texto) {
    let texto_normalizado = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    return texto_normalizado;
}

function acomodarEnDispositivos() {
    // screen.orientation.lock('landscape');
    // var media_query_dispositivos_g = window.matchMedia("(max-width: 1080px)");
    var media_query_dispositivos_m = window.matchMedia("(max-width: 800px)");
    var media_query_dispositivos_ch = window.matchMedia("(max-width: 720px)");
    
    if (media_query_dispositivos_m.matches) {
        document.querySelector(".texto").style.height = "380px";
        document.querySelector(".mensaje").style.top = "37rem";
        document.querySelector(".mensaje").style.height = "480px";
        document.querySelector(".mensaje_procesado").style.height = "480px";
        document.querySelector("#resultado").style.height = "400px";
        document.querySelector(".botones").style.top = "31rem";
        document.querySelector("footer").style.margin = "39rem 0 0 0";
    }

    if (media_query_dispositivos_ch.matches) {
        document.querySelector(".texto").style.height = "360px";
        document.querySelector(".mensaje").style.top = "40rem";
        document.querySelector(".mensaje").style.height = "540px";
        document.querySelector(".mensaje_procesado").style.height = "540px";
        document.querySelector("#btn_copiar").style.margin= "0";
        document.querySelector("#resultado").style.height = "400px";
        document.querySelector("footer").style.margin = "527px 0";
        document.querySelector("footer").style.margin = "43rem 0 0 0";
    }
}

function cambiarEstilos(resultado) {
        document.querySelector(".contenedor_ayuda").style.visibility = "hidden";
        document.querySelector(".mensaje_procesado").style.visibility = "visible";
        document.getElementById("resultado").innerHTML = resultado;
        boton_copiar.style.visibility = "visible";
}

function encriptar() {
    let texto_ingresado = document.getElementById("texto_ingresado").value;

    if (texto_ingresado == "") {
        alert("Escribe un mensaje para poder encriptarlo");
        boton_desencriptar.disabled = false;
    } else {
        boton_desencriptar.disabled = true;
        let texto_normalizado = normalizarTexto(texto_ingresado);
        let texto_e = texto_normalizado.replaceAll("e", vocal_e);
        let texto_i = texto_e.replaceAll("i", vocal_i);
        let texto_a = texto_i.replaceAll("a", vocal_a);
        let texto_o = texto_a.replaceAll("o", vocal_o);
        let texto_u = texto_o.replaceAll("u", vocal_u);

        cambiarEstilos(texto_u);
        acomodarEnDispositivos();
    }
}

function desencriptar() {
    let texto_ingresado = document.getElementById("texto_ingresado").value;

    if (texto_ingresado == "") {
        alert("Escribe un mensaje para poder desencriptarlo");
        boton_encriptar.disabled = false;
    } else {
        boton_encriptar.disabled = true;
        let texto_normalizado = normalizarTexto(texto_ingresado);
        let texto_enc_e = texto_normalizado.replaceAll(regexp_e, "e");
        let texto_enc_i = texto_enc_e.replaceAll(regexp_i, "i");
        let texto_enc_a = texto_enc_i.replaceAll(regexp_a, "a");
        let texto_enc_o = texto_enc_a.replaceAll(regexp_o, "o");
        let texto_enc_u = texto_enc_o.replaceAll(regexp_u, "u");

        cambiarEstilos(texto_enc_u);

        acomodarEnDispositivos();
    }
}

function tooltip() {
    document.querySelector(".tooltip").style.visibility = "visible";
    setTimeout(function () {
        document.querySelector(".tooltip").style.visibility = "hidden";
    }, 2000);
}

function copiar() {
    boton_desencriptar.disabled = false;
    boton_encriptar.disabled = false;
    boton_reiniciar.style.visibility = "visible";

    let copiar_texto = document.getElementById("resultado").innerHTML;

    navigator.clipboard.writeText(copiar_texto)
    .then(() => {
        setTimeout(tooltip, 10);
    })
    .catch(() => {
        alert("No se copió el texto");
    });

    document.getElementById("texto_ingresado").value = "";
}

function reiniciar() {
    window.location.reload(); 
}

boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;
boton_copiar.onclick = copiar;
boton_reiniciar.onclick = reiniciar;

