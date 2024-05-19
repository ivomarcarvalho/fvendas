
import { executeTransaction } from '../database/SQLiteDatabase';

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
