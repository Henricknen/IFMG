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

function salvar() {
    let templink = document.createElement("a");         // 'link temporario' para fazer o dowload do arquivo que será salvo
    let dadosSalvar = {     // objeto 'json' que será salvo
        "nome":document.getElementById("usuario_nome").value,
        "cep":document.getElementById("endereco_cep").value,
        "rua":document.getElementById("endereco_rua").value,
        "bairro":document.getElementById("endereco_bairro").value,
        "cidade":document.getElementById("endereco_cidade").value,
        "estado":document.getElementById("endereco_estado").value
    }
    let meu_arquivo = new Blob([JSON.stringify(dadosSalvar)], { type: "text/plain" });        // 'Blob' é um objeto, uma representação de arquivo, função 'JSON.stringify' transforma o objeto em 'string'
    templink.setAttribute("href", URL.createObjectURL(meu_arquivo)); // criando a URL do Blob
    templink.setAttribute("download", "dados.json"); // atributo 'download' recebendo o nome do arquivo 'dados.json'
    templink.click();       // dispara o dowload
}