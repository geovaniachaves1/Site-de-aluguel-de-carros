// Função para alugar um veículo
function alugar(id) {
    var buttonAlugar = document.getElementById("alugar" + id);
    var buttonDevolver = document.getElementById("devolver" + id);
    var status = document.getElementById("status" + id);

    // Simular uma ação de aluguel
    buttonAlugar.style.display = "none";
    buttonDevolver.style.display = "block";
    status.innerText = "Veículo Alugado";
}

// Função para devolver um veículo
function devolver(id) {
    var buttonAlugar = document.getElementById("alugar" + id);
    var buttonDevolver = document.getElementById("devolver" + id);
    var status = document.getElementById("status" + id);

    // Simular uma ação de devolução
    buttonAlugar.style.display = "block";
    buttonDevolver.style.display = "none";
    status.innerText = "Disponível para Aluguel";
}
