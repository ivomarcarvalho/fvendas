import React from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import styles from './styles';
import Logo1 from '../../assets/logo.png'
import Logo2 from '../../assets/NF-e.png'
import Logo3 from '../../assets/techhall.png'


import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.cotainerLogo}>
                <View style={styles.containerImage}>
                        <Animatable.Image
                            animation='flipInY'
                            source={Logo3}
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
                    onPress={() => navigation.navigate('SignIn')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Config')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Config</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

export default Login;
