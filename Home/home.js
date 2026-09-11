const Menu = document.getElementById("menu"); // pegando o elemento pelo o id

// estamos pegando o elemento de forma genérica - pode ser classe (precisa trazer o ponto) ou pode ser ID (precisa trazer a hashtag))
const NavMenu = document.querySelector(".navegacao");

Menu.addEventListener("click", function() {
    if(NavMenu.className == "navegacao") {
        NavMenu.className = "navegacao ativo";
    }
    else {
        NavMenu.className = "navegacao";
    }
})