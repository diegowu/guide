import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from '../asset/css/main';

export default class ProfileTab extends Component {
    render() {
        console.log('render');
        return(
            <View style={styles.container}>
                <Text style={styles.red}>我的 ProfileTab</Text>
            </View>
        )
    }
}

