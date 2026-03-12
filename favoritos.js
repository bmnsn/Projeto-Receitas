function adicionarFavorito(){
    //Buscar nome da receita
    let nome = document.querySelector(".topo h1").textContent;
    //Busca no site
    let link = window.location.href;

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // verifica se já existe
    let existe = favoritos.some(item => item.nome === nome);

    if(!existe){

        favoritos.push({
            nome: nome,
            link: link
        });

        localStorage.setItem("favoritos", JSON.stringify(favoritos));

        alert("Receita adicionada aos favoritos!");

    }else{
        alert("Essa receita já está nos favoritos!");
    }
}