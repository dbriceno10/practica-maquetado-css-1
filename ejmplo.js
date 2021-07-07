






// const calcularImpuestos = (edad, ingresos) => {
//     if((edad >= 18) && (ingresos >= 1000)) {
//         return ingresos*0.40
//     } else {
//         return 0
//     }
// }

const calcularImpuestos = (edad, ingresos) => edad >= 18 && ingresos >= 1000 ? ingresos * 0.4 : 0;

const impuesto_1 = calcularImpuestos(25, 4000)
console.log(`Impuesto 1: ${impuesto_1}`)
const impuesto_2 = calcularImpuestos(17, 1500)
console.log(`Impuesto 2: ${impuesto_2}`)
