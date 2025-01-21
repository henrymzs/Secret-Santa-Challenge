let listaDeAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('inputAmigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert("Por favor, insira um nome.");
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert('Este amigo já foi adicionado.');
        inputAmigo.value = ''; 
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarListaDeAmigos();
    inputAmigo.value = '';
}

function atualizarListaDeAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    listaDeAmigos.forEach((amigo) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo; 
        listaAmigos.appendChild(listItem); 
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia! Adicione um nome antes de sortear.');
        return; 
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
