const correctAnswers = {
    q1: 'A) Soberania, Cidadania, Dignidade da pessoa humana, Valores sociais do trabalho, Pluralismo político',
    q2: 'A) Legislativo, Executivo e Judiciário',
    q3: 'D) Promover a desigualdade social',
    q4: 'C) Autodeterminação dos povos, Repúdio ao terrorismo, Cooperação entre os povos',
    q5: 'B) Através de representantes eleitos ou diretamente',
    q6: 'D) Erradicar a pobreza e reduzir desigualdades',
    q7: 'C) Formação de uma comunidade latino-americana de nações',
    q8: 'B) Promoção da igualdade e defesa da paz',
    q9: 'A) A todos, brasileiros e estrangeiros residentes',
    q10: 'D) Entre homens e mulheres em direitos e obrigações',
    q11: 'B) É livre e vedado o anonimato',
    q12: 'C) Proporcional ao agravo, além de indenização',
    q13: 'A) A casa é asilo inviolável do indivíduo',
    q14: 'D) Somente por ordem judicial em investigações',
    q15: 'C) A todos, desde que atendidas as condições legais',
    q16: 'A) Garantir a segurança pública',
    q17: 'B) Forças Armadas',
    q18: 'D) Investigação de delitos militares',
    q19: 'B) A proteção física e integridade das pessoas',
    q20: 'C) Federais, estaduais e distrital',
    q21: 'A) Funções de polícia judiciária',
    q22: 'C) O Governador do Estado',
    q23: 'B) Isonomia de vencimentos',
    q24: 'C) Mediante pedido do interessado ou manifestação do Colegiado Superior',
    q25: 'C) Organização e atribuições específicas',
    q26: 'A) Livres e iguais em dignidade',
    q27: 'D) Tortura ou penas cruéis',
    q28: 'A) Vida e segurança',
    q29: 'B) Detido ou preso',
    q30: 'A) Escolher seu trabalho',
    q31: 'B) A proteção social',
    q32: 'C) Gratuita, especialmente o ensino elementar',
    q33: 'A) Propriedade',
    q34: 'B) Voto e participação em eleições',
    q35: 'C) Sua propriedade',
    q36: 'B) Da sociedade e do Estado',
    q36: 'A) Não há crime sem lei anterior que o defina.',
    q37: 'D) Ninguém pode ser punido por fato que a lei posterior considera não crime.',
    q38: 'B) Aplica-se a fatos ocorridos durante sua vigência, mesmo após seu término.',
    q39: 'B) O crime é considerado praticado no momento da ação ou omissão.',
    q40: 'C) A lei brasileira se aplica a crimes em aeronaves e embarcações brasileiras, independentemente de sua localização.'



};

