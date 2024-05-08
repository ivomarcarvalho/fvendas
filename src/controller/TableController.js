import { executeTransaction } from '../database/SQLiteDatabase3';
import { UsuarioModel } from '../module/UsuarioModule';

const createTable = async () => {
    try {
        const sql = 'CREATE TABLE IF NOT EXISTS usuario (\
                     id INTEGER PRIMARY KEY AUTOINCREMENT,\
                     nome TEXT NOT NULL);'
        console.log(sql)
        const ivm = UsuarioModel
        console.log(ivm)
        await executeTransaction(sql)
        console.log('Tabela usuario criada com sucesso')
    } catch (error) {
        console.error('Erro ao criar a tabela usuario:', error)
    }
};
export { createTable };