function showFile(input) {
    let file = input.files[0];      // pegando o primeiro '0' arquivo e armazena em 'file' o que o usuário selecionar

    let fr = new FileReader();      // 'FileReader' faz a leitura dos dados deste arquivo
    fr.onload = function (dados_do_arquivo) {
        let dados = JSON.parse(dados_do_arquivo.target.result);     // 'convertendo' os dados do arquivo de string para json
        document.getElementById("usuario_nome").value = dados.nome;     // pegando o elemento de id 'usuario_nome' do arquivo html e alterando pelo nome que está no arquivo 'dados'
        document.getElementById("endereco_cep").value = dados.cep;
        document.getElementById("endereco_rua").value = dados.rua;
        document.getElementById("endereco_bairro").value = dados.bairro;
        document.getElementById("endereco_cidade").value = dados.cidade;
        document.getElementById("endereco_estado").value = dados.estado;
    }
    fr.readAsText(file);        // 'readAsText' lê o arquivo
}