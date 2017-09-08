import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class CollegeTab extends Component {
    static navigationOptions = {
        title: '学院',
    };
    render() {
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