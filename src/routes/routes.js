const express = require('express'); 
const router = express.Router(); 

const certificacoesController = require('../controllers/certificacoes');
const rastreamento_producaoController = require('../controllers/rastreamento_producao');
const agrCertificacoesController = require('../controllers/agrCertificacoes');


router.get('/certificacoes', certificacoesController.listarCertificacoes); 
router.post('/certificacoes', certificacoesController.cadastrarCertificacoes); 
router.patch('/certificacoes', certificacoesController.editarCertificacoes); 
router.delete('/certificacoes', certificacoesController.apagarCertificacoes); 

router.get('/rastreamento_producao', rastreamento_producaoController.listarRastreamento); 
router.post('/rastreamento_producao', rastreamento_producaoController.cadastrarRastreamento); 
router.patch('/rastreamento_producao', rastreamento_producaoController.editarRastreamento); 
router.delete('/rastreamento_producao', rastreamento_producaoController.apagarRastreamento); 

router.get('/agrCertificacoes', agrCertificacoesController.listarAgr_certificacoes); 
router.post('/agrCertificacoes', agrCertificacoesController.cadastrarAgr_certificacoes); 
router.patch('/agrCertificacoes', agrCertificacoesController.editarAgr_certificacoes); 
router.delete('/agrCertificacoes',agrCertificacoesController.apagarAgr_certificacoes); 

module.exports = router;