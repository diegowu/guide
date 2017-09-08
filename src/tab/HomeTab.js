import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert
} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';
import Planlist from '../component/planlist';
import Plandetail from '../pages/plansdetail';
import styles from '../asset/css/main';


export default class HomeTab extends Component {
    static navigationOptions = {
        title: '首页',
    };


    render() {
        return(
            <View style={styles.container}>
                <Planlist />
            </View>
        )
    }

}

const ModalStack = StackNavigator({
    Home: {
        screen: HomeTab,
    },
    Plansdetail: {
        // path: 'people/:name',
        screen: Plandetail,
    },
});