import { executeTransaction } from '../database/SQLiteDatabase3';
import { Usuario } from '../module/Usuario';


// Função para criar a tabela com base na definição
const createUsuarioTable = async () => {
  const colunas = Object.entries(Usuario).map(([columnName, columnDefinition]) => `${columnName} ${columnDefinition}`).join(', ');
  const query = `CREATE TABLE IF NOT EXISTS usuario (${colunas})`;
  try {
    await executeTransaction(query);
    console.log('Tabela de usuários criada com sucesso.');
  } catch (error) {
    console.error('Erro ao criar tabela de usuários:', error);
  }
};
const createTable = async () => {
  createUsuarioTable()
}
export { createTable };