const explanations = {
    q1: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Os fundamentos da República Federativa do Brasil incluem a Soberania, Cidadania, Dignidade da pessoa humana, Valores sociais do trabalho e Pluralismo político.' + '<br>----------------------------------------------------------------------------------',
    q2: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Os Poderes da União são independentes e harmônicos entre si: o Legislativo, o Executivo e o Judiciário.' + '<br>----------------------------------------------------------------------------------',
    q3: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Um dos objetivos fundamentais é garantir o desenvolvimento nacional, promovendo uma sociedade mais justa e equitativa.' + '<br>----------------------------------------------------------------------------------',
    q4: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'As relações internacionais da República Federativa do Brasil são regidas por princípios como a Independência nacional e a Prevalência dos direitos humanos.' + '<br>----------------------------------------------------------------------------------',
    q5: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'O poder emana do povo, que o exerce através de representantes eleitos ou diretamente, conforme a Constituição.' + '<br>----------------------------------------------------------------------------------',
    q6: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Um dos objetivos é erradicar a pobreza e reduzir as desigualdades sociais e regionais, buscando uma sociedade mais justa.' + '<br>----------------------------------------------------------------------------------',
    q7: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'O Brasil busca a formação de uma comunidade latino-americana de nações, promovendo integração entre os povos.' + '<br>----------------------------------------------------------------------------------',
    q8: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'O Brasil defende a promoção da igualdade e a defesa da paz, repudiando práticas como o terrorismo e o racismo.' + '<br>----------------------------------------------------------------------------------',
    q9: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Todos são iguais perante a lei, garantindo a inviolabilidade do direito à vida, liberdade, igualdade, segurança e propriedade, tanto para brasileiros quanto para estrangeiros residentes.' + '<br>----------------------------------------------------------------------------------',
    q10: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Homens e mulheres são iguais em direitos e obrigações, conforme estabelecido na Constituição.' + '<br>----------------------------------------------------------------------------------',
    q11: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'A liberdade de manifestação do pensamento é garantida, sendo vedado o anonimato, assegurando a responsabilidade pela expressão.' + '<br>----------------------------------------------------------------------------------',
    q12: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'O direito de resposta é garantido de forma proporcional ao agravo, além da possibilidade de indenização por danos.' + '<br>----------------------------------------------------------------------------------',
    q13: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'A casa é considerada um asilo inviolável, protegendo o indivíduo de invasões sem consentimento, salvo em situações específicas previstas pela lei.' + '<br>---------------------------------------------------------------------------------',
    q14: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'O sigilo da correspondência é inviolável, podendo ser quebrado somente por ordem judicial nas hipóteses legais estabelecidas.' + '<br>----------------------------------------------------------------------------------',
    q15: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'O direito de propriedade é garantido a todos, desde que atendidas as condições legais estipuladas.' + '<br>----------------------------------------------------------------------------------',
    q16: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'A segurança pública é um dever do Estado, visando a proteção da ordem pública e a incolumidade das pessoas.' + '<br>----------------------------------------------------------------------------------',
    q17: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'As Forças Armadas não estão incluídas entre os órgãos responsáveis pela segurança pública, que são civis.' + '<br>----------------------------------------------------------------------------------',
    q18: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'As polícias civis têm a incumbência de realizar funções de polícia judiciária e apuração de infrações penais.' + '<br>----------------------------------------------------------------------------------',
    q19: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Incolumidade das pessoas refere-se à proteção física e à integridade dos cidadãos.' + '<br>----------------------------------------------------------------------------------',
    q20: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'As polícias penais incluem órgãos federais, estaduais e distrital, responsáveis pela execução penal.' + '<br>----------------------------------------------------------------------------------',
    q21: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'A Polícia Civil é responsável pelas funções de polícia judiciária e pela apuração de infrações penais.' + '<br>----------------------------------------------------------------------------------',
    q22: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'O Delegado Geral da Polícia Civil é nomeado pelo Governador do Estado, conforme o texto.' + '<br>----------------------------------------------------------------------------------',
    q23: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'A isonomia de vencimentos assegura que os delegados de polícia recebam salários equivalentes.' + '<br>----------------------------------------------------------------------------------',
    q24: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'A remoção de um delegado de polícia pode ocorrer por pedido do interessado ou manifestação do Colegiado Superior.' + '<br>----------------------------------------------------------------------------------',
    q25: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'A Superintendência da Polícia Técnico-Científica tem a função de definir a organização e atribuições específicas, sendo dirigida por peritos e médicos legistas.' + '<br>----------------------------------------------------------------------------------',
    q26: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos.' + '<br>----------------------------------------------------------------------------------',
    q27: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Ninguém será submetido a tortura ou penas cruéis.' + '<br>----------------------------------------------------------------------------------',
    q28: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Todo indivíduo tem direito à vida, à liberdade e à segurança pessoal.' + '<br>----------------------------------------------------------------------------------',
    q29: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Ninguém pode ser arbitrariamente preso ou detido.' + '<br>----------------------------------------------------------------------------------',
    q30: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Toda pessoa tem direito à livre escolha do trabalho.' + '<br>----------------------------------------------------------------------------------',
    q31: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Toda criança tem direito à proteção social.' + '<br>----------------------------------------------------------------------------------',
    q32: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'A educação deve ser gratuita, especialmente o ensino elementar.' + '<br>----------------------------------------------------------------------------------',
    q33: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Todo indivíduo tem direito à propriedade e ninguém pode ser privado dela arbitrariamente.' + '<br>----------------------------------------------------------------------------------',
    q34: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Todos têm direito de participar em eleições e de votar.' + '<br>----------------------------------------------------------------------------------',
    q35: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'Ninguém pode ser arbitrariamente privado de sua propriedade.' + '<br>----------------------------------------------------------------------------------',
    q36: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 'A família é o elemento natural da sociedade e tem direito à proteção.' + '<br>----------------------------------------------------------------------------------',
    q36: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 
          'O princípio da anterioridade da lei penal estabelece que não pode haver crime ou pena sem que haja uma lei anterior que os defina.' + 
          '<br>----------------------------------------------------------------------------------',
    
    q37: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 
          'A lei penal no tempo estabelece que a lei que de qualquer modo favorece o agente deve ser aplicada, mesmo a fatos anteriores.' + 
          '<br>----------------------------------------------------------------------------------',

    q38: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 
          'A lei excepcional ou temporária aplica-se a fatos praticados durante sua vigência, mesmo que sua duração tenha terminado.' + 
          '<br>----------------------------------------------------------------------------------',

    q39: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 
          'O crime é considerado praticado no momento da ação ou omissão, independentemente do momento do resultado.' + 
          '<br>----------------------------------------------------------------------------------',

    q40: '---------------------------- EXPLICAÇÃO -----------------------------<br>' + 
          'A legislação brasileira é aplicável a crimes cometidos em embarcações e aeronaves brasileiras, independentemente da localização.' + 
          '<br>----------------------------------------------------------------------------------'

};

