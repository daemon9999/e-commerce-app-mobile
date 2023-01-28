import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import SavedStackScreen from './SavedStackScreen';
import CartStackScreen from './CartStackScreen';
import SettingsStackScreen from './SettingsStackScreen';
import {Text, Dimensions, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {home, heart, settings, shoppingBag} from 'icons';

const Tab = createBottomTabNavigator();

export default function MainTabScreen() {
  const {width, height} = Dimensions.get("window")
  
  const setLabel = route => {
    let label;
    if (route.name === 'HomeTab') {
      label = 'Home';
    } else if (route.name === 'SavedTab') {
      label = 'Saved';
    } else if (route.name === 'CartTab') {
      label = 'Cart';
    } else if (route.name === 'SettingsTab') {
      label = 'Settings';
    }
    return label;
  };

  const setIcon = route => {
    let icon;
    if (route.name === 'HomeTab') {
      icon = home;
    } else if (route.name === 'SavedTab') {
      icon = heart;
    } else if (route.name === 'CartTab') {
      icon = shoppingBag;
    } else if (route.name === 'SettingsTab') {
      icon = settings;
    }
    return icon;
  };

  

  return (
    <View style={{width, height}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarLabel: ({focused}) => {
            return <Text style={styles.label(focused)}>{setLabel(route)}</Text>;
          },
          tabBarIcon: ({focused}) => {
            return (
              <SvgXml
                xml={setIcon(route)}
                style={styles.label(focused, 'icon')}
              />
            );
          },
          tabBarStyle: [{display: 'flex', height: 70}, null],
          
          
        })}>
        <Tab.Screen name="HomeTab" component={HomeStackScreen} 
         />
        <Tab.Screen name="SavedTab" component={SavedStackScreen} />
        <Tab.Screen name="CartTab" component={CartStackScreen} />
        <Tab.Screen name="SettingsTab" component={SettingsStackScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  label: (focused, name) => ({
    color: focused ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.6)',
    fontWeight: 'bold',
    paddingBottom: 15,
    marginTop: name === 'icon' ? 10 : 0,
  }),
});
