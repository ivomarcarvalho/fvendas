import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.sqlite3");

console.log('SqLiteDatabase2');

module.exports = { db };