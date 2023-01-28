import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Entry from "screens/AuthStackScreen/Entry";
import Register from "screens/AuthStackScreen/Register";
import Login from "screens/AuthStackScreen/Login";
const AuthStack = createNativeStackNavigator();


export default function AuthStackScreen() {

    return (
      <AuthStack.Navigator
        initialRouteName="Entry"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Entry" component={Entry} />
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
      </AuthStack.Navigator>
    );
  }