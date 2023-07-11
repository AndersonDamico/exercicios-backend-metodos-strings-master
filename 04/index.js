let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6,'0');

let nomeMaiusculo = '';

for (const item of nome.split('')) {
    nomeMaiusculo += `${item.slice(0, 1).toUpperCase()}${item.slice(1).toLowerCase()} `
}
nome = nomeMaiusculo.trim(); //remove o spaco no inicio e no final da string
email = email.trim();

console.log(identificador)
console.log(nome)
console.log(email)