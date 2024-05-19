import React from "react";
import { useNavigation } from '@react-navigation/native'

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

const Preload = () => {
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
        </View>
    )
};
export default Preload;