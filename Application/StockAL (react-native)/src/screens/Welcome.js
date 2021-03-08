import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground, 
  TextInput, 
  Image, 
  Dimensions,
  TouchableOpacity,

} from 'react-native';
//import { Avatar, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;


export default class Welcome extends React.Component{
    render(){
        return(
            <View style={{ //Containner
                flex: 1,
                backgroundColor: '#5553bd',
            }}>
                <View style={{ //Header
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    
                    <Animatable.Image
                    animation="bounceIn"
                    duration= {1500} 
                    source={require('../images/Logo.png')}
                    resizeMode='contain'
                    style={{width: height_logo, height: height_logo}}
                    />
                </View>
                <Animatable.View animation="fadeInUpBig" style={{ //Footer
                    flex: 1,
                    backgroundColor: '#FFFFFF',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingVertical: 50,
                    paddingHorizontal: 30,
                }}>

                    <Text style={{fontSize: 30, fontWeight: 'bold', color: '#5553bd'}}>Stay alert with us, StockAL!</Text>
                    <Text>Let's start with 1 click</Text>

                    <View style={{alignItems: 'flex-end',
                       marginTop: 100
                    }}>

                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Auth")}
                        >
                            <LinearGradient
                            colors={['#4c669f', '#3b5998', '#192f6a']} 
                            style={{
                                width: 150,
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 50,
                                flexDirection: 'row'
                            }}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Get Start</Text>
                            </LinearGradient>
                            
                    </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
            
        );
    }
}