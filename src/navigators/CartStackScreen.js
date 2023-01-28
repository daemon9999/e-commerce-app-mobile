import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "screens/CartStackScreen/Cart";
const CartStack = createNativeStackNavigator()

export default function CartStackScreen() {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name="Cart" component={Cart}/>

        </CartStack.Navigator>
    )
}