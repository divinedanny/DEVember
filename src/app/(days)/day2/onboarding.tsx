import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, Link, router } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutLeft } from 'react-native-reanimated';



const OnBoardingDetails = [
    {
    icon: 'run-fast',
    title: "Track your fitness progress",
    description: "Track fitness Progress with move forward. Make your body look good after you have taken a lovey run and trwacking your success.",
    },
    {
        icon: 'weight-lifter',
        title: "Improve your routine",
        description: "Make yourself better by changing your routinge to improve your overall effectiveness and control your growth speed.",
    },
    {
        icon: 'timer-sand',
        title: "Time your workouts",
        description: "Another factor to improve is time. Time your workouts to see how long you can go for and how much you can improve. Achieve your goals with less time.",
    },

]


function OnBoardingScreen() {
    const [currentOnBoarding, setCurrentOnBoarding] = useState(0);
    const data = OnBoardingDetails[currentOnBoarding];

    const onContinue = () => {
        const nextOnBoarding = currentOnBoarding === OnBoardingDetails.length - 1;
        if (nextOnBoarding) {
            endOnboarding();
        } else {
            setCurrentOnBoarding(currentOnBoarding + 1);
        }
    }
    const onBack = () => {
        const FirstOnBoarding = currentOnBoarding === 0;
        if (FirstOnBoarding) {
            endOnboarding();
        } else {
            setCurrentOnBoarding(currentOnBoarding - 1);
        }
    }
    const endOnboarding =() => {
        setCurrentOnBoarding(0);
        router.back();
    }

    const swipe = Gesture.Race(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
    );

  return (
    <SafeAreaView style= {style.page}>

        <Stack.Screen options={{headerShown: false}} />
        <StatusBar style="light" />
          <View style={style.stepIndicatorContainer}>
              {OnBoardingDetails.map((step, index) => {
                  return (
                      <View style={[style.stepIndicator, { backgroundColor: index === currentOnBoarding ? "#CEF202" : 'transparent' }]} key={index}></View>
                  );
              })}
          </View>
        <GestureDetector gesture={swipe}>
            <Animated.View key={currentOnBoarding} entering={FadeIn.duration(500)} exiting={FadeOut} style={style.pageContent}>
                
                <MaterialCommunityIcons 
                    style={style.image} 
                    name={data.icon} 
                    size={200}
                    color="#CEF202" />
                <View style={style.footer}>
                    <Animated.Text style={style.title} entering={SlideInRight.duration(500)} exiting={SlideOutLeft}>{data.title}</Animated.Text>
                    <Animated.Text style={style.description} entering={SlideInRight.duration(500)} exiting={SlideOutLeft}>{data.description}</Animated.Text>
                        <View style={style.buttonsRow}>
                            <Pressable onPress={endOnboarding}>
                                <Text style={style.buttonText}>Skip</Text>
                            </Pressable>
                            <Pressable onPress={onContinue} style={style.button}>
                                <Text style={style.buttonText}>Continue</Text>
                            </Pressable>
                            </View>
                </View>
            </Animated.View>
        </GestureDetector>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    page: {

        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#15141A"
    },
    pageContent:{
        padding: 10,
        flex: 1,
    },
    stepIndicatorContainer: {
        flexDirection: 'row',
        gap:2,
    },
    stepIndicator:{
        flex: 1,
        height: 3,
        backgroundColor: "#CEF202",
        borderRadius: 10,
    },
    title: {
        color: 'white',
        fontWeight: '700',
        fontSize: 40,
        fontFamily: "InterBold",
        letterSpacing: 1.5,
        marginVertical: 20,
        
        // align Self: 'center',
    },
    image: {
        alignSelf: 'center',
        margin: 25,
    },
    description: {
        color: 'grey',
        fontSize: 15,
        fontFamily:"InterSemi",
        lineHeight: 27,
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    button: {
        backgroundColor: "#302E38",
        borderRadius: 40,
        alignItems: 'center',
        flex: 1,

    },
    buttonText: {
        fontSize: 20,
        fontFamily: "InterSemi",
        color: 'white',
        padding: 15,
        paddingHorizontal: 30,
    },
    footer:{
        marginTop:'auto',
    }
})

export default OnBoardingScreen