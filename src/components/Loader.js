import React, {useEffect} from 'react';
import {Text, Image, View, SafeAreaView} from 'react-native';
import {auth} from 'config/firebase_config';
import {onAuthStateChanged} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
export default function Loader() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(auth, user => {
        if (user){
          navigation.replace("Main")
        } else{
          navigation.replace("Auth")
        }
      })
    })
  }, [])
  return (
    <SafeAreaView className="bg-white h-full flex items-center justify-center">
      <View className="w-40 h-40 mb-6">
        <Image
          source={require('../images/brand.png')}
          className="h-full w-full"
        />
      </View>
      <View>
        <Text style={{letterSpacing: 6}} className="text-4xl tracking-widest  font-extrabold text-black">
          BUY TOGETHER
        </Text>
       
      </View>
    </SafeAreaView>
  );
}
