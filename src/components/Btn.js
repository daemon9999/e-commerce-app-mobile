import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

export default function Btn({
  bg,
  textColor,
  icon,
  reverse = true,
  size = 24,
  children,
  ...props
}) {
  return (
  
      
    
     <TouchableOpacity
       activeOpacity={0.7}
    
       className={'h-[58px] disabled:opacity-20 flex flex-row items-center justify-center rounded-[10px] w-full ' + bg + (reverse ? "" : " flex-row-reverse")}
       {...props}>
       <Text
         className={
           'font-semibold mr-[10px] ' + textColor + (reverse ? ' mr-[10px]' : ' ml-[10px]')
         }>
         {children}
       </Text>
       {icon && (
         <SvgXml xml={icon} height={size} width={size} />
       )}
     </TouchableOpacity>
  );
}
