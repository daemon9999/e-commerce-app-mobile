import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "screens/SettingsStackScreen/Settings";
const SettingsStack = createNativeStackNavigator()

export default function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={Settings}/>

        </SettingsStack.Navigator>
    )
}