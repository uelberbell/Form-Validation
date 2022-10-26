const nome = document.querySelector(".nome");
const idade = document.querySelector(".idade");
const seletor = document.querySelector(".seletor");
const aviso = document.querySelector(".aviso");
const botao = document.querySelector(".btn");

//Isso é uma function dentro do evento click
botao.addEventListener("click", (enviar) => { // Essa é uma errowFunction, mas poderia ser feita com uma function normal.
  enviar.preventDefault();
  //Essa function poderia ser básica: function enviar(){}. Mas seria necessário chamar essa function no button com onclick ="enviar()"  
  const pessoa = {                
    nome: nome.value,             
    idade: idade.value,
    trabalha: seletor.value,
  };

  //Condicional para adicionar cores para user que nao preencher.
  if (nome.value === "" || idade.value === "") {
    nome.style.border = "solid red 2px";
    idade.style.border = " solid red 2px";
    aviso.textContent = "Precisa preencher os campos!";
      console.log("Os dados não foram preenchidos pelo usuário!")

      setTimeout(() => {//Removerá as transformações acima após 3 segundos.
        aviso.textContent = ''
        nome.style.border = ''
        idade.style.border = ''
      }, 3000);
    // Apos adcionar e validar as informacoes.
  } else {
    nome.value = ""
    idade.value = ""
    seletor.value = "";
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML =
      "Dados capturados pelo objeto:\n" +
      "Nome: " +
      pessoa.nome +
      "\nIdade: " +
      pessoa.idade +
      "\nTrabalha: " +
      pessoa.trabalha;

        setTimeout(() =>{ //Removendo dados impressos no textArea.
          resultado.innerHTML = ''
        }, 3000)

        //Estou adicionando esse log aqui para verificar os dados no console do navegador.
      console.log(
        "Dados capturados pelo objeto:\n" +
          "Nome: " +
          pessoa.nome +
          "\nIdade: " +
          pessoa.idade +
          "\nTrabalha: " +
          pessoa.trabalha
      );


    //Criando uma tag li para entender o DOM. Isso não está sendo aprensentado na tela. Não criamos o Appendchild
    const li = document.createElement("li");
    li.classList = "item"; // Aqui é criada uma classe lá dentro do html usando o javascript. "class= "item""
    li.textContent = pessoa.nome;
    console.log(li); // Você pode observar esse dado sendo exibido no console do navegador.
  }
});
