const textoInserido = document.querySelector('.texto__inserido');
const textoExibido = document.querySelector('.texto__exibido');
const botaoCopiar = document.querySelector('.copiar');

function crypto(stringCriptografia) {
    let chave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografia = stringCriptografia.toLowerCase();

    for (let i = 0; i < chave.length; i++) {
        if (stringCriptografia.includes(chave[i][0])) {
            stringCriptografia = stringCriptografia.replaceAll(chave[i][0], chave[i][1]);
        }
    }

    return stringCriptografia;
}

function decrypto(stringDescriptografia) {
    let chave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografia = stringDescriptografia.toLowerCase();

    for (let i = 0; i < chave.length; i++) {
        stringDescriptografia = stringDescriptografia.replaceAll(chave[i][1], chave[i][0]);
    }

    return stringDescriptografia;
}

function criptografar() {
    const textoCodificado = crypto(textoInserido.value);
    if (textoCodificado) {
        textoExibido.value = textoCodificado;
        document.querySelector('.conteudo__sem__retorno').style.display = 'none';
        document.querySelector('.conteudo__retorno').style.display = 'block';
    }
    textoInserido.value = "";
}

function descriptografar() {
    const textoDecodificado = decrypto(textoInserido.value);
    if (textoDecodificado) {
        textoExibido.value = textoDecodificado;
        document.querySelector('.conteudo__sem__retorno').style.display = 'none';
        document.querySelector('.conteudo__retorno').style.display = 'block';
    }
    textoInserido.value = "";
}

botaoCopiar.addEventListener('click', function() {
    const textoParaCopiar = textoExibido.value;
    navigator.clipboard.writeText(textoParaCopiar);
    textoExibido.value = "";
});

function limpar() {
    textoInserido.value = "";
    textoExibido.value = "";

    document.querySelector('.conteudo__sem__retorno').style.display = 'flex';
    document.querySelector('.conteudo__retorno').style.display = 'none';
}