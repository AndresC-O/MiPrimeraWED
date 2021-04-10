//Clase #1--------------------------------------------

//Variables
//let numero = -5.3;
//let palabra = "Hola Mundo";
//let respuesta = false;
//Constantes
//const PI = 3.14;
//Modificar en ejecucion
//numero = 53;
//Mostrado en consola
//console.log(PI);

//Clase #2--------------------------------------------

//Operadores Matematicos
//let a = 5;
//let b = 2;
//let usuario = "Andres";
//
//console.log(a+b);
//console.log(a-b);
//console.log(a*b);
//console.log(a/b);
//console.log(a%b);
//console.log("Hola " + usuario);

//Operadores de Incremento y Decremento
//let a = 5;
//
//console.log(--a);
//console.log(++a);
//
//let b = 10;
//b += 3;
//console.log(b);
//b -= 3;
//console.log(b);
//b *= 3;
//console.log(b);
//b /= 3;
//console.log(b);
//b %= 3;
//console.log(b);

//Clase #3--------------------------------------------

//Strings  
//let cadena = "Hola Mundo";
//
//console.log(cadena.length);//cantidad de caracteres.
//console.log(cadena.toUpperCase());//metodo que devuelve en mays
//console.log(cadena.toLowerCase());//metodo que devuelve en mins
//
//console.log(cadena.indexOf("d"));//devuelve la posicion del string
//console.log(cadena.replace("Mundo", "Andres"));//reemplazar valores
//console.log(cadena.substring(3));//extraer hasta el final
//console.log(cadena.substring(3, 7));//extraer hasta el final
//
//console.log(cadena.slice(-3));//extrae pero no cuenta los ultimos
//
//console.log(cadena.trim());//elimina espacios al inicio y final
//console.log(cadena.startsWith("H"));
//console.log(cadena.startsWith("M", 5));//veridica si comienza con esa cadena
//console.log(cadena.endsWith("o"));//verifica si termina con esa cadena
//console.log(cadena.endsWith("a", 4));
//
//console.log(cadena.includes("n"));//verifica si contiene esa cadena
//console.log(cadena.includes("a", 2));
//
//console.log(cadena.repeat(2));//repite el numero que se le indique
//console.log("Andres ".repeat(3));
//
///*Templates Strings*/
//let nombre = "Andres";
//let apellido = "Cordova";
//let edad = 20;
//
//console.log("Hola " + nombre + apellido + edad)
//console.log(`Hola ${nombre} ${apellido}. Tienes  ${edad}`);
//console.log(`Hola ${nombre} ${apellido}. El año que viene tendras  ${edad +1}`);

//Clase #4--------------------------------------------

//Objeto Math

//console.log(Math.E);
//console.log(Math.PI);
//
//let numero = 2.6;
//console.log(Math.abs(numero));//Valor Absoluto
//console.log(Math.ceil(numero));//Redondea hacia el numero mas grande
//console.log(Math.floor(numero));//Redondea hacia el numero mas pequenio
//console.log(Math.pow(numero, 2));//Resolver potencia
//console.log(Math.round(Math.random()*100));//Genera random entre 0 y 1
//console.log(Math.random()*(10 -5) + 5);//numero entre 5 y 10
//console.log(Math.sign(numero));//Devuelve el signo del numero
//console.log(Math.sqrt(9));//devuelve raiz cuadrada de x