import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from '../asset/css/main';

export default class MineTab extends Component {
    static navigationOptions = {
        title: '我的',
    };
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.red}>我的 ProfileTab</Text>
            </View>
        )
    }
}

