type First<T extends any[]> = T extends [] ? never: T[0];

function displayLog(valor: number) {
    console.log(valor);
}

function displayLogString(valor: string) {
    console.log(valor);
}


function display<T>(valor: T): T {
    console.log(valor);
    return valor;
}

display(1);
display('Hola');


type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1> // se espera el valor 'a'
type head2 = First<arr2> // se expera el valor 3

type If<C extends boolean, T, F> = C extends true ? T : F


type A = If<true, 'a', 'b'>  // valor esperado 'a'
type B = If<false, 'a', 'b'> // valor esperado 'b'