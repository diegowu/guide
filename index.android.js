import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Image,
    FlatList,
} from 'react-native';

import {StackNavigator, TabNavigator ,DrawerNavigator} from 'react-navigation';
import TabBar from './src/tab/TabBar';
// import Drawer from './src/drawer/DrawerPage';
import styles from './src/asset/css/main';

export default class reactNavigationDemo extends Component {
    render() {
        return (
                <TabBar />
        );
    }
}


AppRegistry.registerComponent('react_guide', () => reactNavigationDemo);
