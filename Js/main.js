//Animação de fade-in do site

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.container').classList.remove('hidden');
        document.querySelector('.header').classList.remove('hidden');
        document.querySelector('.content').classList.remove('hidden');
        document.querySelector('.footer').classList.remove('hidden');
    }, 500);
});

//Validação de formulário e redirecionamento

// Função para validar e redirecionar
function validarEEnviar() {
    var emailValue = document.getElementById('emailInput').value;
    var telefoneValue = document.getElementById('telefoneInput').value;

    if (emailValue.trim() === '' || telefoneValue.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
        alert('Por favor, insira um endereço de email válido.');
        return;
    }

    var telefoneRegex = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
    if (!telefoneRegex.test(telefoneValue)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    window.location.href = 'pagina-de-confirmacao.html';
}

// Adicione um ouvinte de evento ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    // Adicione um ouvinte de evento ao botão
    var enviarBotao = document.getElementById('enviarBotao');
    if (enviarBotao) {
        enviarBotao.addEventListener('click', validarEEnviar);
    }
});


// Função para salvar informações em um arquivo JSON
function salvarInformacoes(nome, email, telefone, mensagem, preferenciaContato, horarioPreferido, receberNovidades) {
    // Crie um objeto com as informações
    var dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
        preferenciaContato: preferenciaContato,
        horarioPreferido: horarioPreferido,
        receberNovidades: receberNovidades
    };

    // Converta o objeto para uma string JSON
    var dadosJSON = JSON.stringify(dados, null, 2); // O terceiro parâmetro (2) é opcional e indica espaçamento para formatação

    // Crie um blob (objeto binário grande) a partir dos dados JSON
    var blob = new Blob([dadosJSON], { type: 'application/json' });

    // Crie um link para download
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'dados_formulario.json';

    // Adicione o link ao documento e clique nele para iniciar o download
    document.body.appendChild(link);
    link.click();

    // Remova o link após o download
    document.body.removeChild(link);
}

// Adicione um ouvinte de evento ao link de download
var downloadLink = document.getElementById('downloadLink');
if (downloadLink) {
    downloadLink.addEventListener('click', function () {
        // Chame a função para salvar as informações (certifique-se de fornecer os dados corretos)
        salvarInformacoes(
            'John Doe',
            'john@example.com',
            '(00) 12345-6789',
            'Esta é a mensagem do formulário.',
            'email',
            'tarde',
            true
        );
    });
}



