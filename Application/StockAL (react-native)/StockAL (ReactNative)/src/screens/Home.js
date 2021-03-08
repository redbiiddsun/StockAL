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
import { Avatar, Icon } from 'react-native-elements';


export default class Home extends React.Component{
    render(){
        return(
            <ImageBackground 
              source={require("../images/back.png")}
              style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
            >
                <View style={{
                    flexDirection:"row",
                    marginTop: 40,
                    alignItems: "center",
                    paddingHorizontal: 40,
                }}>
                    <Icon
                       name='menu'
                       type='Entypo'
                       size= {33}
                    />
                    
                    <Avatar
                        size="medium"
                        rounded
                        containerStyle= {{ marginLeft: 220 }}
                        source={{
                            uri:
                              'https://i.ibb.co/fHMjW5g/uncle-roger-reaction-rice-bbc-uncleroger-youtube-video-850x567.jpg',
                          }}
                        iconStyle={{ marginLeft: 220 }}
                    />
                </View>
                <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
                    <Text style={{
                        fontSize: 40,
                        fontFamily: 'Roboto-Bold',
                        color: "#522289",}}>
                            Hello
                        </Text>

                    <Text style={{fontSize: 15,
                        fontFamily: 'Roboto-Regular',
                        color: "#522289",}}>
                            Welcome to StockAL, This is a Cryptocurrency Alert Application
                    </Text>    
                    
                    <View style={{
                        flexDirection: "row",
                        backgroundColor: "#FFF",
                        borderRadius: 40,
                        alignItems: "center",
                        paddingVertical: 2,
                        paddingHorizontal: 20,
                        marginTop: 30,}}>

                        <Image 
                        source={require("../images/search.png")}
                        style={{ height: 14, width: 14 }}/>

                        <TextInput 
                        placeholder="Search Cryptocurrency"
                        style={{  fontSize: 15, color: "#ccccef" }}
                        />
                    </View>

                    <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginRight: -40, marginTop: 30 }}
                    >
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Detail")}
                        style={{alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#E8E5E4",}}
                        >
                            <Image source={require("../images/binance.png")}
                                   style={{ height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Auth")}
                        style={{alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#E8E5E4",
                                marginLeft: 15}}
                        >
                            <Image source={require("../images/bitkub.png")}
                                   style={{ height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Detail")}
                        style={{alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#E8E5E4",
                                marginLeft: 15}}
                        >
                            <Image source={require("../images/satangprocrop.png")}
                                   style={{ height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                        
                    </ScrollView>





                </View>
                
            </ImageBackground>

        );
    }
}