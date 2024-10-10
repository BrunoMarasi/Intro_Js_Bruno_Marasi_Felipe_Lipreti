//1//
function ejercicio1() {
    let fechaIngresada = new Date();
    fechaIngresada = prompt("Ingresa su fecha de nacimiento (YYYY-MM-DD)");
    const nombre = prompt("Ingrese su nombre");
    const años = calcularEdad(fechaIngresada);

    document.getElementById('resultado').innerText = "Su nombre es: " + nombre + " y tiene " + años + " años de edad";
}

//2//
function ejercicio2() {
    const frutas = ['papaya', 'anana', 'mango', 'coco', 'banana', 'palta', 'guayaba', 'sandia', 'patilla', 'frutilla', 'mandarina']

    document.getElementById('lista-frutas').innerHTML = frutas;

    const frutaBuscada = prompt("Ingrese la fruta que deseea buscar en el array").toLowerCase();
    const existe = Buscarfrutas(frutaBuscada);

    document.getElementById('resultado').innerText = existe ? "Sí, tenemos " + frutaBuscada : "No, no tenemos " + frutaBuscada;
}

//3//
function ejercicio3() {

    //A//
    const resultadoA = 10 == '10';
    document.getElementById('resultadoA').innerText = resultadoA;

    //B//
    const resultadoB = 10 === '10';
    document.getElementById('resultadoB').innerText = resultadoB;

    //C//
    const resultadoC = typeof 10.6;
    document.getElementById('resultadoC').innerText = resultadoC;

    //D//
    const resultadoD = true == 1;
    document.getElementById('resultadoD').innerText = resultadoD;
}

//4//
function ejercicio4(){
    const ciudad = {
        nombre: "Buenos Aires",
        fechaFundacion: '1900-10-12',
        poblacion: 48000000,
        extension: 18000000
    }

    let mostrar = '';
    for(const propiedad in ciudad) {
        mostrar += 'CLAVE: ' + propiedad + ' : ' + 'VALOR: ' + ciudad[propiedad] + ' --- '
    }

    document.getElementById('resultado').innerHTML = mostrar;
}

//5//
function ejercicio5(){
    const numerosIngresados = prompt("Ingrese un array de numeros");
    let numeros = numerosIngresados.split(',').map(Number);

    let numerosDuplicados = duplicarArray(numeros);

    document.getElementById("numeros-duplicados").innerHTML = numerosDuplicados;
}
//6//
function ejercicio6(){

    let mostrarA = '';
    for (let i=0; i < 6; i++) {
        mostrarA += ('*'.repeat(i) + '<br>');
    }

    let mostrarB= '';
    for (let i=1; i < 5; i++) {
        let espaciosIzquierda = "-".repeat(5 - i);
        let estrellas = "*".repeat(i * 2 - 1);
        let espaciosDerecha = "-".repeat(5 - i); 

        mostrarB += (espaciosIzquierda + estrellas + espaciosDerecha + '<br>')
    }

    document.getElementById('resultado').innerHTML = mostrarA + mostrarB;

}
//7//
function ejercicio7(){
    let nombresIngresados = prompt("Ingrese nombres separados por comas").toLowerCase();
    const nombres = nombresIngresados.split(',');

    const contienenA = contieneA(nombres);

    document.getElementById('resultado').innerHTML = contienenA;

}
//8//
function ejercicio8(){
    const cadenaTexto = ingresarCadena();
    const palabraAReemplazar = ingresePalabraAReemplazar();
    const palabraReemplazo = ingresePalabraReemplazo();

    const cadenaTextoReemplazada = cadenaTexto.replace(palabraAReemplazar, palabraReemplazo);

    document.getElementById('resultado').innerHTML = cadenaTextoReemplazada;
}

//9//
function ejercicio9(){
    const cadenaTexto = ingresarCadenaConNumero();
    let numeroDeCadena = [];

    for (let i = 0; i < cadenaTexto.length; i++){
        if (!isNaN(cadenaTexto[i]) && cadenaTexto[i] !== ' '){
            numeroDeCadena.push(cadenaTexto[i]);
        }
    }

    const comiezaCon = cadenaTexto.slice(0, numeroDeCadena)
    const cadenaNueva = ingresarCadena(comiezaCon);

    document.getElementById('resultado').innerHTML = cadenaNueva;
}

//10//
function ejercicio10() {
    let array = ingreseArray();
    array = array.split(',').map(arrays => arrays.trim());
    const arraySeparado = array.join(' - ');

    document.getElementById('resultado').innerHTML = arraySeparado;

}

//11//
function ejercicio11() {
    const pedidos = prompt("Ingrese los pedidos en formato 'nombre:total', separados por coma:");
    if (pedidos) {
        const total = pedidos.split(',')
            .reduce((acc, pedido) => {
                const totalPedido = parseFloat(pedido.split(':')[1]);
                return acc + (isNaN(totalPedido) ? 0 : totalPedido);
            }, 0);

        document.getElementById('resultado').innerHTML = `Recaudación Total: $${total.toFixed(2)}`;
    }
}
