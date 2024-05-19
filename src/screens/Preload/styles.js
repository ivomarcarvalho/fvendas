import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        //  backgroundColor: '#38A69D',
    },
    cotainerLogo: {
        // flex: 1,
        marginTop: 100,
        justifyContent: 'center',
        alignContent: 'center',
    },
    containerImage: {
        // backgroundColor: 'red',
        width: '100%',
        alignItems: 'center',
        resizeMode: 'contain',
    },
    image: {
        //  backgroundColor:'blue',
        width: '100%',
        resizeMode: 'contain',

    },

    containerForm: {
        flex: 1,
        //     backgroundColor: '#38A69D',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingStart: '5%',
        paddingRight: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        fontSize: 14,
        color: '#a1a1a1',
        paddingBottom: 30,
    },

    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,

    },
    button: {
        //  position:"absolute",
        // backgroundColor: '#38A69D',
        backgroundColor: '#63C2D1',
        width: '60%',
        borderRadius: 15,
        paddingVertical: 8,
        // bottom:25,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    buttonRegisterText: {
        color: '#268596',
    },
    buttonRegisterTextBold: {
        color: '#268596',
        fontWeight: 'bold',
    },

})

export default styles