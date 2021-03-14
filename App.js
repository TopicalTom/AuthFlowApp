import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Components
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';

const App = () => {
    return (
        <SafeAreaProvider>
            <SignUpForm />
            <SignInForm />
        </SafeAreaProvider>
    );
};

export default App;

