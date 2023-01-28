import React, {useEffect, useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useField} from 'formik';

export default function Input({label, children, type = 'text', ...props}) {
  const [field] = useField(props);
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type)
 
  useEffect(() => {
    if(show) {
        setInputType('text')
    } else if (type === 'password'){
        setInputType('password')
    }
  }, [show])

  return (
    <View className="flex gap-y-[5px] mb-5 relative">
      <Text className="text-black font-semibold text-[18px]">{label}</Text>
      <TextInput
        className="w-full h-[53px] px-[22px]  bg-[#F2F2F2]  text-black rounded-[10px]"
        placeholder={children}
        cursorColor="black"
        placeholderTextColor="#616161"
        secureTextEntry={inputType === 'password' ? true : false}
        autoCapitalize={label === 'Email' && 'none'}
        {...props}
      />

       {field?.value && type === 'password' && (
         <TouchableOpacity activeOpacity={1} onPress={() => setShow(show => !show)} className="absolute flex items-center justify-center bottom-0 right-0 h-[53px] w-[53px]">
           {show ? (<Icon name="eye-off" color="black" size={24} />) : (<Icon name="eye" color="black" size={24} />)}
         </TouchableOpacity>
       )}
     </View>
  );
}
