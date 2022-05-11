//Inicializamos variables
const a = "Hello world",
  b = "2 + 10 / 2 - 20",
  c = "(2 + 10) / 2 - 20",
  d = "(2 + 10 / 2 - 20";

//definición del objeto "s"
const s = {
//operation: Retorna true si la expresión es correcta y corresponde a una operación aritmética; de lo contrario retorna false
  operation: function (array) { 
    same = true;
    //validamos el contenido con expresiones regulares
    if (array.includes("+" | "-" | "/" | "*")) {
      if (array.includes("[a-z]")) {
        same = false;
      } else {
        try {
          eval(array); // sin errores
        } catch (err) {
          same = false; // Operación mal construida
        }
      }
    } else same = false;
    return same;
  },
//compute: Retorna el resultado de la operación si la expresión es correcta y corresponde a una operación aritmética; de lo contrario retorna false
  compute: function (array) {
    if (s.operation(array)) {
      try {
        this.valida = eval(array); // sin errores
        return this.valida;
      } catch (err) {
        return false;
      }
    } else return false;
  },
};

//Construcción de objetos
const arrayA = Object.create(s);
const arrayB = Object.create(s);
const arrayC = Object.create(s);
const arrayD = Object.create(s);

console.log("llamado a método operation del objeto 's'")
//llamado a método operation del objeto 's'
//Retorna true si la expresión es correcta y corresponde a una operación aritmética; de lo contrario retorna false
console.log(arrayA.operation(a));
console.log(arrayB.operation(b));
console.log(arrayC.operation(c));
console.log(arrayD.operation(d));

console.log("llamado a método compute del objeto 's'")
//llamado a método compute del objeto 's'
//Retorna el resultado de la operación si la expresión es correcta y corresponde a una operación aritmética; de lo contrario retorna false
console.log(arrayA.compute(a));
console.log(arrayB.compute(b));
console.log(arrayC.compute(c));
console.log(arrayD.compute(d));
