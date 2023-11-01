function agregarValor(valor) {
    document.getElementById('pantalla').value += valor;
}

function borrar() {
    document.getElementById('pantalla').value = '';
}

function resultado() {
    const pantalla = document.getElementById('pantalla').value;
    const cuenta =eval(pantalla);
    document.getElementById('pantalla').value = cuenta;
}