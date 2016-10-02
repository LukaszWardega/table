//tablice z imionami, zad 8.7

var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = womensNames.concat(mensNames);
console.log(allNames);

var newName = 'Marian'

if (allNames.indexOf(newName) == -1) {
    allNames.push(newName);
} else {
    console.log('To imię jest już w tablicy')
}

console.log(allNames);