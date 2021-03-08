import React from 'react';
import {
  View,
  Text,
  ImageBackground, 
  TextInput, 
  Image, 
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default class Home extends React.Component{
    render(){
        return(

            <View style={{
                flex: 1,
                backgroundColor: '#5553bd',
            }}>
                <Animatable.View
                    animation="bounceIn"
                    duration= {1500} 
                    animation="bounceIn"
                    duration= {1500}  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Icon
                       name='login'
                       type='antdesign'
                       size= {125}
                       color= 'white'
                    />
                </Animatable.View>

                <Animatable.View animation="fadeInUpBig"
                 style={{
                    flex:0.5,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius:30,
                    alignItems: 'center',
                    //justifyContent: 'center'
                }}>

                    <View  
                    style={{
                        flexDirection: 'column', 
                        alignItems: "center",//backgroundColor: 'red'
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}
                                style={{flexDirection: 'row',
                                justifyContent: "center",
                                height: 55,
                                width: 316,
                                borderTopLeftRadius:20,
                                borderTopRightRadius:20,
                                borderBottomLeftRadius:20,
                                borderBottomRightRadius:20,
                                backgroundColor: "white",
                                marginTop: 50,
                                shadowColor: "#000",
                                shadowOffset: {width: 0, height: 2,},
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}>
                                <Text style={{fontSize: 15,fontWeight: 'bold',color: 'black',textAlign: 'left', marginLeft: 15, marginTop: 15}}>Continue with Google</Text>
                                <Icon name='google'
                                        type='antdesign'
                                        size= {30}
                                        color= 'black'
                                        style={{marginLeft: 65, marginTop: 10}}
                                    />
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}
                                style={{flexDirection: 'row',
                                justifyContent: "center",
                                height: 55,
                                width: 316,
                                marginTop: 20,
                                borderTopLeftRadius:20,
                                borderTopRightRadius:20,
                                borderBottomLeftRadius:20,
                                borderBottomRightRadius:20,
                                backgroundColor: "#37549f",
                                shadowColor: "#000",
                                shadowOffset: {width: 0, height: 2,},
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                                
                                }}>

                                    <Text style={{fontSize: 15,fontWeight: 'bold', color: 'white', textAlign: 'left', marginLeft: 15, marginTop: 15}}>Continue with Facebook</Text>
                                    <Icon name='facebook-square'
                                        type='antdesign'
                                        size= {30}
                                        color= 'white'
                                        style={{marginLeft: 50, marginTop: 10}}
                                    />
                            </TouchableOpacity>
                        

                    </View> 
                </Animatable.View> 
            </View> //Container

        );
    }
}

const styles = StyleSheet.create({
    title: {
        
    }
});