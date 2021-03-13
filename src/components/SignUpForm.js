import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const SignUpForm = () => {
    const [ phone, setPhone ] = useState();

    const handleSubmit = () => {

    };

    return (
        <SafeAreaView style={{ marginHorizontal: 16, flex: 1 }}>
            <View style={{ marginBottom: 10}}>
                <Input 
                    label="Enter phone number"
                    onChangeText={setPhone}
                    value={phone}
                />
            </View>
            <Button 
                title="Submit"
                onSubmit={handleSubmit} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default SignUpForm;