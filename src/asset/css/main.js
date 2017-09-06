import React from 'react';
import {
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    rows: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    img: {
        margin: 5,
        padding: 5,
        width: 50,
        height: 50
    },
    red: {
        color: 'red'
    }
});

export default styles;