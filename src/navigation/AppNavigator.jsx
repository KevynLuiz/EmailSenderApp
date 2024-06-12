import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ModificarScreen from "../screens/ModificarScreen";
import RecuperarScreen from "../screens/RecuperarScreen";
import RegisterScreen from "../screens/RegistrerScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator(){
return(
    <NavigationContainer>
        <Stack.Navigator>
           
        <Stack.Screen 
            component={LoginScreen}
            name="Login"
            />
             <Stack.Screen 
            component={RegisterScreen}
            name="Registro"/>
            <Stack.Screen component={RecuperarScreen}
            name="Recuperar"/>
  <Stack.Screen component={ModificarScreen}
            name="Modificação de Senha"/>

            <Stack.Screen component={HomeScreen}
            name="Home"/>
         

        </Stack.Navigator>
    </NavigationContainer>
);

}