import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout({children}) {
    return (
        <SafeAreaView className="bg-white h-full px-[25px] py-9 flex ">
            {children}
        </SafeAreaView>
    )
}