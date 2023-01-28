import React from 'react';
import { Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Btn from 'components/Btn';
import {arrow_right} from 'icons';

export default function Entry({navigation}) {
 
    

  

  return (
     <SafeAreaView className="flex h-full">
       <View className="flex-auto bg-white relative">
        <Text className="font-black text-[64px] w-full text-black ml-6 mr-[42px]">Define Yourself In Your Unique Way.</Text>
         <View className="absolute top-[120px] right-0">
           <Image
           source={require('../../images/person.png')}
           />
         </View>
       </View>
       <View style={{borderTopColor: 'rgba(0,0,0,0.2)'}} className="h-[101px] border-t bg-white px-6 flex items-center justify-center">
         <Btn bg='bg-black' textColor="text-white" icon={arrow_right} onPress={() => navigation.navigate('Register')}>Get Started</Btn>
       </View>
     </SafeAreaView>
  );
}
