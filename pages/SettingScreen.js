import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import  { useState } from "react";
import { Text, View, Button ,Image,StyleSheet,ScrollView,TextInput,TouchableOpacity,ImageBackground,Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import data from '../screens/AddUserScreen'


function HomeScreen({ route, navigation }) {
  return (
    <View>
      <ScrollView>
    
    <View style={{backgroundColor:'white',marginBottom:20}}>
    <Text style={{fontWeight:'bold',fontSize:50,textShadowColor:'white'}}>VEGETABLES</Text>
    </View>
    
    <View style={{ height: 150
      }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    
    <View
      style={{
        height: 500,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
       
      <TouchableOpacity onPress={() => { navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
          
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/vegetable.jpg")}
            PlaceholderContent={<ActivityIndicator />}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
          
        </View>
    
      </TouchableOpacity>
      
    </View>
    
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
          
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/leafy.jpg")}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          <Text>Leafy vegetable</Text>
          
        </View>
      </TouchableOpacity>
    </View>
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
         
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/Root.jpg")}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
        </View>
      </TouchableOpacity>
    </View>
      </ScrollView>
      </View>
      <View style={{backgroundColor:'white',marginBottom:20}}>
    <Text style={{fontWeight:'bold',fontSize:50,textShadowColor:'white'}}>FRUITS</Text>
    </View>
    
    <View style={{ height: 150
      }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
          
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/Apple.jpg")}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
        </View>
      </TouchableOpacity>
    </View>
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
          
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/banana.jpg")}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
        </View>
      </TouchableOpacity>
    </View>
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
         
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/graps.jpg")}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
        </View>
      </TouchableOpacity>
    </View>
      </ScrollView>
      </View>
      <View style={{backgroundColor:'white',marginBottom:20}}>
    <Text style={{fontWeight:'bold',fontSize:50,textShadowColor:'white'}}>RICE</Text>
    </View>
    
    <View style={{ height: 150
      }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
          
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/paddy.jpg")}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
        </View>
      </TouchableOpacity>
    </View>
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
          
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/Rice.jpg")}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
        </View>
      </TouchableOpacity>
    </View>
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
         
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/Basmati.jpg")}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
        </View>
      </TouchableOpacity>
    </View>
      </ScrollView>
      </View>
      <View style={{backgroundColor:'white',marginBottom:20}}>
    <Text style={{fontWeight:'bold',fontSize:50,textShadowColor:'white'}}>Oraganic Food</Text>
    </View>
    
    <View style={{ height: 150
      }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
          
          <ImageBackground
            source={require('C:/Users/nsudh/Desktop/ReactNative/tppro/assets/banana.jpg')}
            
            
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
        </View>
      </TouchableOpacity>
    </View>
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
          
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/Basmati.jpg")}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
        </View>
      </TouchableOpacity>
    </View>
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 10,
        margintop:10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => {navigation.navigate('Details');}}>
        <View
          style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}
        >
         
          <ImageBackground
            source={require("C:/Users/nsudh/Desktop/ReactNative/tppro/assets/Rice.jpg")}
            style={{ height: 150, width: 200 }}
            imageStyle={{ borderRadius: 10 }}
          />
          
        </View>
      </TouchableOpacity>
    </View>
      </ScrollView>
      </View>
      </ScrollView>
      </View>
    
      
    
  );
}
function Learn({route, navigation}) {
    return(
        <View
        style={{
            height: 150,
            width: 200,
            borderRadius: 10,
          }}>
        <Text styles={{fontSize:50}}>FORM  WILL BE FOLATED SONN </Text>
        </View>
    );

  
}

function Makeit({ route, navigation }) {
  return (
     <ScrollView>
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center' }}>
            Attractive Social Icons from React Native Elements
          </Text>
         
                 <View>
                      <Text style={styles.headingText}>Ftc</Text>
      
                       <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} style={styles.logo} />
      

                  <TouchableOpacity
               onPress={() => alert('You can pick a photo from your mobile!')}
                  style={{ backgroundColor: '#CE93D8',borderColor:'violet',borderRadius:20,borderWidth:1,width:300,alignItems:'center' }}>
              <Text style={{ fontSize:20, color: '#fff' }}>Select your own image!</Text>
                 </TouchableOpacity>

                <TextInput placeholder='Enter Your Name' placeholderTextColor="violet" style={{ height:40,width:300,
                    borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
                 <TextInput placeholder='Enter Emai id' placeholderTextColor="violet" style={{ height:40,width:300,
                  borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
                <TextInput placeholder="Password" 
                placeholderTextColor="violet"
                   returnKeyType='go'
                 secureTextEntry 
                   autoCorrect={false}
                    style={{ height: 40,width:300, borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1 }}
                      />

             <Button
                color="#EC407A"
                   title="signup" onPress={() => Alert.alert('u r signed up!')} />
                   <Text style={styles.taglineText}>  Framer to customer  </Text>
                </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="google"
                  onPress={ ()=> Linking.openURL('https://mail.google.com/mail/u/0/#inbox') }

                  
                />
                <Text style={{ textAlign: 'center' }}>etsy</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="facebook"
                  onPress={ ()=> Linking.openURL('https://www.facebook.com/') }

                />
                <Text style={{ textAlign: 'center' }}>facebook</Text>
              </View>
            </View>
            
            <View style={{flex: 1,
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'center',width:'100%'}}>
                <SocialIcon
                  type="github-alt"
            onPress={ ()=> Linking.openURL('https://github.com/login?return_to=%2FPipedreamHQ%2Fpipedream%2Fblob%2Fmaster%2Fcomponents%2Fgithub%2Freadme.md%3Fgclid%3DCjwKCAjw5Kv7BRBSEiwAXGDEldH0wdaReT2evWqA-BUdLfqFUq7F2CMfaFte5uZwrnIUFD7AEmf78RoCFx4QAvD_BwE') } 
                  
                />
              </View>
    
      </ScrollView>
    
  );
    
}

const styles = StyleSheet.create({
   MainContainer: {
        flex: 1,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA',
      },
  container: {
    paddingTop: 40,
    paddingRight: 5,

  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  baseText: {
    fontSize: 35,
    fontFamily: "monospace",
    color:'blue'
    
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color:'black'
  },
  jump: {
    backgroundColor: "#808080"
  },
  containers: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  headingText: {
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    padding:20,
    justifyContent: 'center',

  },
  taglineText: {
    fontSize:15,
    fontWeight:'bold',
    color:'yellow',
    paddingTop:50,
    
  
    
  },
});



const Stack = createStackNavigator();

export default function SettingScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={data} />
        <Stack.Screen name="Sum" component={Makeit} />
      </Stack.Navigator>
  );
}