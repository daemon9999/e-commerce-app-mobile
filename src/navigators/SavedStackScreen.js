import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Saved from "screens/SavedStackScreen/Saved";
const SavedStack = createNativeStackNavigator()

export default function SavedStackScreen() {
    return (
        <SavedStack.Navigator>
            <SavedStack.Screen name="Saved" component={Saved}/>

        </SavedStack.Navigator>
    )
}