import { Stack } from "expo-router"; 
import { useFonts, Inter_900Black , Inter_600SemiBold, Inter_400Regular} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function RootLayout() {
    const [fontLoaded, fontError] = useFonts({
        Inter: Inter_400Regular,
        InterBold: Inter_900Black,
        InterSemi: Inter_600SemiBold,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });
    useEffect(() => {
        if (fontLoaded || fontError) {
            SplashScreen.hideAsync()
        }
    }, [fontError, fontLoaded]);

    if (!fontLoaded && !fontError) {
        return null;
    }
    return (
        <GestureHandlerRootView style={{flex: 1}}>
    <Stack screenOptions={{ headerStyle: {backgroundColor: "orange"}}}>
        <Stack.Screen name="index" options={{ title: "Devember"}}/>
    </Stack>
    </GestureHandlerRootView>
    );
}