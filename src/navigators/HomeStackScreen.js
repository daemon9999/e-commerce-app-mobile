import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useLayoutEffect} from 'react';
import Details from 'screens/HomeStackScreen/Details';
import Home from 'screens/HomeStackScreen/Home';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen({navigation, route}) {
    const hideRoutes = ['Details']
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (hideRoutes.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex', height: 70}});
    }
  }, [navigation, route]);


  return (
    <HomeStack.Navigator screenOptions={{
        headerShown: false
    }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} options={{
        animation: 'slide_from_right'
      }} />
    </HomeStack.Navigator>
  );
}
