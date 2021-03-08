import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


function OnBoardingScreen({ navigation }){
    return (
        <Onboarding
            showSkip={false}
            onDone={() => navigation.navigate("Auth")}
            pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../images/hello_96px.png')} />,
                title: 'Welcome',
                subtitle: 'StockAL are ready to alert you, Stay tuned with us',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../images/notification_100px.png')} />,
                title: 'Notify',
                subtitle: 'Every milisec of cryptocurrentcy price',
            },
    
            ]}
        />
    );
};

export default OnBoardingScreen;