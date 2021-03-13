import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Components
import SignUpForm from './src/components/SignUpForm';

const App = () => {
    return (
        <SafeAreaProvider>
            <SignUpForm />
        </SafeAreaProvider>
    );
};

export default App;

