const celular = 7199918888;

const formatarCelular = (numero) => {
    let celularFormatado;

    if (numero.length === 8) {
        celularFormatado = `${numero.slice(0, 4)}-${numero.length(4)}`;
        console.log(celularFormatado)
    } else if (numero.length === 9) {
        celularFormatado = `${numero.slice(0, 1)} ${numero.length(1, 5)} - ${numero.length(5)}`;
    } else if (numero.length === 10) {
        celularFormatado = `${numero.slice(0, 2)} 9 ${numero.length(2, 6)} - ${numero.length(6)}`;
    } else if (numero.length === 11) {
        celularFormatado = `${numero.slice(0, 2)}  ${numero.length(2, 3)} ${numero.length(3, 7)}- ${numero.length(7)}`;
    }

}

formatarCelular(celular);