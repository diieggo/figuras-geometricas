// FORMULAS

// Perimetro
// Cuadrado: lado * 4
// Triandulo: lado + lado + lado
// Circulo: 2π * r

// Area
// Cuadrado: lado * lado
// Triangulo: (base * altura) / 2
// Circulo: π * (r * r)

// Const
const Pi = Math.PI;

// Cuadrado
function calcCuadrado() {
    let resultPerimetro = document.querySelector(".resultPer");
    let resultArea = document.querySelector(".resultArea");
    var cuadradoLado = Number(document.querySelector("#lado-cuadrado").value);

    // Calc
    var cuadradoPerimetro = cuadradoLado * 4;
    var cuadradoArea = cuadradoLado * cuadradoLado;

    resultPerimetro.innerHTML = "Perimetro: " + cuadradoPerimetro + "cm";
    resultArea.innerHTML = "Área: " + cuadradoArea + "cm²";
}

// Circulo
function calcCirculo() {
    let resultPerimetro = document.querySelector(".resultPer-circulo");
    let resultArea = document.querySelector(".resultArea-circulo");
    var circuloRadio = Number(document.querySelector("#radio-circulo").value);

    // Calc
    var circuloPerimetro = (Pi * 2) * circuloRadio;
    var circuloArea = (circuloRadio * circuloRadio) / Pi;

    resultPerimetro.innerHTML = "Perimetro: " + circuloPerimetro.toFixed(1) + "cm";
    resultArea.innerHTML = "Área: " + circuloArea.toFixed(1) + "cm²";
}

// Triangulo
function calcTrianguloAlt(trianguloBase, trianguloLado) {
    var trianguloCateto = trianguloBase / 2;
    var trianguloAltura = (trianguloLado * trianguloLado) - (trianguloCateto * trianguloCateto);
    trianguloAltura = Math.sqrt(trianguloAltura);
    return trianguloAltura.toFixed(1);
}

function calcTrianguloEqui() {
    let resultPerimetro = document.querySelector(".resultPer-triangulo");
    let resultArea = document.querySelector(".resultArea-triangulo");
    let resultAlt = document.querySelector(".resultAlt-triangulo");
    var trianguloLado = Number(document.querySelector("#lado-triangulo").value);

    // Calc
    var trianguloAltura = calcTrianguloAlt(trianguloLado, trianguloLado);
    var trianguloPerimetro = trianguloLado * 3;
    var trianguloArea = ((trianguloLado * trianguloAltura) / 2).toFixed(1);

    resultAlt.innerHTML = "Altura: " + trianguloAltura + "cm";
    resultPerimetro.innerHTML = "Perimetro: " + trianguloPerimetro + "cm";
    resultArea.innerHTML = "Área: " + trianguloArea + "cm²";
}

function calcTrianguloIso() {
    let resultPerimetro = document.querySelector(".resultPer-trianguloIso");
    let resultArea = document.querySelector(".resultArea-trianguloIso");
    let resultAlt = document.querySelector(".resultAlt-trianguloIso");
    let status = document.querySelector("#status")
    var trianguloLado1 = Number(document.querySelector("#lados-triangulo").value);
    var trianguloBase = Number(document.querySelector("#base-triangulo").value);

    function calcTrianguloIsoAlt(trianguloBase, trianguloLado) {
        var trianguloIsoAltura = (trianguloLado * trianguloLado) - ((trianguloBase * trianguloBase) / 4);
        trianguloIsoAltura = Math.sqrt(trianguloIsoAltura);
        return trianguloIsoAltura;
    }

    if (trianguloLado1 == trianguloBase) {
        status.innerHTML = "No es un triangulo isosceles";
    } else {
        // Calc
        let trianguloIsoAltura = (calcTrianguloIsoAlt(trianguloBase, trianguloLado1)).toFixed(1);
        let trianguloPerimetro = (trianguloLado1 * 2) + trianguloBase;
        let trianguloArea = ((trianguloBase * trianguloIsoAltura) / 2).toFixed(1);

        if (trianguloIsoAltura == null) {
            status.innerHTML = "Es un triangulo imposible";
        } else {
            resultAlt.innerHTML = "Altura: " + trianguloIsoAltura + "cm";
            resultPerimetro.innerHTML = "Perimetro: " + trianguloPerimetro + "cm";
            resultArea.innerHTML = "Área: " + trianguloArea + "cm²";
        }
    }
}