import React, { useEffect, useState } from 'react';
import { NativeModules, SafeAreaView, View, StyleSheet, Text, BackHandler, ToastAndroid } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, FadeOut, Easing, FadeInUp } from 'react-native-reanimated';

const { DetectionModule } = NativeModules;

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);


const SplashScreen = () => {
  const sv = useSharedValue(0);
  const scale = useSharedValue(1);

  
  const scaleStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    scale.value = withTiming(scale.value * 2, { duration: 1000 });
    sv.value = withTiming(1, { duration, easing });

    // Get data from kotlin
    DetectionModule.getDetectionReport()
      .then(report => {
        console.log("Report ---> ", report);
        if (report === true) {
          BackHandler.exitApp();
        }

      })
      .catch(error => console.error("Error fetching detection report: ", error));

    DetectionModule.getPesan()
      .then(msg => {
        console.log("Pesan ----> ", msg);
        ToastAndroid.show(msg, ToastAndroid.SHORT);
      })
      .catch(error => console.error("Error fetching pesan: ", error));

    
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.imageContainer}>
        <Animated.Image
          style={[style.image, scaleStyles]}
          source={require('../assets/images/rml-logo.png')}
          resizeMode={'center'}
        />
      </View>
      <View style={style.textContainer}>
        <Animated.Text
          entering={FadeInUp.delay(1000)}
          exiting={FadeOut}
          style={style.text}>
          RML Demo
        </Animated.Text>
      </View>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  imageContainer: { justifyContent: 'center', alignItems: 'center' },
  image: {
    height: 280,
    width: 270,
    position: 'absolute',
  },
  textContainer: {
    marginTop: 40,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Manrope-Medium',
    letterSpacing: 1.3,
  },
});

export default SplashScreen;
