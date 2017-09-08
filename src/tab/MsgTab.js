import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class MsgTab extends Component {
    static navigationOptions = {
        title: '放飞',
    };
    render() {
        console.log('render');
        return(
            <View style={styles.container}>
                <Text>HomeTab发动啊发打算</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});