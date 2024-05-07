import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import styles from './styles';

const Config = () => {
  return <View style={styles.container}>
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>Configuração</Text>
    </View>

    <View style={styles.containerForm}>
      <TextInput
        placeholder='IP'
        keyboardType='number-pad'
        style={styles.input} />
      <TextInput
        placeholder='e-mail'
        keyboardType='email-address'
        style={styles.input} />
      <TextInput
        placeholder='Código de liberação'
        style={styles.input} />

    </View>
  </View>

    ;
}

export default Config;