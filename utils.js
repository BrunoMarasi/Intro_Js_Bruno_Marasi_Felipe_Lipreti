//1//
function calcularEdad(fechaIngresada) {
    const hoy = new Date();
    const fecha = new Date(fechaIngresada);
    let años = hoy.getFullYear() - fecha.getFullYear();
    const mes = fecha.getMonth();

    if (mes > hoy.getMonth() || (mes === hoy.getMonth() && fecha.getDate() > hoy.getDate())) {
        años--;
    }
    return años;
}

//2//
function Buscarfrutas(frutaBuscada){
    const frutas = ['papaya', 'anana', 'mango', 'coco', 'banana', 'palta', 'guayaba', 'sandia', 'patilla', 'frutilla', 'mandarina']
    const existe = frutas.includes(frutaBuscada);
    return existe;
}

//5//
function duplicarArray(numeros) {

    let numerosDuplicados = numeros.map(function(elemento) {return elemento * 2});

    return numerosDuplicados;

}

//7//
function contieneA(nombres) {
    const contieneA = nombres.filter(nombre => nombre.includes('a'))
    return contieneA;
}

//8//
function ingresarCadena(){
    const cadenaTexto = prompt("Ingrese una cadena de texto");
    return cadenaTexto;
}
function ingresePalabraAReemplazar(){
    const palabraAReemplazar = prompt("Ingrese la palabra a reemplazar");
    return palabraAReemplazar;
}
function ingresePalabraReemplazo(){
    const palabraReemplazo = prompt("Ingrese la palabra a usar como reemplazo");
    return palabraReemplazo;
}

//9//
function ingresarCadenaConNumero(){
    const cadenaTexto = prompt("Ingrese una cadena de texto con un numero al final");
    return cadenaTexto;
}

function ingresarCadena(comiezaCon){
    const cadenaIngresada = prompt("Ingrese una nueva cadena sabiendo que comienza con " + comiezaCon);
    const cadenaNueva = comiezaCon.concat(cadenaIngresada);
    return cadenaNueva;
}

//10//

function ingreseArray(){
    const array = prompt("Ingrese un array de nombres: [jose, lolo..]");
    return array;
}

