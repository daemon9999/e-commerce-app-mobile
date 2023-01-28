import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Animated,
} from 'react-native';
import {logout} from 'config/firebase_config';
import {SafeAreaView} from 'react-native';
import {bell, search, filterLines} from 'icons';
import Icon from 'components/Icon';
import {Badge} from 'react-native-paper';
import CategoryList from 'components/CategoryList';
import ProductList from 'components/ProductList';
export default function Home({navigation}) {
  const AnimatedHeaderValue = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(AnimatedHeaderValue, 0, 1);

  const translateY = diffClamp.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -300],
  });

  const logoutHandle = async () => {
    await logout();
    navigation.replace('Auth');
  };

  return (
    <SafeAreaView className="bg-white h-full  py-9 flex">
      <View className="flex flex-row justify-between items-center mb-3 px-6">
        <Text className="text-[32px] font-bold text-black">Discover</Text>
        <TouchableOpacity activeOpacity={0.8} className="relative w-6 h-6">
          <Icon icon={bell} className="text-black" />
          <Badge
            size={12}
            className="absolute top-0 right-0 bg-black text-white font-bold">
            1
          </Badge>
        </TouchableOpacity>
      </View>
      <View>
        <View className="flex px-6 flex-row items-center mb-4">
          <View className="flex-auto  mr-2 relative ">
            <View className="absolute top-0 left-0 flex items-center h-14 w-14 justify-center">
              <Icon icon={search} className="text-black" />
            </View>

            <TextInput
              className="rounded-[10px] bg-[#F2F2F2] -z-10 h-14 px-12"
              placeholder="Search anything"
              placeholderTextColor={'rgba(0,0,0,0.6)'}
              cursorColor={'rgba(0,0,0,0.6)'}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-black p-4 rounded-[10px]">
            <Icon icon={filterLines} className="text-white" />
          </TouchableOpacity>
        </View>
       
         
          <CategoryList />
   
      </View>
      <ProductList AnimatedHeaderValue={AnimatedHeaderValue} />
    </SafeAreaView>
  );
}
