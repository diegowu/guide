import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class CarTab extends Component {
    static navigationOptions = {
        title: '汽车',
    };
    render() {
        console.log('render');
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Home')
                }}>
                <Text>CarTab</Text>
                </TouchableOpacity>
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