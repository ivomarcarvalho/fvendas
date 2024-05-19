import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63C2D1',

    },
    containerHeader: {
        marginTop: '8%',
        marginBottom: '8%',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold',
    },
    containerForm: {
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#ffffff',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    label: {
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 12,
        height: 40,
        fontSize: 16,
        marginTop: 5,
    }

})
export default styles