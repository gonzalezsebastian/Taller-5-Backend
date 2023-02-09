
//1
function cuadrado(x){
    const elevar = (x)=>x*x;
    return x.map(elevar);
}
//2
function oddSum(x){
    const esImpar = (x) => x%2==1;
    const suma = (x,y) => x+y;
    return x.filter(esImpar).reduce(suma);
}

const estudiantes = [
    {
        "_id": "asc5sde01",
        "firstName": "Mariana",
        "lastName": "Hernandez",
        "height": 1.9,
        "courses": [
            {
            "name": "Inglés",
            "grade": 2.5
            },
            {
            "name": "Matemáticas",
            "grade": 3.6
            },
            {
            "name": "Castellano",
            "grade": 4.7
            },
            {
            "name": "Química",
            "grade": 5.0
            },
            {
            "name": "Sociales",
            "grade": 1.3
            }
        ]
    },
    {
        "_id": "asc5sde02",
        "firstName": "Juan",
        "lastName": "Perez",
        "height": 1.7,
        "courses": [
            {
            "name": "Inglés",
            "grade": 1.5
            },
            {
            "name": "Matemáticas",
            "grade": 3.6
            },
            {
            "name": "Castellano",
            "grade": 4.7
            },
            {
            "name": "Química",
            "grade": 5.0
            },
            {
            "name": "Sociales",
            "grade": 1.3
            }
        ]
    },
    {
        "_id": "asc5sde03",
        "firstName": "Pedro",
        "lastName": "Gomez",
        "height": 2.8,
        "courses": [
            {
            "name": "Inglés",
            "grade": 2.5
            },
            {
            "name": "Matemáticas",
            "grade": 3.6
            },
            {
            "name": "Castellano",
            "grade": 4.7
            },
            {
            "name": "Química",
            "grade": 5.0
            },
            {
            "name": "Sociales",
            "grade": 1.3
            }
        ]
    }
]
//3
function matriculaCondicional(estudiantes){
    const promedio = (estudiante) => {
        const suma = (x,y) => x+y;
        const promedio = (estudiante) => estudiante.grade/5;
        return estudiante.courses.map(promedio).reduce(suma);
    }
    const enRiesgo = (estudiante) => promedio(estudiante) < 3.3;
    const riesgo = estudiantes.filter(enRiesgo);
    return riesgo.map((estudiante) => (estudiante.firstName+" "+estudiante.lastName));
}
//4
function nombreCompleto(estudiante){
    return estudiante.map((estudiante) => (estudiante.firstName+" "+estudiante.lastName));
}
//5
function altura(estudiante){
    const ordenar = (estudiante1,estudiante2) => estudiante1.height - estudiante2.height;
    const porAltura = estudiante.sort(ordenar);
    return porAltura.map((estudiante) => (estudiante._id));
}
//6
function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}
//7
function promedioVector(x){
    const suma = (x,y) => x+y;
    return x.reduce(suma)/x.length;
}
//8
function palindromo(x){
    const invertir = (x) => x.split("").reverse().join("");
    return x == invertir(x);
}
//9
function invertirPalabrasFrase(x){
    const invertir = (x) => x.split("").reverse().join("");
    return x.split(" ").map(invertir).join(" ");
}
//10
function ordenarParametro(x,param){
    const ordenar = (x1,x2) => x1[param] - x2[param];
    return x.sort(ordenar);
}

console.log(cuadrado([1,2,3,4,5]));
console.log(oddSum([1,2,3,4,5]));
console.log(matriculaCondicional(estudiantes));
console.log(nombreCompleto(estudiantes));
console.log(altura(estudiantes));
console.log(factorial(4));
console.log(promedioVector([1,2,3,4,5]));
console.log(palindromo("aerea"));
console.log(invertirPalabrasFrase("anita lava la tina"));
console.log(ordenarParametro(estudiantes,"firstName"));