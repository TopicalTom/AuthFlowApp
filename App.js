import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Dependencies
import firebase from 'firebase';

// Components
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';

const App = () => {

    useEffect(() => {
        // Config object from firebase
    }, []);

    return (
        <SafeAreaProvider>
            <SignUpForm />
            <SignInForm />
        </SafeAreaProvider>
    );
};

export default App;

