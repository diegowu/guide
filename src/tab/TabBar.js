/**
 * Created by guiyongdong on 2017/5/21.
 */
import React,{Component} from 'react';
import {
    Image
} from 'react-native';
import {TabNavigator,TabBarBottom,TabBarTop} from 'react-navigation';
import HomeTab from './HomeTab';
import MsgTab from './MsgTab';
import CollegeTab from './CollegeTab';
import MineTab from './MineTab';

const Tab = TabNavigator(
    {
        Home: {screen: HomeTab},
        Msg: {screen: MsgTab},
        College: {screen: CollegeTab},
        Mine: {screen: MineTab},
    },
    {
        // tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:true,
        animationEnabled:false,
        lazy:true,
        initialRouteName:'Home',
        order:(['Home','Msg','College','Mine']),
        backBehavior:'none',
        tabBarOptions:{
            activeTintColor:'white',
            inactiveTintColor:'yellow',
            showIcon:false,
            showLabel:true,
            upperCaseLabel:false,
            labelStyle:{
                fontSize:12
            },
            // indicatorStyle:'green',
            // pressColor:'#823453',
            pressOpacity:0.8,
            scrollEnabled:true,
            tabStyle:{
                height:24,
                width:100
            },
            style:{
                // backgroundColor:'red'
            }
        }
    }
);

export default class TabBar extends Component {
    render() {
        return(
              <Tab />
        );
    }

}


