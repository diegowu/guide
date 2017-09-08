/**
 * Created by guiyongdong on 2017/5/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import DrawerHomePage from './DrawerHomePage';
import DrawerLeftPage from './DrawerLeftPage';

import {DrawerNavigator} from 'react-navigation';

const CustomDrawerContentComponent = (props)=>{
    return(
        <DrawerLeftPage style={styles.container} {...props}>

        </DrawerLeftPage>
    );
};
const Drawer = DrawerNavigator(
    {
        Home:{
            screen:DrawerHomePage,
        }
    },
    {
        drawerWidth:300,
        drawerPosition:'left',
        contentComponent:(CustomDrawerContentComponent),
        contentOptions:{
            activeTintColor: '#e91e63',
            items:["Home"],
            activeItemKey:'abc',
            activeBackgroundColor:'yellow',
            inactiveTintColor:'blue',
            inactiveBackgroundColor:'red',
            onItemPress:((route)=>{
                console.log(route);
            }),
            labelStyle:{
                fontSize:30
            },
            style:{
                marginRight:30
            }
        }
    }
);

export default class DrawerPage extends Component {
    render() {
        return(
            <Drawer/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});