//import bc from '../database/SQLiteDatabase'
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'

import { createTable } from "../../controller/SQLiteTable";
import { getAllUsuarios } from '../../controller/Usuario';

const up = async () => {
  console.log('up')
 // await initializeDatabase();
  await createTable();
}

const add = async () => {
  console.log('insert into');
  try {
    await executeTransaction('INSERT INTO usuario (nome) VALUES (?)', ['ivomar']);
    console.log('Usuário adicionado com sucesso');
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
  }
};

const getUsuarios = async () => {
  console.log('getUsuarios');
  try {
    const usu = await getAllUsuarios();
    console.log(usu)
  } catch (error) {
    console.log('erro ao criar tabela')
  }
}



const Home = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>TESTE IVM</Text>
      <Button onPress={up} title="createTable" />
      <Button onPress={add} title="addUser" />
      <Button onPress={getUsuarios} title="get Usuarios" />



    </View>
  )
}


export default Home;
