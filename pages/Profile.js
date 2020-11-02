
import * as React from 'react';
import  { useState } from "react";
import { Text, View, Button ,Image,StyleSheet,ScrollView,TextInput,TouchableOpacity,Modal,Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SocialIcon } from 'react-native-elements';

function Profile({ route, navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const modalHeader = (
      <View style={styles.modalHeader}>
        <Text style={styles.title}>You suceesfull logged In</Text>
        <View style={styles.divider}></View>
      </View>
    );
    const modalBody = (
      <View style={styles.modalBody}>
        <Text style={styles.bodyText}>
               HAVE JOURNY
        </Text>
      </View>
    );
    const modalFooter = (
      <View style={styles.modalFooter}>
        <View style={styles.divider}></View>
        <View style={{ flexDirection: "row-reverse", margin: 10 }}>
          <TouchableOpacity
            style={{ ...styles.actions, backgroundColor: "#db2828" }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.actionText}>CLose</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
    const modalContainer = (
      <View style={styles.modalContainer}>
        {modalHeader}
        {modalBody}
        {modalFooter}
      </View>
    );
    const modal = (
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View>{modalContainer}</View>
        </View>
      </Modal>
    );
    return (
      <ScrollView>
      <View style={styles.containers}>
        <Text style={styles.headingText}>FTC MEMBER</Text>
        
        <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} style={styles.logo} />
        
  
       
  
        <TextInput placeholder='Enter Your Name' placeholderTextColor="white" style={{ height:40,width:300,
       borderColor: 'white', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
       <TextInput placeholder='Enter Emai id' placeholderTextColor="white" style={{ height:40,width:300,
       borderColor: 'white', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
                  <TextInput placeholder="Password" 
                  placeholderTextColor="white"
              returnKeyType='go'
       secureTextEntry 
             autoCorrect={false}
             style={{ height: 40,width:300, borderColor: 'white', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1 }}
             />
  
       <TouchableOpacity style={{padding:20,backgroundColor:'#FFFFCC',alignItems:'center'}}onPress={() => {
            setModalVisible(true);
          }}>
            <View>
              {modal}
            <Text style={{color:'red',fontWeight:'bold',fontSize: 25,}}>Login</Text>
            </View>
         
       </TouchableOpacity>
       <Text> {'\n'}</Text>
       <Text> {'\n'}</Text>
       <Text style={{color:'white'}}>................................. </Text>
       <Text style={{color:'white'}}>** SIgnup ** </Text>
       <Text> </Text>
       <View>
       <View style={{ padding: 20 }}>
          <SocialIcon
            style={{ height: 60, width: 220 }}
            title="Sign In With Facebook"
            button
            type="facebook"
            onPress={ ()=> Linking.openURL('https://www.facebook.com/') }
          />
        </View>
        <View style={{ padding: 20 }}>
          <SocialIcon
            style={{ height: 60, width: 220 }}
            title="Sign In With Google"
            button
            type="google-plus-official"
            onPress={ ()=> Linking.openURL('https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp') }
          />
        </View>
       </View>
          <Text style={styles.taglineText}>    LETS`S REACH THE Farmer   </Text>
      </View>
      </ScrollView>
        
    );
      
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: 'white',
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
      backgroundColor: "white"
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
  export default Profile;
  