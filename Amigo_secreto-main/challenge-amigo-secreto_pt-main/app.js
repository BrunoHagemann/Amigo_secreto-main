let amigos = [];
let nomesSorteados = [];
let lista = document.getElementById('listaAmigos');

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    let nome = nomeInput.value.trim();
    if (nome === '') {
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(nome)
        lista.innerHTML = (`${amigos}`)
        CriandoElementos();
        limpandoTextos();
    }
}

function limpandoTextos() {
    nome = document.getElementById('amigo');
    nome.value = "";
}

function CriandoElementos() {
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const novoItem = document.createElement('li');
        novoItem.textContent = amigos[i];
        lista.appendChild(novoItem);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione um nome para ser sorteado.")
    } else {
        let pessoaAleatoria = Math.floor(Math.random() * amigos.length)
        let mensagemSorteado = document.getElementById('resultado')
        mensagemSorteado.innerHTML = (`O amigo secreto sorteado é: ${amigos[pessoaAleatoria]}!`)
        reiniciarJogo()
    }
}

function reiniciarJogo() {
    nome.value = ''
    lista.innerHTML = ''
    amigos = []
}