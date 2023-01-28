import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loader from 'components/Loader';
import MainTabScreen from 'navigators/MainTabScreen';
import AuthStackScreen from 'navigators/AuthStackScreen';




const Stack = createNativeStackNavigator();


function App() {


  return (
    <>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Loader">
          <Stack.Screen name="Loader" component={Loader} />
          <Stack.Screen name="Auth" component={AuthStackScreen} />
          <Stack.Screen name="Main" component={MainTabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
