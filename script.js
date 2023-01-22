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

const boton_encriptar = document.querySelector("#btn_encriptar");
const boton_desencriptar = document.querySelector("#btn_desencriptar");
const boton_copiar = document.querySelector("#btn_copiar");

var media_query_tableta = window.matchMedia("(max-width: 800px)");
var media_query_celular = window.matchMedia("(max-width: 720px)");

function encriptar() {
    boton_desencriptar.disabled = true;
    let texto_ingresado = document.getElementById("texto_ingresado").value;
    if (texto_ingresado == "") {
    alert("Escribe un mensaje para poder encriptarlo");
    } else {
        let texto_minusculas = texto_ingresado.toLowerCase();
        let texto_e = texto_minusculas.replaceAll("e", vocal_e);
        let texto_i = texto_e.replaceAll("i", vocal_i);
        let texto_a = texto_i.replaceAll("a", vocal_a);
        let texto_o = texto_a.replaceAll("o", vocal_o);
        let texto_u = texto_o.replaceAll("u", vocal_u);

        document.querySelector(".contenedor_ayuda").style.visibility = "hidden";
        document.querySelector(".mensaje_procesado").style.visibility = "visible";
        document.getElementById("resultado").innerHTML = texto_u;

        if (media_query_tableta.matches) {
            document.querySelector(".texto").style.height = "450px";
            document.querySelector(".mensaje").style.top = "35rem";
            document.querySelector(".mensaje").style.height = "200px";
            document.querySelector(".mensaje_procesado").style.height = "280px";
            document.querySelector(".botones").style.bottom = "23rem";
            document.querySelector("footer").style.margin = "655px 0";
        }

        if (media_query_celular.matches) {
            document.querySelector(".texto").style.height = "360px";
            document.querySelector(".mensaje").style.top = "36rem";
            document.querySelector(".mensaje").style.left = "15px";
            document.querySelector(".mensaje").style.height = "540px";
            document.querySelector(".mensaje_procesado").style.height = "540px";
            document.querySelector(".botones").style.bottom = "2rem";
            document.querySelector("footer").style.margin = "527px 0";
            document.querySelector("footer").style.position = "relative";
            document.querySelector("footer").style.top = "4rem";
        }
    }
}

function desencriptar() {
    boton_encriptar.disabled = true;
    let texto_ingresado = document.getElementById("texto_ingresado").value;
    if (texto_ingresado == "") {
        alert("Escribe un mensaje para poder desencriptarlo");
    } else {
        let texto_minusculas = texto_ingresado.toLowerCase();
        let texto_enc_e = texto_minusculas.replaceAll(regexp_e, "e");
        let texto_enc_i = texto_enc_e.replaceAll(regexp_i, "i");
        let texto_enc_a = texto_enc_i.replaceAll(regexp_a, "a");
        let texto_enc_o = texto_enc_a.replaceAll(regexp_o, "o");
        let texto_enc_u = texto_enc_o.replaceAll(regexp_u, "u");

        document.querySelector(".contenedor_ayuda").style.visibility = "hidden";
        document.querySelector(".mensaje_procesado").style.visibility = "visible";
        document.getElementById("resultado").innerHTML = texto_enc_u;
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
    let copiar_texto = document.getElementById("resultado").innerHTML;
    if (media_query_tableta.matches || media_query_celular.matches) {
        copiar_texto.select();
        copiar_texto.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copiar_texto);
        setTimeout(tooltip, 10);
    } else {
        navigator.clipboard.writeText(copiar_texto);
        setTimeout(tooltip, 10);
    }
    // Limpiar textarea
    document.getElementById("texto_ingresado").value = "";
}

boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;
boton_copiar.onclick = copiar;
