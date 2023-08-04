// Obetendo elementos com seletores CSS
const nomeUsuario = document.querySelector('header .avatar-content div');
console.log(nomeUsuario)
nomeUsuario.innerHTML = ('<strong> Nome de Usuário </strong>')

//obtendo input com um name específico através do seletor CSS
// const primeiroNomeInput = document.querySelector('.form-auth input[name="name"]');
// primeiroNomeInput.placeholder = ('Digite o primeiro nome')

//Obtendo input selecionando pela propriedade name 
const fristNameInput = document.getElementsByName('name')[0];
fristNameInput.placeholder = 'Digite o primeiro nome'

//exercício 2
//alterando a borda dos inputs do formulário de cadastro
const changeInput = document.querySelectorAll('.form-auth input')
changeInput.forEach(input => (input.style.borderRadius = '10px'))  //altera a borda dos inputs como na descrição do exercício. O forEach é utilizado para que cada um dos elementos selecionados recebam as aleterações.

//alterando posicionamento dos inputs
const formAuth = document.querySelector('.form-auth');
formAuth.style.display = 'flex'
formAuth.style.flexDirection = 'column'
formAuth.style.backgroundColor = '#fafafa'

//Selecionando o body diratamente para aletar a cor de fundo.
// document.body.style.backgroundColor = '#fafafa'

//Espera a página carregar e executa o que há no trecho de código da função.
// window.addEventListener('load', function(){
    // console.log('O documento está pronto!');
   
    //adiciona evento click ao elemento selecionado NÃO FUNCIONA:
//  let btn1 = document.querySelector('button[type="submit"]');
//  btn1.addEventListener('click', function(){
//     console.log('clicou no botão');
//  })

//pega o formulário e impede o comportamento padrão do form NÃO FUNCIONA.
// form1 = document.querySelector('form-auth');
// form1.addEventListener('submit', function(event){
//     console.log('clicoooooou');
//     event.preventDefault();
// })
  // });

  //mouse-over
  // let h1 = document.querySelector('.user-name')
  // h1.onmouseover = function(){
  //   console.log('Passou o mouse por cima');
  // }

  //aplica focus no primeiro input (utilizando .onfocus)
  let imail = document.querySelector('input[type="email"]')
  imail.onfocus = () =>{
    console.log('Entrou com o mouse no input');
  }

  //aplica blur no input user-name com o addEventListener
  iname = document.querySelector('input[name="name"')
  iname.addEventListener('blur', () => {
    console.log('saiu com o mouse do input name')
  })
