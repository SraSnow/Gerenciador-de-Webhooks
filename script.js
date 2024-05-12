function enviarMensagem() {
    var url = document.getElementById('webhook-url').value;
    var mensagem = document.getElementById('message').value;
    var imagem = document.getElementById('image').files[0];

    var formData = new FormData();
    formData.append('content', mensagem);
    if (imagem) {
        formData.append('file', imagem, imagem.name);
    }

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log('Mensagem enviada com sucesso!');
        } else {
            console.error('Erro ao enviar a mensagem:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Erro ao enviar a mensagem:', error);
    });
}

function escolherWebhook(webhookUrl) {
    document.getElementById('webhook-url').value = webhookUrl;
}
