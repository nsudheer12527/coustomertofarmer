import getDirections from 'react-native-google-maps-directions';
import React, { Component } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
 
export default class gmapsDirections extends Component {
 
  handleGetDirections = () => {
    const data = {
       source: {
        latitude: 10.9966929,
        longitude: 77.0026833
      },
      destination: {
        latitude: 11.0168,
        longitude: 76.9558
      },
      
      params: [
        {
          key: "travelmode",
          value: "walking"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode 
        }
      ]
    }
 
    getDirections(data)
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleGetDirections} title="LOACTE US" />
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    }
}
)