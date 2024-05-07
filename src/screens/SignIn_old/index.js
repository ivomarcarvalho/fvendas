import React from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import styles from './styles';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' dalay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo!</Text>
            </Animatable.View>
            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title} email>Email</Text>
                <TextInput
                    placeholder='Digite seu email...'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Sua senha...'
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.buttonRegisterText}>Não possui uma conta?, cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

export default SignIn;