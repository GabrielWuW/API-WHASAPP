/*********************************************************************************************
 * Objetivo: Criação das funções para a API Whatsapp
 * Data: 24/09/25
 * Autor: Gabriel José
 * Versão: 1.0
 * 
 ********************************************************************************************/

const MESSAGE_ERROR = { status: false, status_code: 500, development: 'Gabriel José' };

const dados = require('./contatos');

const obterTodosDadosUsuarios = function () {
    let message = { status: true, status_code: 200, development: 'Gabriel José', dados: [] };

    dados.contatos['whats-users'].forEach(function (item) {
        message.dados.push(
            {
                id: item.id,
                nome: item.account,
                nick: item.nickname,
                data: { comeco: item['created-since'].start, fim: item['created-since'].end },
                imagem: item['profile-image'],
                numero: item.number,
                fundo: item.background,

                contatos: item.contacts.map(function (itemUser) {
                    return {
                        nome: itemUser.name,
                        numero: itemUser.number,
                        descricao: itemUser.description,
                        imagem: itemUser.image,
                        mensagens: itemUser.messages.map(function (itemMensagem) {
                            return {
                                remetente: itemMensagem.sender,
                                conteudo: itemMensagem.content,
                                horaEnvio: itemMensagem.time
                            }
                        }),
                    };
                }),
            }
        );
    });

    if (message.dados.some(item =>
        !item.id || item.id.length === 0 ||
        !item.nome || item.nome.length === 0 ||
        !item.nick || item.nick.length === 0 ||
        !item.data || !item.data.comeco || !item.data.fim ||
        !item.imagem || item.imagem.length === 0 ||
        !item.numero || item.numero.length === 0 ||
        !item.fundo || item.fundo.length === 0 ||
        item.contatos.some(contato =>
            !contato.nome || contato.nome.length === 0 ||
            !contato.numero || contato.numero.length === 0 ||
            !contato.descricao || contato.descricao.length === 0 ||
            !contato.imagem || contato.imagem.length === 0
        )
    )) {
        return MESSAGE_ERROR;
    } else {
        return message;
    }

}

console.log(obterTodosDadosUsuarios());