// foreach

let arreglo= [4,6,8,3,4,6];

arreglo.forEach( (valor) =>{
    console.log(valor)
}    
)

// map
function calcularCuadrado(valor){
    //Aquí va toda la magia
    return valor ** 2;

};

let cuadrados = arreglo.map(calcularCuadrado);

//Imprimir cuadrado

console.log(arreglo);
cuadrados.forEach((valor, indice)=>{    
    console.log(valor);
});

// Filter
function mayor50(valor){
    return valor>50;
}

let mayores50 = cuadrados.filter(mayor50);
console.log(mayores50);

//Slice

let parte = arreglo.slice(2,4)
console.log(arreglo)
console.info(parte)