import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import DayListItem from '../component/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

const days = [...Array(24).keys()].map((day, index) => index + 1);

export default function HomeScreen() {
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

    <View style={styles.container}>
      {/* {days.map((day) => (
        <View style={styles.box} key={day}>
          <Text style={styles.text}>{day}</Text>
        </View>
    ))} */}
      <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 10,
    gap: 10,
  },
  column: {
    gap: 10,
  },
});
