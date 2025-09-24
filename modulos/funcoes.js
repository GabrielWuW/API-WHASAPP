/*********************************************************************************************
 * Objetivo: Criação das funções para a API Whatsapp
 * Data: 24/09/25
 * Autor: Gabriel José
 * Versão: 1.0
 * 
 ********************************************************************************************/

const MESSAGE_ERROR = { status: false, status_code: 500, development: 'Gabriel José' };

const dados = require('./contatos');

const obterTodosDadosUsuarios = function() {
    let message = {};

    dados.contatos.whats-users.forEach(function(item) {
        console.log('item atual:' + item);
    });
}

obterTodosDadosUsuarios();