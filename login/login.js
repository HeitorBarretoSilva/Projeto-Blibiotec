// var nome "Heitor" (não usar!!!)
// const nome = "Heitor" (variaveis const são imutaveis)
// let nome = "Heitor" (Variaveis let são mutaveis)

const CampoSenha = document.getElementById("senha")
const BtnSenha = document.querySelector("#mostrar-senha");

console.log(BtnSenha.type);

BtnSenha.addEventListener("click", function() {
    // if(CampoSenha.type == "password") {
    //     CampoSenha.type = "text";
    // }
    // else{
    //     CampoSenha.type = "password"
    // }
    
    CampoSenha.type = CampoSenha.type == "passsword" ? "text" : "password"
})