function storeAnswers(correctCount) {
    const quizForm = document.getElementById('quiz-form');
    const inputs = quizForm.querySelectorAll('input[type="radio"]');

    inputs.forEach(input => {
        const label = input.nextElementSibling;
        const explanationDiv = document.getElementById(`explicacao-${input.name}`);

        localStorage.setItem(input.id, JSON.stringify({
            checked: input.checked,
            color: label.style.color,
            explanation: explanationDiv ? explanationDiv.innerHTML : null  // Armazena a explicação (se houver)
        }));
    });

    localStorage.setItem('correctCount', correctCount);
}

function loadAnswers() {
    const quizForm = document.getElementById('quiz-form');
    const inputs = quizForm.querySelectorAll('input[type="radio"]');

    inputs.forEach(input => {
        const storedData = JSON.parse(localStorage.getItem(input.id));
        if (storedData) {
            input.checked = storedData.checked;
            const label = input.nextElementSibling;
            label.style.color = storedData.color;

            // Se houver uma explicação armazenada, exibi-la
            const explanationDiv = document.getElementById(`explicacao-${input.name}`);
            if (storedData.explanation && explanationDiv) {
                explanationDiv.style.display = 'block';
                explanationDiv.innerHTML = storedData.explanation;
            }
        }
    });

    const correctCount = localStorage.getItem('correctCount');
    if (correctCount !== null) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `Total de acertos: ${correctCount}`;
    }
}

function resetPreviousColors() {
    const quizForm = document.getElementById('quiz-form');
    const inputs = quizForm.querySelectorAll('input[type="radio"]');

    inputs.forEach(input => {
        const label = input.nextElementSibling;
        label.style.color = '';  // Reseta a cor anterior

        // Esconde a explicação anterior, se houver
        const explanationDiv = document.getElementById(`explicacao-${input.name}`);
        if (explanationDiv) {
            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';  // Limpa o conteúdo da explicação
        }
    });
}

function submitQuiz() {
    resetPreviousColors();  // Reseta as cores antes de corrigir

    const quizForm = document.getElementById('quiz-form');
    const inputs = quizForm.querySelectorAll('input[type="radio"]');
    let correctCount = 0;

    inputs.forEach(input => {
        const label = quizForm.querySelector(`label[for="${input.id}"]`);
        if (input.checked) {
            if (correctAnswers[input.name] === input.value) {
                // COMENTARIO correta, pinta de verde
                label.style.color = 'green';
                correctCount++;
            } else {
                // Resposta incorreta, pinta de vermelho e mostra explicação
                label.style.color = 'red';

                // Mostra a explicação para a questão errada
                const explanationDiv = document.getElementById(`explicacao-${input.name}`);
                explanationDiv.style.display = 'block';
                explanationDiv.innerHTML = explanations[input.name];  // Exibe a explicação
            }
        }
    });

    storeAnswers(correctCount);  // Armazena a explicação e os outros dados
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `Total de acertos: ${correctCount}`;
}

function clearStorage() {
    localStorage.clear(); // Limpa todo o localStorage
    const quizForm = document.getElementById('quiz-form');
    const inputs = quizForm.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
        const label = input.nextElementSibling;
        label.style.color = '';  // Reseta a cor
        const explanationDiv = document.getElementById(`explicacao-${input.name}`);
        if (explanationDiv) {
            explanationDiv.style.display = 'none';  // Esconde a explicação
            explanationDiv.innerHTML = '';  // Limpa o conteúdo
        }
    });
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'none';
    resultsDiv.innerHTML = '';
}

window.onload = loadAnswers;

document.getElementById('corrigir-btn').addEventListener('click', submitQuiz);
document.getElementById('limpar-btn').addEventListener('click', clearStorage);
