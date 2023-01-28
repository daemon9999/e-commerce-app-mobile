import React from 'react';
import {Text, View, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
export default function Details({navigation}) {
  const navigate = useNavigation()

    return (
    <SafeAreaView className="h-full flex overflow-auto flex-nowrap bg-white">
      <View className="h-20">
        <Text>Hello</Text>
      </View>
      <Button onPress={() => navigate.navigate('CartTab')} title="Go to cart"/>
    </SafeAreaView>
  );
}
