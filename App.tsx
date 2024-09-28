import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactList from "./screens/ContactList";
import ContactDetails from "./screens/ContactDetails";
import HomeScreen from "./screens/HomeScreen";
import FigmaDesign from "./screens/FigmaDesign";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Contact List"
        component={ContactList}
        />
        <Stack.Screen name="Contact Details"
         component={ContactDetails}
         />
        <Stack.Screen name="Figma Design"
         component={FigmaDesign}
         options={{ headerShown: false }} 
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
