import React from 'react';
import {
    Button,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import styles from './styles';
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.cotainerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../../assets/logo.png')}
                    style={styles.containerImage}
                />
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>monitore seus gastos de qualquer lugar</Text>
                <Text style={styles.text}>Faça o login para começar</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

export default Welcome;