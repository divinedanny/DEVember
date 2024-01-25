import { Stack } from "expo-router"; 
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';


export default function RootLayout() {
    const [fontLoaded, fontError] = useFonts({
        inter: Inter_900Black,
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
    <Stack screenOptions={{ headerStyle: {backgroundColor: "orange"}}}>
        <Stack.Screen name="index" options={{ title: "Devember"}}/>
    </Stack>
    );
}