// React Navigate Drawer with Bottom Tab – Example using React Navigation V5 //

import * as React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { SocialIcon } from 'react-native-elements';


import { Text, View,Image,StyleSheet,ScrollView ,SafeAreaView,Animated,Linking} from 'react-native';

export default class Sudheer extends React.Component {
  state = {
    height: new Animated.Value(100), // Initial value for opacity: 0
    width: new Animated.Value(100), // Initial value for opacity: 0
  };
  componentDidMount() {
    Animated.timing(
      this.state.width, // The animated value to drive
      {
        toValue: 400, // Animate to opacity: 1 (opaque)
        duration: 350, // Make it take a while
      }
    ).start(); // Starts the animation
    Animated.timing(
      this.state.height, // The animated value to drive
      {
        toValue: 450, // Animate to opacity: 1 (opaque)
        duration: 1200, // Make it take a while
      }
    ).start(); // Starts the animation
    setTimeout(function() {
    }, 12000);
  }
  

  render() {
    let { height } = this.state;
    let { width } = this.state;
    return (
      
      <ScrollView>
       <View style={styles.container}>
        <Animated.Image
          style={styles.tinyLogo}
            source={require('C:/Users/nsudh/Desktop/ReactNative/tppro/assets/p1.jpg')}  
            style={{width: width, height: height,position: 'absolute',}}
          />
        </View>
        <View>
        <Text>
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}

        {'\n'}

        {'\n'}
        {'\n'}

        {'\n'}
        {'\n'}


        {'\n'}
        {'\n'}

        {'\n'}
        {'\n'}
        </Text>
        </View>
        <View>
        <Text style={styles.baseText}>ABOUT US :
           {"\n"}
           {"\n"}
           {"\n"}
        </Text>
        <Text style={styles.titleText}>
              FTC stands for(Farmer to customer),
              {"\n"}
              ,It is developed by students of kl university hyderadad
              {"\n"}
              the app does not collect any personal information
              {"\n"}
              of any customer and it only just collect the farmer mobile no
              {"\n"}
              and help the Faremer to coonect to the customer
              {"\n"}
              AND Data given by the farmer is not used and kept in 
              {"\n"}
              priviate
              {"\n"}
              {"\n"}
              {"\n"}
  
  
           
          
          For more updates do follow our Instagram page:
          <SocialIcon

button
color='red'
title="Do follow"


type="instagram"

onPress={() => Linking.openURL('https://www.instagram.com/reddy_sudher/?hl=en')}
/> 
{'\n'}
{'\n'}
{'\n'}
{'\n'}
 
For more updates do follow our Youtube page:

<SocialIcon

button

title="Do Subscribe"

type="youtube"

onPress={() => Linking.openURL('https://youtu.be/8IZNYD2Gp0k')}
/> 
          </Text>
          </View>
          </ScrollView>
       
  
      
    );
}
}
                                      
const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      paddingRight: 5,
      position: 'relative',
      
  
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    baseText: {
      fontSize: 35,
      fontFamily: "monospace",
      color:'#000000'
      
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      color:'#CD5C5C'
    },
    jump: {
      backgroundColor: "white"
    },
  });
  console.disableYellowBox = true;

