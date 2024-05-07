import React from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import styles from './styles';
import Logo from '../../assets/techhall.png'


import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

const Signin = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.cotainerLogo}>
                <View style={styles.containerImage}>
                    <Animatable.Image
                        animation='flipInY'
                        source={Logo}
                        style={styles.image}
                    />
                </View>
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>

                <Text style={styles.title} email></Text>
                <TextInput
                    placeholder='Digite sua senha...'
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Welcome')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={styles.buttonRegister}
                >
                    <Text>
                        <Text style={styles.buttonRegisterText}>Não possui uma conta?, </Text>
                        <Text style={styles.buttonRegisterTextBold}>cadastre-se</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.buttonRegister}
                >
                    <Text>
                        <Text style={styles.buttonRegisterText}>Home, </Text>
                        <Text style={styles.buttonRegisterTextBold}>cadastre-se</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Teste2')}
                    style={styles.buttonRegister}
                >
                    <Text>
                        <Text style={styles.buttonRegisterText}>Teste, </Text>
                        <Text style={styles.buttonRegisterTextBold}>cadastre-se</Text>
                    </Text>
                </TouchableOpacity>

            </ Animatable.View>
        </View>
    )
}

export default Signin;