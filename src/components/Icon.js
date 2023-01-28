import React from "react";
import { SvgXml } from "react-native-svg";

export default function Icon({size=24, icon, ...props}) {
    return (
        <SvgXml xml={icon} width={size} height={size} {...props}/>
    )
}