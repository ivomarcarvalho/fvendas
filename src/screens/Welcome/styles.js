import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38A69D',
    },
    cotainerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignContent: 'center',
    },
    containerImage: {
        width: '100%',
        resizeMode: 'contain',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12,
    },
    text: {
        fontSize: 14,
        color: '#a1a1a1',
        paddingBottom: 30,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38A69D',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default styles