
import { executeTransaction } from '../database/SQLiteDatabase3';


const createTable = async () => {
  try {
    await executeTransaction('CREATE TABLE IF NOT EXISTS usuario (\
                              id INTEGER PRIMARY KEY AUTOINCREMENT,\
                              nome TEXT NOT NULL')

  } catch (error) {
    console.error('Erro ao criar a tabela usuario:', error)
  }
};

const getAllUsuarios = async () => {
  try {
    const result = await executeTransaction('SELECT * FROM usuario');
    return result._array; // Retorna os resultados como um array JavaScript
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return []; // Retorna uma array vazia em caso de erro
  }
};

export { getAllUsuarios };
