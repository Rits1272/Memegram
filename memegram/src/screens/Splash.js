import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
// import {Splash_Image} from '../assets/splash.png'

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
        // Splash Screen will be visible for 2000ms
        const TIME = 2000;
        const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
        return wait(TIME).then(() => this.props.navigation.navigate(
            "Home"
        ));
    }
    render(){

        // return spalsh image component
          return(  
            <View style = { styles.container }>  
                 <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <Image source={{uri:'https://i.postimg.cc/t1gvzxh0/Asset-1-2x.png'}}  
                    style={{width:'75%', height: '75%', resizeMode: 'contain'}} />  
                </View>  
             </View>
            </View>  
        );  
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },
    //RootView
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
    // ChildView
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        flex:1,  
    }, 
})

