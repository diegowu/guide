import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Image,
    FlatList,
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';
import Index from './src/component/index_list_item';
import moves from './movie';
import TabBar from './src/tab/TabBar';
import styles from './src/asset/css/main';

class ChatScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `内容页 ${navigation.state.params.user}`,
    });

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

class HomeScreen extends Component {
    static navigationOptions = {
        title: '首页',
    };

    static list_item(item) {
        return (
            <View style={styles.rows}>
                <Image
                    style={styles.img}
                    source={{uri: item.cover}}
                />
                <View>
                    <Text>{item.title}</Text>
                    <Text style={styles.red}>{item.rate}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <TabBar />

        );
    }

}

class DetailScreen extends Component {
    static navigationOptions = {
        title: '详情页',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Index type="company" typename="企业"/>
                <Button onPress={() => navigate('Chat', {user: 'diego'})}
                        title="出团计划"/>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
    Detail: {screen: DetailScreen},
});



AppRegistry.registerComponent('react_guide', () => SimpleApp);
