import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactList from "./screens/ContactList";
import ContactDetails from "./screens/ContactDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contact List"
        component={ContactList}
        // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="ContactDetails" component={ContactDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
