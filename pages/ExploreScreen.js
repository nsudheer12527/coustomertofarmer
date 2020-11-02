import * as React from 'react';
import  { useState } from "react";
import { Text, View, Button ,Image,StyleSheet,ScrollView,TextInput,TouchableOpacity,ImageBackground,Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SocialIcon } from 'react-native-elements';
import data from '../screens/UserScreen'
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
       <Image style= {styles.tinyLogo} source={require('C:/Users/nsudh/Desktop/ReactNative/tppro/assets/farmer.jpg')}
               />
    <Image style= { styles.backgroundImage }  source={require('C:/Users/nsudh/Desktop/ReactNative/tppro/assets/sudheer_back.jpg')}
               />
      <Button
        title="REAch THE FARMER"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Sum');
        }}
      />
      <Text>
      {"\n"}
      {"\n"}
      {"\n"}
      {"\n"}
      </Text>
       <Button
        title="LEARN HOE TO USE"
        color="#f194ff"
        onPress={() => {
          /* 1. Navigate to the sum route with params */
          navigation.navigate('use');
        }}
      />
     </View>
    
  );
}
function Biryani({route, navigation}) {
  return (
    <ScrollView style={styles.jump}>
     <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
          source={require('C:/Users/nsudh/Desktop/ReactNative/tppro/assets/p1.jpg')}  
          style={{width: 500, height: 400 }}
        />
      </View>
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


         
        </Text>

    </ScrollView>
      
  );
}

function PUlliohara({ route, navigation }) {
 return(
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
      <Text styles={{fontSize:50}}>DATA NOT AT FOUND (PLEASE TRY WITHIN IN DYAS</Text>
      </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  tinyLogo: {
    width: 200,
    height: 200,
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
    backgroundColor: "black"
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
  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3
},
modal: {
  backgroundColor: "#00000099",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
},
modalContainer: {
  backgroundColor: "#f9fafb",
  width: "80%",
  borderRadius: 5,
},
modalHeader: {height:200},
title: {
  fontWeight: "bold",
  fontSize: 20,
  padding: 15,
  color: "#000",
},
divider: {
  width: "100%",
  height: 1,
  backgroundColor: "lightgray",
},
modalBody: {
  backgroundColor: "#fff",
  paddingVertical: 20,
  paddingHorizontal: 10,
},
modalFooter: {},
actions: {
  borderRadius: 5,
  marginHorizontal: 10,
  paddingVertical: 10,
  paddingHorizontal: 20,
},
actionText: {
  color: "#fff",
},
});



const Stack = createStackNavigator();

export default function SettingScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="use" component={Biryani} />
        <Stack.Screen name="Sum" component={PUlliohara} />
        <Stack.Screen name="Details" component={data} />
      </Stack.Navigator>
  );
}