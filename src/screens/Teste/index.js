//import bc from '../database/SQLiteDatabase'
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'


import  {db}  from '../../database/SQLiteDatabase2';
//import * as SQLite from "expo-sqlite";

//const db = SQLite.openDatabase("db.sqlite3");

const up = async () => {
  console.log('up')
  await db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF EXIST categoria (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT);'
    )
  });
  create();
}

const create = async() => {
  console.log('create')

  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO categoria nome VALUES(?)', ['frios']
    )
  })
}

const Teste = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>TESTE IVM</Text>
      <Button onPress={up} title="create" />
      <Button onPress={up} title="show" />



    </View>
  )
}


export default Teste;
