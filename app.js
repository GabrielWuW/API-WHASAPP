/*******************************************************************************************
 * Objetivo: endpoints referente a API do Whatsapp
 * Data: 24/09/2025
 * Autor: Gabriel José
 * Versão: 1.0
 *  
 * *****************************************************************************************
 * Observações: Instalação do Express, Cors, Body-Parser
 * -----------------------------------------
 * npm install express     --save         
 * npm install cors        --save         
 * npm install body-parser --save         
 * -----------------------------------------
 * 
 * ****************************************************************************************/

//Importando as dependencias da API
const express = require('express');             //Responsavel pela API
const cors = require('cors');                   //Responsavel pelas permissões da API (APP)
const bodyParser = require('body-parser');      //Responsavel por gerenciar a chegada dos dados da API com o front

const dados = require('./modulos/funcoes.js');  //import do arquivo de funções

//Retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.PORT || 8080;

//Criando uma instancia de uma classe do express
const app = express();

