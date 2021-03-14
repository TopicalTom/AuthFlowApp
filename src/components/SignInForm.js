import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button } from 'react-native-elements';

// Dependencies
import axios from 'axios';
import firebase from 'firebase';

const API_URL = 'https://us-central1-authflow-d763c.cloudfunctions.net';

const SignInForm = () => {
    const [ phone, setPhone ] = useState("");
    const [ code, setCode ] = useState("");

    const handleSubmit = async () => {
        try {
            let { data } = await axios.post(`${API_URL}/verifyOTP`, { phone, code });
            firebase.auth().signInWithCustomToken(data.token);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <SafeAreaView style={{ marginHorizontal: 16, flex: 1 }}>
            <View style={{ marginBottom: 10}}>
                <Input 
                    label="Enter phone number"
                    onChangeText={setPhone}
                    value={phone}
                />
                <Input 
                    label="Enter code"
                    onChangeText={setCode}
                    value={code}
                />
            </View>
            <Button 
                title="Submit"
                onSubmit={handleSubmit} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default SignInForm;