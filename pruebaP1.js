//Inicialización de arreglos
const a = [1, 2],
  b = [
    [1, 2],
    [2, 4],
  ],
  c = [
    [1, 2],
    [2, 4],
    [2, 4],
  ],
  d = [
    [
      [3, 4],
      [6, 5],
    ],
  ],
  e = [
    [[1, 2, 3]],
    [
      [5, 6, 7],
      [5, 4, 3],
    ],
    [
      [3, 5, 6],
      [4, 8, 3],
      [2, 3],
    ],
  ],
  f = [
    [
      [1, 2, 3],
      [2, 3, 4],
    ],
    [
      [5, 6, 7],
      [5, 4, 3],
    ],
    [
      [3, 5, 6],
      [4, 8, 3],
    ],
  ];

//Objeto 'o' con sus métodos
const o = {
  dimension: function (array) { //retorta la dimension del array
    if (Array.isArray(array))
      return 1 + Math.max(...array.map((t) => o.dimension(t)));//Mediante un llamado recursivo iteramos hasta llegar al último nivel del arreglo
    else return 0;
  },

  straight: function (array) {
    let same = 0;
    let auxSame = array[0].length; //obtenemos los elementos que contiene el primer subarreglo
    array.forEach(function (el) { //comparamos el número de elementos obtenido con las demas dimensiones, si es igual para todos retorna true (matriz uniforme), si no false
      if (auxSame != el.length) same += 1;
    });
    if (same > 0) return false;
    else return true;
  },

  compute: function (array) {
    array = array.reduce( //convertimos el arreglo en un solo nivel, para facilitar el recorrido
      (acc, val) =>
        Array.isArray(val) ? acc.concat(o.compute(val)) : acc.concat(val),
      []
    );

    const initialValue = 0;
    const sumWithInitial = array.reduce( //Recorremos el array y convertimos sumando cada elemento, obteniendo un solo dato igual a la suma de todos
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    return sumWithInitial;
  },
};

//Construcción de objetos
const arrayA = Object.create(o);
const arrayB = Object.create(o);
const arrayC = Object.create(o);
const arrayD = Object.create(o);
const arrayE = Object.create(o);
const arrayF = Object.create(o);

console.log("llamado a método dimension del objeto 'o'")
//llamado a método dimensión
//el resultado es el número entero que define la dimensión del arreglo.
console.log(arrayA.dimension(a));
console.log(arrayB.dimension(b));
console.log(arrayC.dimension(c));
console.log(arrayD.dimension(d));
console.log(arrayE.dimension(e));
console.log(arrayF.dimension(f));

console.log("llamado a método straight del objeto 'o'")
//llamado a método straight
console.log(arrayA.straight(a));
console.log(arrayB.straight(b));
console.log(arrayC.straight(c));
console.log(arrayD.straight(d));
console.log(arrayE.straight(e));
console.log(arrayF.straight(f));

console.log("llamado a método compute del objeto 'o'")
//llamado a método compute
console.log(arrayA.compute(a));
console.log(arrayB.compute(b));
console.log(arrayC.compute(c));
console.log(arrayD.compute(d));
console.log(arrayE.compute(e));
console.log(arrayF.compute(f));
