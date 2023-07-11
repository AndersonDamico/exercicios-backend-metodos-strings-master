const comentario = "Esse COVID é muito perigoso!";

const achouCovid = comentario.toLowerCase().includes('covid');
const achouPanemia = comentario.toLowerCase().includes('pandemia');

if (achouCovid || achouPanemia) {
    console.log('comentario bloqueado por conter palavras proibidas');
} else {
    console.log('comentario autorizado');
}