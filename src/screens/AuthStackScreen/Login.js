import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import Input from 'components/Input';
import Btn from 'components/Btn';
import Separator from 'components/Separator';
import {google, facebook} from 'icons';
import {login} from 'config/firebase_config';
import Layout from 'components/Layout';

export default function Login({navigation}) {
  const handleSubmit = async (values, actions) => {
    const response = await login(values.email, values.password);
    if (response) {
      navigation.replace('Main');
    }
  };
  return (
    <Layout>
      <View className="mb-[35px]">
        <Text className="text-[32px] font-bold text-black mb-2">Sign In</Text>
        <Text className="text-[#000000] opacity-60">
          Log into your account existing
        </Text>
      </View>

      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: '',
          password: '',
        }}>
        {({
          isSubmitting,
          isValid,
          dirty,
          handleBlur,
          handleChange,
          handleSubmit,
          values,
        }) => (
          <View className="flex flex-col">
            <Input
              label="Email"
              handleBlur={handleBlur('email')}
              value={values.email}
              onChangeText={handleChange('email')}
              name="email">
              Enter your email address
            </Input>

            <Input
              label="Password"
              handleBlur={handleBlur('password')}
              value={values.password}
              onChangeText={handleChange('password')}
              name="password"
              type="password">
              Enter your password
            </Input>
            <View>
              <Btn
                onPress={handleSubmit}
                bg="bg-black"
                style={{marginTop: 5, marginBottom: 20}}
                textColor="text-white">
                Sign In
              </Btn>
            </View>
            <Separator>Or</Separator>
            <View>
              <Btn
                style={{
                  borderWidth: 1,
                  borderColor: '#B3B3B3',
                  marginTop: 20,
                  marginBottom: 15,
                }}
                bg="bg-white"
                textColor="text-black"
                reverse={false}
                icon={google}>
                Sign In with Google
              </Btn>
            </View>
            <View>
              <Btn
                style={{borderWidth: 1, borderColor: '#1877F2'}}
                bg="bg-[#1877F2]"
                textColor="text-white"
                reverse={false}
                icon={facebook}>
                Sign In with Facebook
              </Btn>
            </View>
          </View>
        )}
      </Formik>
      <View className="flex flex-row flex-auto items-center justify-center mt-5">
        <Text className="text-[#666666]">Don't you have an account? </Text>
        <Text
          className="text-black font-semibold underline"
          onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Text>
      </View>
    </Layout>
  );
}
