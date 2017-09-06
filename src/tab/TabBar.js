/**
 * Created by guiyongdong on 2017/5/21.
 */
import React,{Component} from 'react';
import {
    Image
} from 'react-native';
import {TabNavigator,TabBarBottom,TabBarTop} from 'react-navigation';
import HomeTab from './HomeTab';
import CarTab from './CarTab';
import ProfileTab from './ProfileTab';

const Tab = TabNavigator(
    {
        Home:{
            screen:HomeTab
        },
        Car:{
            screen:CarTab
        },
        Profile:{
            screen:ProfileTab,
            navigationOptions:({navigation})=>({
                tabBarLabel:'我的'
            }),
        }
    },
    {
        // tabBarComponent:TabBarBottom,
        // tabBarPosition:'top',
        swipeEnabled:true,
        animationEnabled:false,
        lazy:true,
        initialRouteName:'Profile',
        order:(['Home','Car','Profile']),
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
            indicatorStyle:'green',
            pressColor:'#823453',
            pressOpacity:0.8,
            scrollEnabled:true,
            tabStyle:{
                height:24,
                width:100
            },
            style:{
                backgroundColor:'red'
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


