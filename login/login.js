// var nome "Heitor" (não usar!!!)
// const nome = "Heitor" (variaveis const são imutaveis)
// let nome = "Heitor" (Variaveis let são mutaveis)

const CampoSenha = document.getElementById("senha")
const BtnSenha = document.querySelector("#mostrar-senha");

console.log(CampoSenha);

BtnSenha.addEventListener("click", function() {
    alert("Cliquei no botão")
})
