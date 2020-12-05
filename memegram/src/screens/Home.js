import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>HOME SCREEN</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    }
})