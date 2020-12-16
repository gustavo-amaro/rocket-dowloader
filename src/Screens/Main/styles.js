import {StyleSheet} from 'proton-native';


export default StyleSheet.create({
    mainWindow: {
        width: 700, 
        height: 500, 
        backgroundColor: "#32353b",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    buttonDownload: {
        height: 50,
        minWidth: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: '#8257e6',
        borderRadius: 8
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    urlInput: {
        padding: 6,
        width: '50%',
        borderRadius: 8,
        borderColor: '#8257e6',
        borderWidth: 1,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 12,
        backgroundColor: '#fff',
    }
})
