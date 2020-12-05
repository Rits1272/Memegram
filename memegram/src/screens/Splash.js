import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Splash extends Component{
    async componentDidMount(){
        const data = await this.navigatetoHome();
        if(data != null){
            this.props.navigation.navigate(
                "Home",
            )
        }
    }

    navigatetoHome = async () => {
        // Splash Screen will be visible for 2s
        const TIME = 2000;
        const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
        return wait(TIME).then(() => this.props.navigation.navigate(
            "Home"
        ));
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>SPLASH SCREEN</Text>
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