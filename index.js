const nome = document.querySelector(".nome");
const idade = document.querySelector(".idade");
const seletor = document.querySelector(".seletor");
const aviso = document.querySelector(".aviso");
const botao = document.querySelector(".btn");

//Isso é uma function dentro do evento click
botao.addEventListener("click", (enviar) => {
  enviar.preventDefault();

  const pessoa = {
    nome: nome.value,
    idade: idade.value,
    trabalha: seletor.value,
  };

  console.log(
    "Dados capturados pelo objeto:\n" +
      "Nome: " +
      pessoa.nome +
      "\nIdade: " +
      pessoa.idade +
      "\nTrabalha: " +
      pessoa.trabalha
  );

  //Condicional para adicionar cores para user que nao preencher.
  if (nome.value === "" || idade.value === "") {
    nome.style.border = "solid red 3px";
    idade.style.border = " solid red 3px";
    aviso.textContent = "Precisa preencher os campos!";

    // Apos adcionar e validada as informacoes.
  } else {
    aviso.innerHTML = "";
    nome.value = "";
    idade.value = "";
    seletor.value = "";
    nome.style.border = "none";
    idade.style.border = "none";
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML =
      "Dados capturados pelo objeto:\n" +
      "Nome: " +
      pessoa.nome +
      "\nIdade: " +
      pessoa.idade +
      "\nTrabalha: " +
      pessoa.trabalha;

    //Criando uma tag li para entender o DOM. Isso não está sendo aprensentado na tela. Não criamos o Appendchild
    const li = document.createElement("li");
    li.classList = "item"; // Aqui é criada uma classe lá dentro do html usando o javascript. "class= "item""
    li.textContent = pessoa.nome;
    console.log(li);
  }
});
