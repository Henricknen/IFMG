function buscarCep() {
    let cep = document.getElementById("endereco_cep").value;       // pega o dado que usuário digitar
    let url = "https://brasilapi.com.br/api/cep/v1/"+cep;       // utilizando url de busca para fazer consulta

    fetch(url).then(function(dados) {         // 'busca' os dados da url, no proprio serviço(aplicação web), logo em seguida é chamada a função que receberá esses dados
        dados.json().then(function(endereco) {     // transforma os dados encotrados em 'json'
            document.getElementById("endereco_rua").value = endereco.street;
            document.getElementById("endereco_bairro").value = endereco.neighborhood;
            document.getElementById("endereco_cidade").value = endereco.city;
            document.getElementById("endereco_estado").value = endereco.state;
        })
    })
}