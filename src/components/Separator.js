import React from "react";
import { View, Text } from "react-native";

export default function Separator({children}) {
    return (

         <View className="flex flex-row items-center justify-center">
             <View className="h-px bg-[#CCCCCC] flex-auto"/>
             <Text className="w-auto px-2 text-[#666666]">{children}</Text>
             <View className="h-px bg-[#CCCCCC] flex-auto"/>
         </View>
    )
}