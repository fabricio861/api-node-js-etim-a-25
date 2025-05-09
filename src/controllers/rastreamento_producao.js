const db = require('../dataBase/connection'); 

module.exports = {
    async listarRastreamento(request, response) {
        try {

            const sql = `
           SELECT 
           rast_id,
            agri_id, 
            amen_id,
            rast_data_plantacao, 
            rast_data_colheita, 
            rast_informacoes_adicionais, 
            rast_area_plantacao 
            FROM RASTREAMENTO_PRODUCAO;
         `;


         const [rows]  = await db.query(sql);
         
         const nRegistros =  rows.length;

         return response.status(200).json({
            sucesso: true, 
            mensagem: 'Lista de rastreamento', 
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
    async cadastrarRastreamento(request, response) {
        try {
            const { agri_id, amen_id, rast_data_plantacao, rast_data_colheita, rast_informacoes_adicionais, rast_area_plantacao } = request.body;
            
            // Instrução SQL
            const sql = `
               INSERT INTO RASTREAMENTO_PRODUCAO (agri_id, amen_id, rast_data_plantacao, rast_data_colheita, rast_informacoes_adicionais, rast_area_plantacao) VALUES
                (?,?,?,?,?,?) 
               
               `;
                    const values = [agri_id, amen_id, rast_data_plantacao, rast_data_colheita, rast_informacoes_adicionais, rast_area_plantacao];

                    const [result] = await db.query(sql, values);

                    const dados = {
                        agri_id: result.insertId,
                        amen_id,
                        rast_data_plantacao,
                        rast_data_colheita,
                        rast_informacoes_adicionais,
                        rast_area_plantacao
                    };



            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de rastremento', 
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
    async editarRastreamento(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de rastreamento', 
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
    async apagarRastreamento(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de rastreamento', 
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