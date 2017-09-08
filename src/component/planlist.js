import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Alert,
    StyleSheet,
    FlatList
} from 'react-native';

import movies from '../../movie';

export default class Planlist extends Component {

    render() {
        return (
            <FlatList
                data={movies}
                renderItem={({item})=>{
                    return (
                    <View style={styles.container}>
                        <Text style={this.props.type}>{this.props.typename}</Text>
                        <Text style={styles.title}
                            onPress={()=>{
                                return this.props.navigation.navigate('Home');
                                // alert(1)
                            }}
                        >{item.title} {this.props.type}</Text>
                        <Text style={styles.date}>2017-08-11(周五) - 2017-08-19(周六)</Text>
                        <View style={styles.lastline}>
                            <Text>27人(23成人4儿童)</Text>
                            <Text style={{marginLeft: 15}} onPress={
                                ()=>Alert.alert('已结束','已结束,没什么好点的!')
                            }>已结束</Text>
                        </View>
                    </View>
                    )
                }}
            />

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 2,
        margin: 5,
        alignItems:'flex-start'
    },
    member: {
        color: "#fff",
        backgroundColor: "red",
        padding: 3,
        borderRadius: 5,
        margin: 3
    },
    company: {
        color: "#fff",
        backgroundColor: "blue",
        padding: 3,
        borderRadius: 5,
        margin: 3
    },
    title: {
        color: '#000000',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        width:'100%'
    },
    date: {
        color: 'gray'
    },
    lastline: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});