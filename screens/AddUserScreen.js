import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../database/firebaseDb';

class AddUserScreen extends Component {
    constructor() {
        super();
        this.dbRef = firebase.firestore().collection('users');
        this.state = {
            name: '',
            pincode: '',
            email: '',
            mobile: '',
            isLoading: false
        };
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    storeUser() {
        if (this.state.name === '') {
            alert('Fill at least your name!')
        }
        if (this.state.email === '') {
            alert('Fill your email')
        }
        if (this.state.mobile === '') {
            alert('Fill your mobile no')
        }
        if (this.state.pincode === '') {
            alert('Fill your District pincode  no')
        } else {
            this.setState({
                isLoading: true,
            });
            this.dbRef.add({
                name: this.state.name,
                pincode: this.state.pincode,
                email: this.state.email,
                mobile: this.state.mobile,
            }).then((res) => {
                this.setState({
                    name: '',
                    pincode: '',
                    email: '',
                    mobile: '',
                    isLoading: false,
                });
                alert('your data is recored')
                
            })
                .catch((err) => {
                    console.error("Error found: ", err);
                    this.setState({
                        isLoading: false,
                    });
                });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            )
        }
        return (
            <ScrollView style={styles.container}>
                <View style={styles.inputGroup}>
                    <TextInput
                        placeholder={'Name'}
                        value={this.state.name}
                        onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder={' pincode'}
                        value={this.state.pincode}
                        onChangeText={(val) => this.inputValueUpdate(val, 'pincode')}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder={'Email'}
                        value={this.state.email}
                        onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput
                        placeholder={'Mobile'}
                        value={this.state.mobile}
                        onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Upload your Details'
                        onPress={() => this.storeUser()}
                        color="black"
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AddUserScreen;