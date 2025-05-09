const db = require('../dataBase/connection'); 

module.exports = {
    async listarAgr_certificacoes(request, response) {
        try {

            
           
             const sql = `
                SELECT 
                    agr_cert_id, agri_id, cert_id, agr_local,
                    agr_data, agr_arquivo, agr_status
                FROM AGR_CERTIFICACOES;
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
    async cadastrarAgr_certificacoes(request, response) {
        try {
            const { agri_id, cert_id, agr_local, agr_data, agr_arquivo, agr_status } = request.body;
            
            // Instrução SQL
            const sql = `
               INSERT INTO AGR_CERTIFICACOES (agri_id, cert_id, agr_local, agr_data, agr_arquivo, agr_status) VALUES
                (?,?,?,?,?,?) 
               
               `;
                    const values = [agri_id, cert_id, agr_local, agr_data, agr_arquivo, agr_status];

                    const [result] = await db.query(sql, values);

                    const dados = {
                        agri_id: result.insertId,
                        cert_id,
                        agr_local,
                        agr_data,
                        agr_arquivo,
                        agr_status
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
    async editarAgr_certificacoes(request, response) {
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
    async apagarAgr_certificacoes(request, response) {
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