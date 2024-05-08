import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('fvendas3.db');


// Função para criar o banco de dados e tabelas, se ainda não existirem

const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL
      )
      `,
      [],
      () => console.log('Tabela usuario criada com sucesso'),
      (_, error) => console.error('Erro ao criar a tabela usuario:', error)
    );
  });
};


// Função para executar transações SQL
const executeTransaction = async (sql, values = []) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        sql,
        values,
        (_, { rowsAffected, rows }) => {
          console.log(`Transação SQL executada com sucesso. Linhas afetadas: ${rowsAffected}`);
          resolve(rows);
        },
        (_, error) => {
          console.error('Erro ao executar a transação SQL:', error);
          reject(error);
        }
      );
    });
  });
};

export { initializeDatabase, executeTransaction };
