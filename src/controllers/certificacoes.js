const db = require('../dataBase/connection'); 

module.exports = {
    async listarCertificacoes(request, response) {
        try {

            const sql = `
            SELECT 
            cert_id, 
            cert_orgao_regulador, 
            cert_nome 
            FROM CERTIFICACOES;
         `;


         const [rows]  = await db.query(sql);
         
         const nRegistros =  rows.length;

                


         return response.status(200).json({
            sucesso: true, 
            mensagem: 'Lista de certificacoes', 
            nRegistros,
            dados: rows
          
        });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarCertificacoes(request, response) {
        try {
            const {cert_orgao_regulador, cert_nome} = request.body;
            
            // Instrução SQL
            const sql = `
              INSERT INTO CERTIFICACOES (cert_orgao_regulador, cert_nome) VALUES
                (?,?) 
               
               `;
                    const values = [cert_orgao_regulador, cert_nome];

                    const [result] = await db.query(sql, values);

                    const dados = {
                        cert_orgao_regulador,
                        cert_nome
                    };






            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de certificacoes', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarCertificacoes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro das certificações', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarCertificacoes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão das certificações', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  