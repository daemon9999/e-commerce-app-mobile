import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

import Icon from './Icon';
import { heart } from 'icons';
export default function Product({image, name, id, price}) {
  return (
    <TouchableOpacity  className="mb-5 w-[161px] inline-flex justify-center mr-5" activeOpacity={0.9}>
      
      <View className="relative">
        <TouchableOpacity activeOpacity={0.8} className="flex items-center justify-center absolute z-10 top-3 right-3 p-2 rounded-md bg-white">
            <Icon icon={heart} className="text-black" />
        </TouchableOpacity>
        <Image
          source={{
            uri: image,
          }}
          style={{
            width: 161,
            height: 174,
            borderRadius: 10
          }}
        />
      </View>


      <View className="pl-1 mt-2">
        <Text className="font-semibold text-lg text-black mb-1">{name}</Text>
          <Text className="text-sm text-[#666666]">${price}</Text>
      </View>
    </TouchableOpacity>
  );
}
