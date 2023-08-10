window.addEventListener('load', () => { //faz com que o javascript rode somente após carregar a página

    let states = document.getElementById('states'); //salva o elemento com o id states

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome') // pega a api e faz uma promise
    .then(statesReturned => { //pega o resultado da promise e armazenza em statesReturned
        return statesReturned.json(); //retorna a promisse agora em formato json
    })
    .then(statesFormated => { //pega os dados em json e executa a próxima função (laço de repetição)
        for (let i=0; i < statesFormated.length; i++){ //cria um laço para iterar sob o array com os valores, com um limitador que é o próprio tamanho
            states.innerHTML += '<li>' + statesFormated[i].nome + '</li>' //formata o html com o INNER, atribuindi (+=) uma tag li dentro do elemento states(<ul>) e o concatena com o que o laço está retornando, graças ao [i] e o concatena com a tag de fechamento li
        }
    })
    .catch(error => console.log(error)); //caso haja algum erro, pegamos (catch)o erro e o imprime na tela.
})


