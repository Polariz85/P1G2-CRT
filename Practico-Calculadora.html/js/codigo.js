
// Dar un nuevo valor al INPUT "resultado" en la pag HTML
function darValor(valor){
    document.getElementById("resultado").value = valor
}

// Obtener el valor actual del INPUT "resultado" en la pag HTML
function obtenerValor(){
   var nro = document.getElementById("resultado").value
   return nro
   //alert(nro)
}

// Adjuntar un nuevo valor a la derecha 
// del INPUT "resultado" en la pag HTML
function adjuntarValor(numero){
    var actualNumero = obtenerValor()
    darValor(actualNumero + numero)
}



function BorrarTodo() {
    var vacio = ""
    darValor(vacio)
}


function Factorial() {
    var numero = obtenerValor()
    var i = 1
    var resultado = 1
    while (i <= numero) {
        resultado = resultado * i
        i = i + 1
    }
    darValor(resultado)
}

var nroA = 0
var operacion = "0"
function Multiplicar(){
    nroA = obtenerValor()
    operacion = "x"
    BorrarTodo()
}

function Igual(){
    var nroB = obtenerValor()
    if(operacion == "x"){
        var resultado = nroA * nroB
        darValor(resultado)
    }
}








function AsignarResultado(valor) {
    var actualValor = document.getElementById("resultado").value
    document.getElementById("resultado").value = actualValor + valor;
  }